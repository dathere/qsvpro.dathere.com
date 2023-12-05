import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
    {
        question: "What is qsv pro?",
        answer: "qsv pro is a desktop application that allows you to run qsv commands with a graphical user interface based on the qsv CLI tool. It also features a suite of recipes (scripts) for common data wrangling tasks to perform on your spreadsheet, including sorting rows, removing duplicate rows, and removing Personally Identifiable Information (PII).",
    },
    {
        question: "How do I get qsv pro?",
        answer: "qsv pro is currently in beta. You can get beta access by purchasing a subscription to qsv pro on our store. You will receive an email with a download link to qsv pro after purchasing a subscription, or you may click the Download button on this page's navigation bar to download qsv pro (license key still required).",
    },
    {
        question: "Where can I provide feedback?",
        answer: "There is a feedback button in the top right corner of qsv pro. You may also email us at dathere.com/contact.",
    },
];

export const FAQ = () => (
    <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
        <div className="absolute -top-10" id="FAQ" />
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
                <div className="md:max-w-4xl mx-auto">
                    <p className="mb-7 custom-block-subtitle text-center">
                        Have any questions?
                    </p>
                    <h2 className="mb-16 custom-block-big-title text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="mb-11 flex flex-wrap -m-1">
                        {FAQData.map((item, index) => (
                            <div className="w-full p-1">
                                <FAQBox
                                    title={item.question}
                                    content={item.answer}
                                    key={`${item.question}-${item.answer}`}
                                    defaultOpen={index === 0}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div
            className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-customDarkBg3 custom-border-gray-darker mb-4 relative hover:bg-customDarkBg3Hover cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="flex flex-col p-2  justify-center items-start">
                <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0">
                    {title}
                </h3>
                <p
                    className={`text-customGrayText pt-4 transition-all duration-300 overflow-hidden ${
                        isOpen ? "max-h-96" : "max-h-0"
                    }`}
                >
                    {content}
                </p>
            </div>
            <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
                <svg
                    width="28px"
                    height="30px"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transition-all duration-500  ${
                        isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
                    }`}
                >
                    <path
                        d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
                        stroke="#007AFF"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></path>
                </svg>
            </div>
        </div>
    );
};
