import { useState } from "react";
import { motion } from "framer-motion";
import ckanUrlLocation from "../assets/images/faq/ckan-url-location.png";
import generateCkanApiKey from "../assets/images/faq/generate-ckan-api-key.png";
import ckanApiKeyLocation from "../assets/images/faq/ckan-api-key-location.png";

const FAQData = [
    {
        question: "What is qsv pro?",
        answer: "qsv pro is a desktop application that allows you to run qsv commands with a graphical user interface based on the qsv CLI tool. It also features a suite of recipes (scripts) for common data wrangling tasks to perform on your spreadsheet, including sorting rows, removing duplicate rows, and removing Personally Identifiable Information (PII).",
    },
    {
        question: "How do I get qsv pro?",
        answer: "qsv pro is currently in preview. You may download the latest version of qsv pro with a 7-day free trial. During or after the trial, you may purchase a license to continue using qsv pro.",
        links: [
            {
                label: "Download qsv pro",
                url: "https://github.com/dathere/qsv-pro/releases/latest",
            },
            {
                label: "Purchase a license",
                url: "https://store.dathere.com/checkout/buy/41f919fd-2b68-40ea-a5ed-0f531b2efba5",
            },
        ],
    },
    {
        question: "Where can I provide feedback?",
        answer: "There is a feedback button in the top right corner of qsv pro. You may also contact us with the links in the footer.",
    },
    {
        question:
            "Where can I find my CKAN dataset's URL that I want to upload my data to?",
        answer: "Your CKAN dataset's URL is the URL of your CKAN instance (e.g. https://demo.ckan.org) followed by /dataset/ and the dataset's ID (for example: https://demo.ckan.org/dataset/sample-dataset).",
        screenshots: [
            {
                src: ckanUrlLocation,
                alt: "Example of CKAN dataset URL location",
            },
        ],
    },
    {
        question: "Where can I generate a CKAN API key?",
        answer: "You can generate a CKAN API key by logging into your CKAN account, clicking on the user settings gear icon on the top right corner, and clicking 'Regenerate API Key' on the bottom right corner of the page. Then when you click on your username on the top right corner, you will see your API key on the bottom left corner of the page.",
        screenshots: [
            {
                src: generateCkanApiKey,
                alt: "Example of CKAN API key generation on user's settings page",
            },
            {
                src: ckanApiKeyLocation,
                alt: "Example of CKAN API key location on user's profile page",
            },
        ],
    },
    {
        question: "Where can I manage my billing information?",
        answer: "You may manage your billing information at store.dathere.com/billing.",
        links: [
            {
                label: "Manage billing information",
                url: "https://store.dathere.com/billing",
            },
        ],
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
                            <div key={index} className="w-full p-1">
                                <FAQBox
                                    title={item.question}
                                    links={item.links}
                                    screenshots={item.screenshots}
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

const FAQBox = ({ defaultOpen, title, links, screenshots, content }) => {
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

                {/* Links as buttons with link.url and link.label */}
                {links && links.length > 0 && (
                    <div
                        className={`transition-all duration-500 my-2 ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="flex flex-wrap -m-1 space-x-2">
                            {links.map((link, index) => (
                                <div
                                    key={index}
                                    className="w-fit mt-1 py-1 px-2 border rounded border-blue-300"
                                >
                                    <a
                                        href={link.url}
                                        className="text-blue-300 hover:text-blue-200"
                                        target="_blank"
                                    >
                                        {link.label}
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {screenshots && screenshots.length > 0 && (
                    <div
                        className={`transition-all duration-500 my-2 ${
                            isOpen ? "block" : "hidden"
                        }`}
                    >
                        <div className="flex flex-wrap -m-1">
                            {screenshots.map((screenshot, index) => (
                                <div
                                    key={index}
                                    className="w-full p-1 space-y-2"
                                >
                                    <img
                                        src={screenshot.src}
                                        alt={screenshot.alt}
                                        className="rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
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
