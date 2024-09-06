import { useState } from "react";
import { motion } from "framer-motion";
import generateCkanApiToken from "../assets/images/faq/generate-ckan-api-token.png";

const FAQData = [
    {
        question: "What is qsv pro?",
        answer: "qsv pro is a desktop application to view and transform spreadsheet data (for example Microsoft Excel data and CSV) with a graphical user interface based on the qsv CLI tool. It includes multiple features for data wrangling and is available on compatible Windows, macOS, and Linux devices.",
        links: [
            {
                label: "About datHere",
                url: "https://dathere.com",
            },
            {
                label: "Learn to use qsv",
                url: "https://100.dathere.com",
            },
        ],
    },
    {
        question: "How do I get qsv pro?",
        answer: "You may download the latest version of qsv pro from the top of this page. Within the app you may continue with the free plan or you may purchase a license key from store.dathere.com to use paid features. You may choose between any of the installers for Windows (.msi), macOS (.app.tar.gz), and Linux (.AppImage).",
        links: [
            {
                label: "Purchase a license key",
                url: "https://store.dathere.com/checkout/buy/41f919fd-2b68-40ea-a5ed-0f531b2efba5",
            },
        ],
    },
    {
        question: "Where can I provide feedback?",
        answer: "You may provide feedback on our support site by creating a ticket.",
        links: [
            {
                label: "Contact support",
                url: "https://support.dathere.com",
            },
        ],
    },
    {
        question: 'What is CKAN?',
        answer: "CKAN is an open-source data management system used around the world. You may learn more at ckan.org.",
        links: [
            {
                label: "CKAN website",
                url: "https://ckan.org",
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
        question: "How can I use qsv pro on more than one device?",
        answer: "Each license key can only be activated for 1 device at a time. If you used your license key on a device and want to use it on a different device, you may deactivate your license key by navigating to your billing information page then deactivate your license. Then you may activate your license key on your other device. If you need more than 1 device to use qsv pro at one time, you may purchase an additional license key.",
        links: [
            {
                label: "Manage billing information",
                url: "https://store.dathere.com/billing",
            },
            {
                label: "Purchase a license key",
                url: "https://store.dathere.com/checkout/buy/41f919fd-2b68-40ea-a5ed-0f531b2efba5",
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
        answer: "Yes, you may change the theme with the sun/moon icon on the navigation panel of qsv pro.",
    },
    {
        question: "Can I change the zoom size?",
        answer: "Yes, you may change the zoom size in the settings panel of qsv pro.",
    },
    {
        question: "What is qsv pro's current status?",
        answer: "qsv pro has reached version 1, but that does not mean it cannot contain errors and features may still be added and/or improved. If you encounter any bugs or have any feature/feedback requests, you may contact us on our support site by creating a ticket.",
        links: [
            {
                label: "Contact support",
                url: "https://support.dathere.com",
            },
        ],
    },
    {
        question: 'Why is "experimental" mentioned?',
        answer: "qsv pro may include \"experimental\" features that may not be fully functional/tested and may be outdated. If you encounter any bugs or have any feature/feedback requests, you may contact us on our support site by creating a ticket.",
        links: [
            {
                label: "Contact support",
                url: "https://support.dathere.com",
            },
        ],
    }
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
