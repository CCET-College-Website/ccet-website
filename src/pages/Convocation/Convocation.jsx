import React, { useState, useEffect } from 'react';

const Convocation = () => {
  const [convocationData, setConvocationData] = useState({
    convocation_info: null,
    gallery: [],
    schedule: [],
    speakers: [],
    updates: [],
    venue: null
  });
  const [contactInfo, setContactInfo] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedYear, setSelectedYear] = useState('2023');

  useEffect(() => {
    fetchConvocationData();
  }, [selectedYear]);

  const fetchConvocationData = async () => {
    setLoading(true);
    setError(null);

    try {
      const [convocationRes, contactsRes] = await Promise.all([
        fetch(`https://ccet.ac.in/api/convocation.php?grouped=true&year=${selectedYear}`),
        fetch(`https://ccet.ac.in/api/convocation.php?table=info&year=1800`)
      ]);

      const [convocationData, contactsData] = await Promise.all([
        convocationRes.json(),
        contactsRes.json()
      ]);

      setConvocationData(convocationData);
      setContactInfo(Array.isArray(contactsData) ? contactsData : []);
    } catch (err) {
      setError("Error loading convocation data");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  const getFullUrl = (path) => {
    if (!path) return "#";
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.substring(1) : path;
    return `https://ccet.ac.in/${cleanPath}`;
  };

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-2xl font-semibold text-blue-700">Loading Convocation Information...</h2>
        </div>
    );
  }

  if (error) {
    return (
        <div className="flex items-center justify-center min-h-screen">
          <h2 className="text-2xl font-semibold text-red-500">{error}</h2>
        </div>
    );
  }

  const { convocation_info, gallery, schedule, speakers, updates, venue } = convocationData;

  return (
      <div className="min-h-screen bg-gray-50 font-sans">
        <div className="py-16 px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-yellow-500">
            Annual Convocation {convocation_info?.year || selectedYear}
          </h1>
        </div>

        {convocation_info && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <span className="text-4xl mb-3 block">📅</span>
                  <div className="text-gray-600 text-sm font-semibold mb-1">Date</div>
                  <div className="text-gray-800 font-medium">{convocation_info.date || 'To be announced'}</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <span className="text-4xl mb-3 block">⏰</span>
                  <div className="text-gray-600 text-sm font-semibold mb-1">Time</div>
                  <div className="text-gray-800 font-medium">{convocation_info.time || '10:00 AM onwards'}</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <span className="text-4xl mb-3 block">📍</span>
                  <div className="text-gray-600 text-sm font-semibold mb-1">Venue</div>
                  <div className="text-gray-800 font-medium">{convocation_info.venue || 'CCET Main Auditorium'}</div>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 text-center">
                  <span className="text-4xl mb-3 block">🎓</span>
                  <div className="text-gray-600 text-sm font-semibold mb-1">Graduates</div>
                  <div className="text-gray-800 font-medium">{convocation_info.graduates || '850+ students'}</div>
                </div>
              </div>
            </div>
        )}

        {gallery.length > 0 && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Photo Gallery</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Glimpses from previous convocation ceremonies showcasing the pride and joy of our graduates
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((image) => (
                    <div key={image.id} className="bg-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                      <img
                          src={getFullUrl(image.image_url)}
                          alt={image.caption || 'Gallery Image'}
                          className="w-full h-64 object-cover"
                      />
                      {image.caption && (
                          <div className="p-4 bg-white">
                            <p className="text-sm text-gray-700">{image.caption}</p>
                          </div>
                      )}
                    </div>
                ))}
              </div>
            </div>
        )}

        {schedule.length > 0 && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Program Schedule</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                A detailed programme to honor our graduates and celebrate their academic achievements
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {schedule.map((item) => (
                    <div key={item.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
                      <div className="text-blue-600 font-bold text-lg mb-2">{item.time}</div>
                      <div className="text-gray-800 font-semibold text-xl mb-2">{item.title}</div>
                      {item.description && (
                          <div className="text-gray-600 text-sm">{item.description}</div>
                      )}
                    </div>
                ))}
              </div>
            </div>
        )}

        {speakers.length > 0 && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">Distinguished Speakers</h2>
              <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
                Eminent personalities who will inspire our graduating engineers and technologists
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {speakers.map((speaker) => (
                    <div key={speaker.id} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow">
                      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300 overflow-hidden">
                        {speaker.avatar_url ? (
                            <img
                                src={getFullUrl(speaker.avatar_url)}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-500 text-3xl">
                              👤
                            </div>
                        )}
                      </div>
                      <div className="text-gray-800 font-bold text-lg mb-1">{speaker.name}</div>
                      <div className="text-blue-600 text-sm font-semibold mb-3">{speaker.title}</div>
                      {speaker.description && (
                          <div className="text-gray-600 text-sm">{speaker.description}</div>
                      )}
                    </div>
                ))}
              </div>
            </div>
        )}

        {updates.length > 0 && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Important Updates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {updates.map((update) => (
                    <div key={update.id} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                      <div className="text-gray-800 font-semibold text-xl mb-2">{update.title}</div>
                      {update.description && (
                          <div className="text-gray-600 text-sm">{update.description}</div>
                      )}
                    </div>
                ))}
              </div>
            </div>
        )}

        {venue && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Venue Information</h2>
              <div className="bg-white rounded-lg shadow-md p-8">
                <div className="text-2xl font-bold text-gray-800 mb-4">{venue.name}</div>
                {venue.address && (
                    <div className="text-gray-700 mb-4 whitespace-pre-line">{venue.address}</div>
                )}
                {venue.features && (
                    <div className="mt-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-3">Facilities</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {venue.features.split('\n').map((feature, index) => (
                            <div key={index} className="flex items-center text-gray-700">
                              <span className="text-green-600 mr-2">✓</span>
                              {feature}
                            </div>
                        ))}
                      </div>
                    </div>
                )}
              </div>
            </div>
        )}

        {contactInfo.length > 0 && (
            <div className="max-w-6xl mx-auto px-4 py-12">
              <div className="bg-blue-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
                <div className="space-y-2 text-gray-700">
                  {contactInfo.map((contact) => (
                      <div key={contact.id}>
                        {contact.date && <div><strong>Main Office:</strong> {contact.date}</div>}
                        {contact.time && <div><strong>Convocation Helpdesk:</strong> {contact.time}</div>}
                        {contact.venue && <div><strong>Security Office:</strong> {contact.venue}</div>}
                        {contact.graduates && <div><strong>Email:</strong> {contact.graduates}</div>}
                      </div>
                  ))}
                </div>
              </div>
            </div>
        )}
      </div>
  );
};

export default Convocation;