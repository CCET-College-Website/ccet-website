import { useState, useEffect } from 'react';

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
    const [isOpen, setIsOpen] = useState(false);
    const [newQuestion, setNewQuestion] = useState('');
    const [groupedFaqs, setGroupedFaqs] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFAQs();
    }, []);

    const fetchFAQs = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch('https://ccet.ac.in/api/faq.php?grouped=true');
            const result = await response.json();

            if (Array.isArray(result) && result.length > 0) {
                const grouped = result.reduce((acc, category) => {
                    acc[category.category_name] = category.faqs;
                    return acc;
                }, {});
                setGroupedFaqs(grouped);
            } else if (result.success === false) {
                setError(result.error || "No FAQs found");
                setGroupedFaqs({});
            } else {
                setError("No FAQs available");
                setGroupedFaqs({});
            }
        } catch (err) {
            setError("Error loading FAQs");
            console.error("FAQ fetch error:", err);
            setGroupedFaqs({});
        } finally {
            setLoading(false);
        }
    };

    const filteredFaqs = Object.entries(groupedFaqs).reduce((acc, [category, items]) => {
        const filteredItems = items.filter((faq) =>
            faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filteredItems.length) acc[category] = filteredItems;
        return acc;
    }, {});

    const handleSubmit = async () => {
        if (!newQuestion.trim()) return;

        try {
            const response = await fetch('https://ccet.ac.in/api/faq.php?table=user_questions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    question: newQuestion.trim(),
                }),
            });

            const result = await response.json();

            if (result.success) {
                alert('Your question has been submitted successfully! We will review it soon.');
                setNewQuestion('');
                setIsOpen(false);
            } else {
                alert(`Error submitting question: ${result.error || 'Unknown error'}`);
            }
        } catch (err) {
            console.error('Submit error:', err);
            alert('Failed to submit question. Please try again.');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-[#f7f4f4] p-10 flex flex-col items-center font-serif">
                <div className="w-full max-w-6xl bg-white shadow-2xl rounded-xl p-6">
                    <h1 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h1>
                    <div className="flex justify-center items-center py-16">
                        <span className="text-gray-500">Loading FAQs...</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#f7f4f4] p-10 flex flex-col items-center font-serif">
            <div className="w-full max-w-6xl bg-white shadow-2xl rounded-xl p-6">
                <h1 className="text-2xl font-bold text-center mb-4">Frequently Asked Questions</h1>
                <SearchBar query={searchQuery} setQuery={setSearchQuery} />

                {error && Object.keys(groupedFaqs).length === 0 ? (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center mb-6">
                        <p className="text-red-700">{error}</p>
                    </div>
                ) : Object.keys(filteredFaqs).length === 0 ? (
                    <p className="text-center text-gray-500">No questions matched your search.</p>
                ) : (
                    Object.entries(filteredFaqs).map(([category, questions]) => (
                        <div key={category} className="mb-6 border-2 border-black-400 rounded-lg p-4">
                            <h2 className="text-xl font-semibold border-b pb-2 mb-2">{category}</h2>
                            {questions.map((faq) => (
                                <FAQItem key={faq.id} question={faq.question}>
                                    <div
                                        className="text-gray-700 border-2 border-black-300 rounded-lg p-3"
                                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                                    />
                                </FAQItem>
                            ))}
                        </div>
                    ))
                )}

                <div className="text-center mt-6">
                    <button
                        className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
                        onClick={() => setIsOpen(true)}
                    >
                        ASK MORE
                    </button>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
                        <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
                        <div>
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
                                    className="mr-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                                    onClick={handleSubmit}
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
