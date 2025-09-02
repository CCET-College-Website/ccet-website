import { useState } from 'react';

const FAQItem = ({ question, children }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b py-2">
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left text-lg font-medium flex justify-between items-center"
      >
        {question}
        <span className="pr-4">{open ? '▲' : '▼'}</span>
      </button>
      <div
        style={{
          maxHeight: open ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'max-height 0.4s, padding 0.4s',
        }}
        className="faq-content"
      >
        <div
          className={`mt-2 text-gray-700 transition-opacity duration-400 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search for a question..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="w-full border border-gray-300 rounded-md px-4 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-400"
  />
);

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false); // modal open/close
  const [newQuestion, setNewQuestion] = useState(''); // input for new question

  const faqs = [
    {
      category: 'Scholarship and Fee Concession',
      question: 'What are the different scholarships and fee concessions are provided?',
      answer: (
        <ol className="text-gray-700 border-2 border-black-300 rounded-lg p-3 list-decimal list-inside space-y-1">
          <li>UT Merit Scholarships</li>
          <li>Free Education for Meritorious Scheduled Castes and Other Backward Classes Students</li>
          <li>Merit-cum means based scholarship to minority communities</li>
          <li>Tuition Fee Waiver Scheme for Economically Weaker Section students</li>
          <li>Half fee ship on tuition fee shall be admissible to all the students belonging to the Schedule Caste/ Schedule Tribes.</li>
          <p> Details of above and other fee concession are available in prospectus 2016-17.</p>
        </ol>
      ),
    },
    {
      category: 'Admission Process Procedure',
      question: 'What are the minimum eligibility criteria for admission?',
      answer: (
        <div className="text-gray-700 border-2 border-black-300 rounded-lg p-3">
          <p>The admission criteria are as follows:</p>
          <ul className="list-disc list-inside mt-1">
            <li>The mode of admission to the First Semester course in any branch will be decided by the P.U. Syndicate...</li>
            <li>A candidate must have obtained a minimum of 60% marks in the qualifying examination i.e. +2 ...</li>
            <li>The mode of admission to the Second year B.E Programme (lateral entry) where ever applicable ...</li>
          </ul>
        </div>
      ),
    },
    {
      category: 'Admission Process Procedure',
      question: 'If I do not get the preference of my choice, will it be possible to transfer my branch after first year?',
      answer: (
        <p className="text-gray-700 border-2 border-black-300 rounded-lg p-3">
          Yes, branch can be changed but it would be as per P.U guidelines amended time to time.
        </p>
      ),
    },
    {
      category: 'Academic Certificate and Procedure',
      question: (
        <div>
          How to get:
          <ul className="list-decimal list-inside space-y-1">
            <li>Provisional Certificate</li>
            <li>Character Certificate</li>
            <li>Bonafide Certificate</li>
            <li>Scholarship certificate from college.</li>
          </ul>
        </div>
      ),
      answer: (
        <div className="text-gray-700 border-2 border-black-300 rounded-lg p-3">
          <p>
            Student should fill prescribed Performa available in download tab at CCET website. Student has to clear all
            dues before issue of certificate.
          </p>
        </div>
      ),
    },
    {
      category: 'Regarding Ordinance Rules',
      question: 'What are the regulations issued by the Panjab University to earn B.E. Degree in any mentioned stream?',
      answer: (
        <ol className="text-gray-700 border-2 border-black-300 rounded-lg p-3 list-decimal list-inside space-y-1">
          <li>The duration of the course of instruction ...</li>
          <li>A student shall be eligible to appear in the examination only if he/she has attended at least 75% ...</li>
          <li>On the recommendations of the Chairperson ...</li>
          <li>A candidate will be promoted to next year only if he has earned 50% of the total credits ...</li>
        </ol>
      ),
    },
  ];

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    const category = faq.category;
    if (!acc[category]) acc[category] = [];
    acc[category].push(faq);
    return acc;
  }, {});

  // Filter by search query
  const filteredFaqs = Object.entries(groupedFaqs).reduce((acc, [category, items]) => {
    const filteredItems = items.filter((faq) =>
      (typeof faq.question === 'string'
        ? faq.question
        : faq.question.props.children?.join('') || ''
      )
        .toString()
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
    );
    if (filteredItems.length) acc[category] = filteredItems;
    return acc;
  }, {});

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newQuestion.trim()) return;
    alert(`Your question has been submitted: "${newQuestion}"`);
    setNewQuestion('');
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#f7f4f4] p-10 flex flex-col items-center font-serif">
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-xl p-6">
        <h1 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h1>
        <SearchBar query={searchQuery} setQuery={setSearchQuery} />

        {Object.keys(filteredFaqs).length === 0 ? (
          <p className="text-center text-gray-500">No questions matched your search.</p>
        ) : (
          Object.entries(filteredFaqs).map(([category, questions]) => (
            <div key={category} className="mb-6 border-2 border-black-400 rounded-lg p-4">
              <h2 className="text-xl font-semibold border-b pb-2 mb-2">{category}</h2>
              {questions.map((faq, idx) => (
                <FAQItem key={idx} question={faq.question}>
                  {faq.answer}
                </FAQItem>
              ))}
            </div>
          ))
        )}

        {/* Ask More Button */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
            onClick={() => setIsOpen(true)}
          >
            ASK MORE
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
            <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
            <form onSubmit={handleSubmit}>
              <textarea
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Type your question..."
                className="w-full border p-3 rounded mb-4 text-lg"
                rows={6}
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
                  onClick={() => setIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
