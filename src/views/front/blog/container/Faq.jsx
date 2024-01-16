import React, {useState} from 'react';

const Faq = () => {

    const initialFAQs = [
        {
            isOpen: true,
            question: "How does it work?",
            answer: "Our service allows tenants to report their rental payments to Credit Bureaus, helping them build credit history and boost their credit scores. By doing so, tenants can improve their financial standing and gain access to better financial services."
        },
        {
            question: "Why is it important?",
            answer: "Having a strong credit history and high credit scores is crucial for accessing various financial opportunities. Our service aims to address the inequality in credit by providing tenants with a way to build credit and improve their financial well-being."
        },
        {
            question: "Who can benefit?",
            answer: "Our service is designed for anyone who rents, including students, first-time renters, and newcomers to Canada. If you don't have a Canadian credit history, our service can help you establish credit and unlock better financial options."
        },
        {
            question: "How do i get started?",
            answer: "Getting started is easy. Simply sign up with Credisys and start reporting your rental payments to Credit Bureaus. You'll be on your way to building Canadian credit and improving your financial future."
        },

    ];
    const [faqs, setFAQs] = useState(initialFAQs);

    const toggleAnswer = (index) => {
        const newFAQs = [...faqs];
        newFAQs[index].isOpen = !newFAQs[index].isOpen;
        setFAQs(newFAQs);
        console.log(faqs[index])
    };
    return (
        <section>
            <div
                className="p-4 text-center sm:p-8">
                <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white border-b gray p-4">Frequently Asked
                    Questions</h5>
                <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Find answers to commonly asked
                    questions about our service.</p>
            </div>

            <div className="container mx-auto flex justify-center p-5">
                {/*Left side with register buttons */}
                <div className="w-2/4 my-auto">
                    <div className="max-w-2xl mx-auto">
                        <div className="space-y-4">
                            {initialFAQs.map((faq, index) => (
                                <div className="bg-white p-4 rounded-lg shadow-md" key={index}>
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-semibold">{faq.question}</h2>
                                        <button className="focus:outline-none cursor-pointer text-gray-500 hover:text-blue-500" onClick={() => toggleAnswer(index)}>
                                            <svg className="h-5 w-5" fill="none" stroke="currentColor"
                                                 viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                                      d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    {/* Use conditional rendering here */}
                                    {faqs[index].isOpen && (
                                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                                    )}
                                </div>
                            ))}

                        </div>
                    </div>
                </div>

                {/* Right side with a big image */}
                <div className="w-2/4 justify-center align-items-center my-auto">
                    <h2 className="text-5xl text-gray-600 font-semibold mb-4">Frequently Asked<br/> Questions.
                    </h2>
                </div>
            </div>
        </section>
    );
};

export default Faq;