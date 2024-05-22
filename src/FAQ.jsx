import { useState } from "react";

const FAQ = () => {
    const [clickedIndex, setClickedIndex] = useState(null);

    const handleClick = (index) => {
        setClickedIndex(clickedIndex === index ? null : index);
    };

    const faqs = [
        {
            question: "1. What is AI Horizons 2024?",
            answer: "AI Horizons 2024 is a two-day conference dedicated to exploring the latest advancements and future trends in artificial intelligence. The event features keynote speeches, panel discussions, workshops, interactive demos, and networking opportunities.",
        },
        {
            question: "2. When and where is the event taking place?",
            answer: "AI Horizons 2024 will take place on [insert dates] at [insert venue name and location].",
        },
        {
            question: "3. Who should attend AI Horizons 2024?",
            answer: "This event is ideal for AI professionals, researchers, industry leaders, students, and anyone interested in the development and application of artificial intelligence.",
        },
        {
            question: "4. How can I register for the event?",
            answer: "You can register for AI Horizons 2024 through our official website. Early bird registration discounts are available until [insert date].",
        },
        {
            question: "5. What is included in the registration fee?",
            answer: "The registration fee includes access to all keynote sessions, panel discussions, workshops, interactive demos, networking events, meals (breakfast, lunch, and receptions), and conference materials.",
        },
        {
            question: "6. Are there any networking opportunities?",
            answer: "Yes, AI Horizons 2024 offers several networking opportunities, including networking breakfasts, coffee breaks, afternoon teas, and evening receptions on both days.",
        },
        {
            question: "7. Can I present my own research or project at the conference?",
            answer: "We welcome contributions from attendees. Please visit the 'Call for Papers' section on our website for submission guidelines and deadlines.",
        },
        {
            question: "8. Will there be opportunities to meet the speakers?",
            answer: "Yes, attendees will have the opportunity to meet and interact with speakers during networking breaks, workshops, and receptions.",
        },
        {
            question: "9. What topics will be covered at the conference?",
            answer: "Topics include the future of AI in various industries, ethical implications of AI, AI in healthcare, autonomous systems, AI in public policy, and more.",
        },
        {
            question: "10. What should I bring to the conference?",
            answer: "Bring your registration confirmation, a valid ID, business cards for networking, and any materials you may need for note-taking or participating in workshops.",
        },
        {
            question: "11. Is there a dress code for the event?",
            answer: "The dress code is business casual. We recommend wearing comfortable attire suitable for professional networking.",
        },
        {
            question: "12. Will there be meals provided?",
            answer: "Yes, meals including breakfast, lunch, and evening receptions will be provided on both days of the conference.",
        },
        {
            question: "13. How can I stay updated on event details?",
            answer: "Stay updated by subscribing to our newsletter and following us on social media. Updates will also be posted on the official event website.",
        },
        {
            question: "14. What if I have more questions?",
            answer: "If you have any additional questions, please contact our support team at [insert contact information] or visit the 'Contact Us' section on our website.",
        },
    ];

    return (
        <div className="p-10">
            <h2 className="text-2xl mb-10">Frequently Asked Questions (FAQ)</h2>
            {faqs.map((faq, index) => (
                <div key={index}>
                    <h3
                        onClick={() => handleClick(index)}
                        className="text-xl text-sky-900 cursor-pointer my-2"
                    >
                        {faq.question}
                    </h3>
                    <p className={`${clickedIndex === index ? "block max-w-[700px] mb-5 ml-4" : "hidden"}`}>
                        {faq.answer}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
