import { motion } from "framer-motion";

import recipedemo from "../assets/images/recipe-demo.gif";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features1 = () => {
    return (
        <section className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-4 pt-16">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                            <span className="custom-block-subtitle">
                                Transform Your Data
                            </span>
                            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                                Transform your data with <u>recipes</u>
                            </h2>
                            <p className="mb-10 text-customGrayText leading-loose">
                                qsv pro features a suite of recipes (scripts)
                                for common data wrangling tasks to perform on
                                your spreadsheet, including:
                            </p>
                            <ul className="mb-6 text-white">
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>Sort in lexicographical order</span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>Remove duplicate rows</span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        Remove rows with Personally Identifiable
                                        Information (PII)
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 mb-8 md:mb-0 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center">
                        <img
                            src={recipedemo}
                            alt="Recipe Demo"
                            className="rounded-xl custom-border-gray"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
