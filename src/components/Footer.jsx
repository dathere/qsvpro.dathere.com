import datHereLogoFull from "../assets/logos/datHere-logo-light.png";

const footerData = [
    {
        title: "qsv pro",
        items: [
            {
                label: "Download",
                href: "https://github.com/dathere/qsv-pro-releases/releases",
            },
            {
                label: "Purchase a license key",
                href: "https://store.dathere.com/checkout/buy/41f919fd-2b68-40ea-a5ed-0f531b2efba5",
            },
            {
                label: "Create a support ticket",
                href: "https://support.dathere.com",
            },
            {
                label: "Request a demo",
                href: "https://dathere.com/product-demo-request/",
            },
        ],
    },
    {
        title: "Important Links",
        items: [
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
        ],
    },
    {
        title: "Company",
        items: [
            { label: "About Us", href: "https://dathere.com" },
            { label: "Contact Us", href: "https://dathere.com/contact" },
            {
                label: "Terms and Conditions",
                href: "https://dathere.com/terms-and-conditions/",
            },
            {
                label: "Privacy Policy",
                href: "https://dathere.com/privacy-policy/",
            },
        ],
    },
];

export const Footer = () => {
    return (
        <footer>
            <div className="pt-10 lg:pt-20 lg:pb-12 bg-customDarkBg1 radius-for-skewed">
                <div className="container mx-auto px-4 w-4/5 md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-1/3 mb-16 lg:mb-0">
                            <div className="flex justify-center lg:justify-start items-center grow basis-0">
                                <div className="text-white mr-2 text-6xl">
                                    <img
                                        src={datHereLogoFull.src}
                                        alt="datHere Logo"
                                        className="w-48"
                                    />
                                </div>
                            </div>
                            <p className="mb-10 mt-4 sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] text-gray-400 leading-loose text-center lg:text-left mx-auto lg:mx-0">
                                Making data Useful, Usable, and Used.
                            </p>
                        </div>
                        <div className="w-full lg:w-2/3 lg:pl-16 lg:flex flex-wrap justify-between mb-4">
                            <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    qsv pro
                                </h3>
                                <ul>
                                    {footerData[0].items.map((item, i) => (
                                        <li key={i} className="mb-4">
                                            <a
                                                className="text-gray-400 hover:text-gray-300"
                                                href={item.href}
                                                target="_blank"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    Important Links
                                </h3>
                                <ul>
                                    {footerData[1].items.map((item, i) => (
                                        <li key={i} className="mb-4">
                                            <a
                                                className="text-gray-400 hover:text-gray-300"
                                                href="#"
                                                aria-label=""
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div> */}
                            <div className="w-full md:w-1/3 lg:w-auto">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    Company
                                </h3>
                                <ul>
                                    {footerData[2].items.map((item, i) => (
                                        <li key={i} className="mb-4">
                                            <a
                                                className="text-gray-400 hover:text-gray-300"
                                                href={item.href}
                                                target="_blank"
                                            >
                                                {item.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p className="lg:text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] pt-4 hidden lg:block">
                        &copy; datHere Inc. By using qsv pro and/or this site,
                        you agree to our{" "}
                        <a
                            href="https://dathere.com/terms-and-conditions/"
                            className="underline text-gray-400 hover:text-gray-300"
                            target="_blank"
                        >
                            Terms and Conditions
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://dathere.com/privacy-policy/"
                            className="underline text-gray-400 hover:text-gray-300"
                            target="_blank"
                        >
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </footer>
    );
};
