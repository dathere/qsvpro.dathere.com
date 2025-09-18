import { useState } from "react";
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

const pricingData = [
    ["Import spreadsheets up to 1MB",
    "Transform data with free recipes",
    "View spreadsheet statistics and frequency data",
    "Run Polars SQL queries",
    "Upload/Download compatible data from a CKAN instance",
    "List 1 CKAN instance at a time",
    "Use free tools in Toolbox",
    "Use qsv slice from Flow",
    "Use qsv count and qsv slice in Configurator (experimental)",
    "Export Workflow file data and various data table data to CSV, TSV, TAB, and SSV",
    ],
    ["Import spreadsheets larger than 1MB",
    "View extra statistics in the Workflow based on your file",
    "Transform data with Pro recipes",
    "List more than 1 CKAN instance",
    "Use Pro tools in Toolbox",
    "Use more qsv commands other than qsv slice from Flow",
    "Use more qsv commands other than qsv count and qsv slice in Configurator (experimental)",
    "Export Workflow file data and various data table data to 16 formats",
    "Run csvlens on a spreadsheet or data table in a new Alacritty terminal (Windows only)"
    ],
    []
];

export const Pricing = () => {
    const [isMonthly, setIsMonthly] = useState(true);

    const handleChange = () => {
        setIsMonthly(!isMonthly);
    };

    return (
        <section className="w-screen flex justify-center bg-customDarkBg2 relative">
            <div className="absolute -top-16" id="pricing" />
            <div className="pb-20 pt-12 bg-customDarkBg2  2xl:w-[1150px] lg:w-[1050px]  md:w-4/5 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <span className="custom-block-subtitle">
                                Pick a Plan
                            </span>
                            <h2 className="mt-6 mb-6 text-4xl lg:text-5xl font-bold font-heading text-white">
                                Choose your plan
                            </h2>
                            <p className="mb-6 text-customGrayText">
                                To unlock paid features, you'll
                                need to purchase and activate a license key. USD pricing.
                            </p>
                            <label className="mx-auto bg-customDarkBg3 relative flex justify-between items-center group text-xl w-44 h-12 rounded-lg pr-36 pl-1 cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="peer appearance-none"
                                    checked={!isMonthly}
                                    onChange={handleChange}
                                />
                                <span className="h-8 w-[5.5rem] flex items-center pr-2 bg-customDarkBg3 after:rounded-lg duration-300 ease-in-out  after:w-[30rem] after:h-10  after:bg-customPrimary   after:shadow-md after:duration-300 peer-checked:after:translate-x-[5.5rem] cursor-pointer"></span>
                                <div className="flex absolute text-white text-sm font-bold">
                                    <div
                                        className={
                                            isMonthly
                                                ? "mr-9 ml-3"
                                                : "mr-9 ml-3 text-gray-400"
                                        }
                                    >
                                        Monthly
                                    </div>
                                    <div
                                        className={isMonthly && "text-gray-400"}
                                    >
                                        Yearly
                                    </div>
                                </div>
                            </label>
                        </div>
                        <div className="flex flex-wrap flex-col lg:flex-row -mx-4 items-center mt-6">
                            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                                    <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                                        Free
                                    </h4>
                                    <div className="flex justify-start items-end">
                                        <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                                            $0
                                        </div>
                                    </div>
                                    <p className="my-4 text-gray-400 leading-loose text-left">
                                        No license key required
                                    </p>
                                    <ul className="mb-14 text-white">
                                        {pricingData[0].map((text, index) => (
                                            <li
                                                className="mb-4 flex"
                                                key={`${text}-${index}`}
                                            >
                                                <CheckArrowIcon
                                                    fillColor={
                                                        text.includes(
                                                            "(experimental)"
                                                        )
                                                            ? "fill-red-300"
                                                            : ""
                                                    }
                                                />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="#">
                                        <div className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200">
                                            Download qsv pro
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                                <div className="px-8 py-8 bg-blue-950 rounded-3xl border-4 border-blue-600">
                                    <h4 className="mb-2 2xl:mb-4 text-3xl font-bold font-heading text-white text-left">
                                        Pro
                                    </h4>
                                    <div className="flex justify-start items-end">
                                        <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                                            {isMonthly ? "$99.99" : "$999.00"}
                                        </div>
                                        <div className="text-gray-400">
                                            {isMonthly ? "/ month" : "/ year"}
                                        </div>
                                    </div>
                                    <p className="mt-8 mb-8 2xl:mb-12 text-gray-400 leading-loose text-left">
                                        1 license key (1 device at a time)
                                    </p>
                                    <ul className="mb-14 text-white">
                                        {pricingData[1].map((text, index) => (
                                            <li
                                                className="mb-4 flex"
                                                key={`${text}-${index}`}
                                            >
                                                <CheckArrowIcon
                                                    fillColor={
                                                        text.includes(
                                                            "(experimental)"
                                                        )
                                                            ? "fill-red-300"
                                                            : ""
                                                    }
                                                />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={
                                            isMonthly
                                                ? "https://store.dathere.com/checkout/buy/41f919fd-2b68-40ea-a5ed-0f531b2efba5"
                                                : "https://store.dathere.com/checkout/buy/88fed582-ffd4-41e0-a94e-457fdd038130"
                                        }
                                        target="_blank"
                                        data-rybbit-event="qsv_pro_purchase"
                                        data-rybbit-prop-plan="Pro"
                                    >
                                        <div className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200">
                                            Start 30-day free trial
                                        </div>
                                        <p className="mt-8 text-center text-white">After your trial ends in 30 days, you will be charged ${isMonthly ? "99.99" : "999.99"}, then ${isMonthly? "99.99" : "999.99"} every {isMonthly ? "month" : "year"}.</p>
                                    </a>
                                </div>
                            </div>
                            <div className="w-[350px] sm:w-[380px] lg:w-1/3 px-4 mb-8 lg:mb-0">
                                <div className="px-8 py-8 bg-customDarkBg3 rounded-3xl">
                                    <h4 className="mb-2 2xl:mb-4 text-2xl font-bold font-heading text-white text-left">
                                        Business / Enterprise
                                    </h4>
                                    <div className="flex justify-start items-end">
                                        <div className="text-4xl sm:text-5xl font-bold text-white text-left mt-4 mr-2">
                                            Contact us
                                        </div>
                                    </div>
                                    <p className="my-4 text-gray-400 leading-loose text-left">
                                        License keys by approved request
                                    </p>
                                    <ul className="mb-14 text-white">
                                        {pricingData[2].map((text, index) => (
                                            <li
                                                className="mb-4 flex"
                                                key={`${text}-${index}`}
                                            >
                                                <CheckArrowIcon
                                                    fillColor={
                                                        text.includes(
                                                            "(experimental)"
                                                        )
                                                            ? "fill-red-300"
                                                            : ""
                                                    }
                                                />
                                                <span>{text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <a href="https://dathere.com/contact" data-rybbit-event="qsv_pro_purchase" data-rybbit-prop-plan="Business">
                                        <div className="inline-block text-center py-2 px-4 w-full custom-button-colored leading-loose transition duration-200">
                                            Contact us
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <p className="text-center text-zinc-200">
                        Want to learn more?{" "}
                        <a
                            className="text-blue-400"
                            href="https://dathere.com/product-demo-request/"
                        >
                            Request a demo
                        </a>
                        .
                    </p>
                </motion.div>
            </div>
        </section>
    );
};
