import { useState } from "react";
import { motion } from "framer-motion";
import generateCkanApiToken from "../assets/images/faq/generate-ckan-api-token.png";

const FAQData = [
    {
        question: "What is qsv pro?",
        answer: "qsv pro is a spreadsheet data wrangling desktop application to view, transform, and upload data to CKAN with a graphical user interface based on the qsv CLI tool. It features a suite of recipes (scripts) for common data wrangling tasks to perform on your spreadsheet, including sorting rows, removing duplicate rows, and removing Personally Identifiable Information (PII).",
    },
    {
        question: 'What does "preview" mean?',
        answer: "qsv pro is currently in preview, which means that it may contain bugs and does not include all of the features that are planned in a stable release (features may also be removed). If you encounter any bugs or have any feature/feedback requests, you may contact us on our support site by creating a ticket.",
        links: [
            {
                label: "Support site",
                url: "https://support.dathere.com",
            },
        ],
    },
    {
        question: 'What does "experimental" mean?',
        answer: "qsv pro may include experimental features that may not be fully functional/tested or may not be included in a stable release. If you encounter any bugs or have any feature/feedback requests, you may contact us on our support site by creating a ticket.",
        links: [
            {
                label: "Support site",
                url: "https://support.dathere.com",
            },
        ],
    },
    {
        question: "How do I get qsv pro?",
        answer: "You may download the latest version of qsv pro with a 7-day free trial (no payment method required). During or after the trial, you may purchase a license to continue using qsv pro. You may choose between any of the installers for Windows (.msi, -setup.exe), macOS (.app, .dmg), and Linux (.AppImage, .deb).",
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
        answer: "You may provide feedback on our support site by creating a ticket.",
        links: [
            {
                label: "Support site",
                url: "https://support.dathere.com",
            },
        ],
    },
    {
        question: "Where can I generate a CKAN API token?",
        answer: "You may generate a CKAN API token by logging into your CKAN account on your CKAN instance. Then, click on the user profile icon on the top right corner, click the 'API Tokens' tab, enter any name for your token and click the 'Create API Token' button, and then your API token will appear on the page. Note that you may not view your API token from qsv pro, so we recommend saving this token somewhere safe.",
        screenshots: [
            {
                src: generateCkanApiToken.src,
                alt: "Example of CKAN API token generation on user's profile page",
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
    {
        question: "Is there a light theme?",
        answer: "Yes, you may change the theme with the sun/moon icon on the top right of qsv pro.",
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
                        Questions and Answers
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
