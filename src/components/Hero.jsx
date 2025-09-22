import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import dashboard from "../assets/images/dashboard.png";
import qsvProLogo from "../assets/logos/qsv-pro-logo.png";
import Download from "../assets/icons/Download.jsx";
import FeatureCarousel from "./FeatureCarousel.jsx";

export const Hero = () => {
    const [downloadData, setDownloadData] = useState();
    const [OS, setOS] = useState();
    const [name, setName] = useState();
    useEffect(() => {
        (async () => {
            const userAgent = window.navigator.userAgent;
            // Ignore mobile view for now
            if (
                userAgent.includes("iPhone") ||
                userAgent.includes("Android") ||
                userAgent.includes("iPad") ||
                window.innerWidth < 768
            ) {
                setOS("unknown");
                return;
            }
            try {
                const data = await (
                    await fetch(
                        "https://api.github.com/repos/dathere/qsv-pro-releases/releases"
                    )
                ).json();
                const name = data[0].name;
                setName(name);
                const version = name.slice(1);
                const downloadData = {
                    windows: [
                        ["Windows", `qsv.pro_${version}_x64_en-US.msi`],
                        // `qsv.pro_${version}_x64-setup.exe`,
                    ],
                    macos: [
                        ["macOS (Apple Silicon)", `qsv.pro_aarch64.app.tar.gz`],
                        ["macOS (Intel)", `qsv.pro_x64.app.tar.gz`],
                        // `qsv.pro_${version}_x64.dmg`,
                        // `qsv.pro_${version}_aarch64.dmg`,
                    ],
                    linux: [
                        [
                            "Linux (x86_64, deb)",
                            `qsv.pro_${version}_amd64.deb`,
                        ],
                        [
                            "Linux (x86_64, rpm)",
                            `qsv.pro-${version}-1.x86_64.rpm`,
                        ],
                        [
                            "Linux (x86_64, AppImage)",
                            `qsv.pro_${version}_amd64.AppImage`,
                        ],
                    ],
                };
                setDownloadData(downloadData);

                if (userAgent.includes("Windows")) {
                    setOS("windows");
                } else if (userAgent.includes("Macintosh")) {
                    setOS("macos");
                } else if (userAgent.includes("Linux")) {
                    setOS("linux");
                }
            } catch (e) {
                console.error(
                    "Unable to fetch API data from releases repository: " +
                        String(e)
                );
                console.log("Showing default download button to user.");
            }
        })();
    }, []);

    return (
        <section
            className="w-screen flex justify-center items-center bg-customDarkBg1 mb-40 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
            id="home"
        >
            <div className="w-full md:w-[1100px] flex flex-col justify-center items-center pt-16 md:pt-16 lg:pt-20 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="text-customSecondary text-sm sm:text-base mb-6 sm:mt-32 mt-16 font-bold">
                        Spreadsheet Data Wrangling Desktop App
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 }}
                >
                    <div className="grid grid-cols-1 sm:flex sm:ml-10 place-items-center justify-center items-center">
                        {/* <span>qsv pro</span> */}
                        <img
                            src={qsvProLogo.src}
                            alt="qsv pro logo"
                            className="w-72 sm:w-96 lg:w-120"
                        />
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
                        Transform spreadsheet data and view statistics in
                        interactive data tables, download/upload from/to
                        compatible{" "}
                        <a
                            href="https://ckan.org"
                            target="_blank"
                            className="text-blue-300"
                        >
                            CKAN
                        </a>{" "}
                        instances, and explore qsv pro.
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                >
                    <div className="grid grid-cols-1 place-items-center gap-2 sm:flex-row mt-14 mb-24 sm:mb-40 justify-center">
                        {downloadData && OS !== "unknown" ? (
                            <>
                                <p className="text-white text-md text-center mx-auto mb-4">
                                    Download qsv pro and explore the free plan
                                    or <a href="/#pricing" className="text-blue-300">unlock features</a> with a paid plan (30-day free trial).
                                </p>
                                <div className="flex justify-center">
                                    {Object.keys(downloadData).map(
                                        (platform) => (
                                            <div
                                                key={platform}
                                                className={`mx-4 ${
                                                    platform === OS
                                                        ? "text-white text-xl font-bold"
                                                        : "text-white"
                                                }`}
                                            >
                                                {downloadData[platform].map(
                                                    (download, index) => (
                                                        <>
                                                            {platform ===
                                                                "windows" && (
                                                                <div className="flex justify-center">
                                                                    {/* Might not be an actual download, but store page clicked */}
                                                                    <a data-rybbit-event="qsv_pro_download" data-rybbit-prop-platform="Microsoft Store" href="https://apps.microsoft.com/detail/xpffdj3f1jsztf?mode=full">
                                                                        <img
                                                                            src="https://get.microsoft.com/images/en-us%20light.svg"
                                                                            width="200"
                                                                        />
                                                                    </a>
                                                                </div>
                                                            )}
                                                            <a
                                                                key={index}
                                                                href={`https://github.com/dathere/qsv-pro-releases/releases/download/${name}/${download[1]}`} // Replace with actual download path
                                                                data-rybbit-event="qsv_pro_download"
                                                                data-rybbit-prop-platform={download[0]}
                                                                className={`block lg:min-w-96 text-white font-bold py-2 px-4 rounded mt-4 ${
                                                                    platform ===
                                                                    OS
                                                                        ? " bg-teal-600 hover:bg-teal-700"
                                                                        : " bg-blue-500 hover:bg-blue-700"
                                                                }`}
                                                                download
                                                            >
                                                                {download[0]}
                                                                {platform === "windows" && <>
                                                                    <br />
                                                                    <small className="text-xs">Smartscreen warning? Click <u>More info</u> then <u>Run anyway</u></small>
                                                                </>}
                                                            </a>
                                                        </>
                                                    )
                                                )}
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        ) : (
                            <>
                                <a
                                    href="https://github.com/dathere/qsv-pro-releases/releases/latest"
                                    target="_blank"
                                    className="hidden md:block"
                                >
                                    <div className="custom-button-colored w-64 h-12 mb-2 sm:mb-0">
                                        <Download />
                                        <span className="ml-1 text-lg">
                                            Download qsv pro
                                        </span>
                                    </div>
                                </a>
                                <p className="md:hidden text-white sm:text-base text-sm text-center mx-auto">
                                    You may access download links here on a
                                    desktop device.
                                </p>
                                <p className="text-white text-sm sm:text-base text-center mx-auto">
                                    Download qsv pro and explore the free plan
                                    or unlock features with a paid plan.
                                </p>
                            </>
                        )}
                        {/* <div
                            className="w-64 sm:w-52 h-12 rounded-xl font-bold text-white border border-solid  flex justify-center items-center cursor-pointer bg-customDarkBg2 hover:bg-customDarkBg3 border-customPrimary transition"
                        >
                            Live demo
                        </div> */}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10, zIndex: 20 }}
                    animate={{ opacity: 1, y: 0, zIndex: 20 }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    id="features"
                    className="w-full"
                >
                    <div className="relative w-full flex justify-center">
                        <FeatureCarousel />
                        {/*<img
                            src={dashboard.src}
                            alt="123"
                            className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
                        />*/}
                    </div>
                </motion.div>
                <div className="relative w-screen flex justify-center ">
                    <div className="custom-shape-divider-bottom-1665343298 hidden lg:block">
                        <svg
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1200 120"
                            preserveAspectRatio="none"
                            className=" bg-customDarkBg2"
                        >
                            <path
                                d="M1200 0L0 0 598.97 114.72 1200 0z"
                                className="shape-fill custom-bg-dark1"
                            ></path>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};
