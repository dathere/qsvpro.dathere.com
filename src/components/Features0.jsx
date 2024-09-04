import { motion } from "framer-motion";

import draganddrop from "../assets/images/drag-and-drop.gif";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features0 = () => {
    return (
        <section
            className="w-full bg-customDarkBg2 mt-20 mb-8 sm:mt-16 sm:mb-16 xl:mt-0"
        >
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
                    <div className="w-full lg:w-1/2 mb-8 md:mb-0 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                        <img
                            src={draganddrop.src}
                            alt="Drag and Drop Demo"
                            className="rounded-xl custom-border-gray"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                        <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                            <span className="custom-block-subtitle">
                                Import Your Data
                            </span>
                            <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                                <u>Drag & drop</u> your data into qsv pro
                            </h2>
                            <p className="mb-10 text-customGrayText leading-loose">
                                Drag and drop a spreadsheet file anywhere within
                                the Workflow section to import your data and
                                begin exploring your data in a data table.
                            </p>
                            <ul className="mb-6 text-white">
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        File formats: .csv, .xlsx, .tsv, .tab, .xls, .ods, .xlsm, .xlsb
                                    </span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        Supports large spreadsheets with
                                        millions of rows
                                    </span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        Begins process to scan and analysis file data
                                        after import
                                    </span>
                                </li>
                                <li className="mb-4 flex">
                                    <CheckArrowIcon />
                                    <span>
                                        Generates stats, frequency, and file
                                        metadata
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};
