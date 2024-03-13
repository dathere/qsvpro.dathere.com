import { motion } from "framer-motion";

import qsvProLogo from "../assets/logos/qsv-pro-logo.png";

const navbarLinks = [
    { label: "Home", href: "#home", ariaLabel: "Home" },
    { label: "Features", href: "#features", ariaLabel: "Features" },
    // { label: "Feedback", href: "#feedback", ariaLabel: "Feedback" },
    { label: "Pricing", href: "#pricing", ariaLabel: "Pricing" },
    { label: "FAQ", href: "#FAQ", ariaLabel: "FAQ" },
    {
        label: "Support",
        href: "https://support.dathere.com",
        ariaLabel: "Support",
    },
];

export const Navbar = () => {
    return (
        <nav className="w-full h-20 flex flex-col justify-center items-center fixed bg-customDarkBg1 lg:bg-customDarkBgTransparent z-40 lg:backdrop-blur-xl">
            <div className="2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                >
                    <a className="navbar-link" href="#home" aria-label="Home">
                        <div className="flex justify-start items-center grow basis-0">
                            {/* <div className="text-white mr-2 text-6xl">
                                <img
                                    src={datHereLogo}
                                    alt="datHere logo"
                                    className="w-6 h-6"
                                />
                            </div> */}
                            {/* <div className="text-white font-['Inter'] font-bold text-xl">
                                qsv pro
                            </div> */}
                            <img
                                src={qsvProLogo}
                                alt="qsv pro logo"
                                className="h-6"
                            />
                            <small className="text-white ml-1 font-['Inter'] text-xs mb-1 rounded-full px-1 border">
                                preview
                            </small>
                        </div>
                    </a>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    exit={{ opacity: 0 }}
                >
                    <div className="hidden lg:flex h-full -ml-20 pb-2">
                        {navbarLinks.map(({ href, label, ariaLabel }) => (
                            <a
                                className="navbar-link"
                                href={href}
                                aria-label={ariaLabel}
                                key={label}
                            >
                                {label}
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </nav>
    );
};
