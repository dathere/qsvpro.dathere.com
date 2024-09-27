import { motion } from "framer-motion";

import recipedemo from "../assets/images/sql-query-demo.gif";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features3 = () => {
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
                                Polars SQL queries
                            </span>
                            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                                Run Polars <u>SQL queries</u> on your data
                            </h2>
                            <p className="mb-10 text-customGrayText leading-loose">
                                Using qsv's built-in sqlp command, qsv pro
                                leverages{" "}
                                <a
                                    href="https://pola.rs"
                                    target="_blank"
                                    className="text-blue-300"
                                >
                                    Polars
                                </a>{" "}
                                so you may run SQL queries to learn more
                                insights from your spreadsheet data.
                            </p>
                            <ul className="mb-6 text-white">
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        Run Polars SQL queries your spreadsheet
                                        data
                                    </span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        View query output in a data table
                                    </span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        Get the estimated elapsed time for your
                                        queries
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full md:w-3/4 mb-8 md:mb-0 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center">
                        <img
                            decoding="async"  
                            loading="lazy"
                            src={recipedemo.src}
                            alt="Recipe Demo"
                            className="rounded-xl custom-border-gray"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
