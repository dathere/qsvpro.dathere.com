import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import dashboard from "../assets/images/dashboard.png";
import qsvProLogo from "../assets/logos/qsv-pro-logo.png";
import Download from "../assets/icons/Download.jsx";

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
                            "Linux (AppImage)",
                            `qsv-pro_${version}_amd64.AppImage`,
                        ],
                        // `qsv-pro_${version}_amd64.deb`,
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
            className="w-screen  flex justify-center items-center bg-customDarkBg1 mb-[28vw] md:mb-[18vw] lg:mb-[10vw] xl:mb-[13vw] 2xl:mb-60 hero-bg-gradient pb-24 sm:pb-32 md:pb-44 lg:pb-0"
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
                    <div className="grid grid-cols-1 sm:flex sm:ml-20 place-items-center justify-center items-center">
                        {/* <span>qsv pro</span> */}
                        <img
                            src={qsvProLogo.src}
                            alt="qsv pro logo"
                            className="w-72 sm:w-96 lg:w-120"
                        />
                        <p className="text-white font-['Inter'] text-xl mt-2 h-fit w-fit">
                            (preview)
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="text-customGrayText text-sm lg:text-base xl:text-lg sm:text-base mt-10 px-12 sm:px-48 ">
                        Transform and upload spreadsheet data to{" "}
                        <a
                            href="https://ckan.org"
                            target="_blank"
                            className="text-blue-300"
                        >
                            CKAN
                        </a>{" "}
                        with our streamlined desktop app, featuring "recipes"
                        for common data wrangling tasks. Based on the{" "}
                        <a
                            href="https://github.com/jqnatividad/qsv"
                            target="_blank"
                            className="text-blue-300"
                        >
                            qsv
                        </a>{" "}
                        CLI tool.
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
                                    Start your 7-day free trial,{" "}
                                    <u>no payment required</u>.
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
                                                        <a
                                                            key={index}
                                                            href={`https://github.com/dathere/qsv-pro-releases/releases/download/${name}/${download[1]}`} // Replace with actual download path
                                                            className={`block lg:min-w-96 text-white font-bold py-2 px-4 rounded mt-4 ${
                                                                platform === OS
                                                                    ? " bg-teal-500 hover:bg-teal-700"
                                                                    : " bg-blue-500 hover:bg-blue-700"
                                                            }`}
                                                            download
                                                        >
                                                            {download[0]}
                                                            {platform ===
                                                                "windows" && (
                                                                <>
                                                                    <br />
                                                                    <small className="text-xs text-zinc-300 mt-4">
                                                                        You may
                                                                        get an
                                                                        antivirus
                                                                        notification
                                                                        that you
                                                                        have to
                                                                        skip.
                                                                    </small>
                                                                </>
                                                            )}
                                                        </a>
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
                                >
                                    <div className="custom-button-colored w-64 h-12 mb-2 sm:mb-0">
                                        <Download />
                                        <span className="ml-1 text-lg">
                                            Download qsv pro
                                        </span>
                                    </div>
                                </a>
                                <p className="text-white text-sm sm:text-base text-center mx-auto">
                                    Start your 7-day free trial,{" "}
                                    <u>no payment required</u>.
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
                >
                    <div className="relative w-screen flex justify-center ">
                        <img
                            src={dashboard.src}
                            alt="123"
                            className="w-4/5 2xl:w-[1200px] mx-auto absolute z-10 rounded-xl custom-border-gray hero-dashboard-border-gradient lg:top-6 xl:top-0"
                        />
                    </div>
                </motion.div>
                <div className="relative w-screen flex justify-center ">
                    <div className="custom-shape-divider-bottom-1665343298 mt-4 sm:mt-16 md:mt-52 hidden lg:block">
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
