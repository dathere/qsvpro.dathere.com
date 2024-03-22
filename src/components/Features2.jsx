import { motion } from "framer-motion";

import uploadtockan from "../assets/images/upload-to-ckan.gif";
import { CheckArrowIcon } from "../assets/icons/CheckArrowIcon";

export const Features2 = () => (
    <section className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20 pt-4">
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
                <div className="w-full md:w-3/4 mb-8 md:mb-0 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
                    <img
                        src={uploadtockan}
                        alt="CKAN Upload Demo"
                        className="rounded-xl custom-border-gray"
                    />
                </div>

                <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
                    <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
                        <span className="custom-block-subtitle">
                            Load to CKAN from your device
                        </span>
                        <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                            Upload your data to a <u>CKAN</u> instance
                        </h2>
                        <p className="mb-12 text-customGrayText leading-loose">
                            qsv pro allows you to upload your transformed data
                            to a{" "}
                            <a
                                href="https://ckan.org"
                                target="_blank"
                                className="text-blue-300"
                            >
                                CKAN
                            </a>{" "}
                            instance within an organization and dataset as a
                            resource.
                        </p>
                        <ul className="mb-6 text-white">
                            <li className="mb-4 flex">
                                <CheckArrowIcon />
                                <span>Integrated with the CKAN API</span>
                            </li>
                            <li className="mb-4 flex">
                                <CheckArrowIcon />
                                Search through organizations, datasets, and
                                resources
                            </li>
                            <li className="mb-4 flex">
                                <CheckArrowIcon />
                                <span>
                                    Create a new resource or overwrite existing
                                    resources
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
);
