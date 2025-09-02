import React from 'react';

const FitIndiaPage = () => {
  const features = [
    {
      icon: '💪',
      title: 'Strength Training 🔥',
      description: 'Build muscle, increase endurance, and develop physical strength through our structured training programs with expert guidance. 💪',
      buttonText: 'Start Your Journey →'
    },
    {
      icon: '🧘',
      title: 'Yoga & Meditation 🕉️',
      description: 'Find inner peace and flexibility through our yoga sessions and mindfulness meditation practices. Achieve balance in mind and body! 🧘',
      buttonText: 'Join Sessions →'
    },
    {
      icon: '❤️',
      title: 'Cardio Workouts ⚡',
      description: 'Improve cardiovascular health with running, cycling, and high-intensity interval training. Get your heart pumping! ❤️',
      buttonText: 'Start Running →'
    },
    {
      icon: '🥗',
      title: 'Nutrition Guidance 🍎',
      description: 'Get personalized nutrition plans and dietary advice from certified nutritionists. Fuel your body right! ⚡',
      buttonText: 'Get Your Plan →'
    },
    {
      icon: '🏆',
      title: 'Competitions 💫',
      description: 'Participate in fitness challenges, sports tournaments, and wellness competitions. Show your champion spirit! 👑',
      buttonText: 'View Events →'
    },
    {
      icon: '👥',
      title: 'Community Support 🧡',
      description: 'Connect with like-minded individuals and build lasting friendships through fitness. Together we\'re stronger! 💪',
      buttonText: 'Join Community →'
    }
  ];

  const activities = [
    {
      icon: '🌅',
      title: 'Morning Runs 🏃',
      description: 'Start your day with energizing group runs around the campus and nearby areas. Fresh air, great company, and amazing energy! ⚡'
    },
    {
      icon: '💪',
      title: 'Gym Sessions 💪',
      description: 'Access to fully equipped gymnasium with professional trainers and guidance. Build strength, gain confidence! 💪'
    },
    {
      icon: '🏆',
      title: 'Sports Tournaments 🏆',
      description: 'Regular badminton, table tennis, and other indoor sports competitions. Show your competitive spirit! 🎯'
    },
    {
      icon: '🚴',
      title: 'Cycling Groups 🚴',
      description: 'Weekend cycling expeditions and daily cycling groups for fitness enthusiasts. Explore while you exercise! 🌟'
    },
    {
      icon: '🏊',
      title: 'Swimming 🏊',
      description: 'Swimming sessions for all skill levels with certified instructors. Dive into fitness and make a splash! 💦'
    },
    {
      icon: '🧘',
      title: 'Wellness Programs ✨',
      description: 'Holistic wellness programs focusing on mental and physical health. Balance your mind, body, and soul! 🕯️'
    }
  ];

  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop', alt: 'Gym Equipment' },
    { src: 'https://images.unsplash.com/photo-1524863479829-916d8e77f114?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Meditation' },
    { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', alt: 'Workout' },
    { src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Swimming' },
    { src: 'https://images.unsplash.com/photo-1560089000-7433a4ebbd64?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Running' },
    { src: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Group Training' }
  ];

  return (
<div className="min-h-screen">
  {/* Hero Section */}
<section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 min-h-screen flex items-center relative overflow-hidden font-sans">
  {/* Background decorative elements */}
  <div className="absolute inset-0 opacity-10">
    <div className="absolute top-20 left-10 text-6xl">⚽</div>
    <div className="absolute bottom-32 left-20 text-4xl">🏃</div>
    <div className="absolute top-40 right-20 text-5xl">🏆</div>
    <div className="absolute bottom-20 right-32 text-3xl">⚡</div>
  </div>

  <div className="container mx-auto px-6 relative z-10">
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
      
      {/* Left side content */}
      <div className="flex-1 max-w-lg text-center lg:text-left lg:pr-6">
        <div className="flex items-center justify-center lg:justify-start mb-4">
          <span className="text-5xl sm:text-6xl mr-3">💪</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-snug">
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              FIT INDIA
            </span>
            <span className="ml-2">🏆</span>
          </h1>
        </div>

        <p className="text-base sm:text-lg text-blue-100 leading-relaxed font-normal">
          <span className="text-yellow-300">⭐</span> Join the movement towards a healthier, fitter India! 
          <span className="text-yellow-300"> 🇮🇳 </span> Embrace wellness, build strength, and create a lifestyle 
          that celebrates physical and mental well-being. Together, we rise stronger! 
          <span className="text-yellow-300"> ✨</span>
        </p>
      </div>

      {/* Right side image card */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl max-w-md flex-shrink-0">
        {/* Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=500&fit=crop&crop=center" 
          alt="Person doing workout"
          className="w-full h-80 object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-blue-800/30 to-orange-500/60"></div>
        
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white font-extrabold text-2xl sm:text-3xl flex items-center">
            <span className="mr-2">💪</span> 
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
              FIT INDIA
            </span> 
            <span className="ml-2">🏆</span>
          </h2>
          <p className="text-white text-sm sm:text-base mt-2 font-medium">Transform Your Life</p>
        </div>
      </div>
    </div>
  </div>
</section>




      {/* Why Choose Fit India Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">🎯 Why Choose Fit India?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ⭐ Discover the amazing benefits of joining our comprehensive fitness and 
              wellness program designed for students, faculty, and staff. Your journey to a 
              healthier you starts here! 🚀
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-orange-400">
                <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{feature.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{feature.description}</p>
                <div className="text-center">
                  <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                    {feature.buttonText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fitness in Action Gallery */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-600 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">🏋️ Fitness in Action</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              📸 See our amazing community in action! Every picture tells a story of dedication, progress, and transformation. 🏆📸
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover hover:opacity-90 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Amazing Activities */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">⚡ Our Amazing Activities</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              🔥 Explore our diverse range of fitness activities designed to keep you engaged, motivated, and having fun while getting fit! 🎉
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 border-t-4 border-orange-400">
                <div className="text-4xl mb-4 text-center">{activity.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">{activity.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{activity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Call to Action */}
<section className="bg-gradient-to-r from-orange-400 to-orange-500 py-16">
  <div className="text-center text-white px-6">
    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
      🚀 Ready to Transform Your Life?
    </h2>

    {/* Subtext */}
    <p className="text-base sm:text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-orange-100 drop-shadow-md">
      🌟 Join thousands of students and faculty members who have already started their 
      incredible fitness journey with Fit India CCET. Your transformation story starts today! ✨
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button className="bg-white text-orange-600 px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base shadow-md hover:bg-orange-50 transition-all">
        🚀 Join Now
      </button>
      <button className="border-2 border-white text-white px-6 py-2.5 rounded-full font-semibold text-sm sm:text-base hover:bg-white hover:text-orange-600 transition-all">
        🌿 Learn More
      </button>
    </div>
  </div>
</section>


    </div>
  );
};

export default FitIndiaPage;