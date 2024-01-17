import React, { useState } from "react";
import {
    ArrowLeftRightIcon,
    BarChart3Icon,
    Clock4Icon,
    LayoutDashboard,
    HelpCircleIcon,
} from "lucide-react";
import { motion } from "framer-motion";

import RightArrowIcon from "../../../assets/rightArrow.svg";

const variants = {
    expanded: { width: "20%" },
    nonexpanded: { width: "6%" },
};

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(true);

    return (
        <motion.div
            animate={isExpanded ? "expanded" : "nonexpanded"}
            variants={variants}
            className={
                "py-10 h-screen flex flex-col border border-r-1 bg-[#FDFDFD] relative" +
                (isExpanded ? " px-10" : " px-6")
            }
        >
            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
            >
                <img src={RightArrowIcon} className="w-2" />
            </div>

            <div
                onClick={() => setIsExpanded(!isExpanded)}
                className="cursor-pointer absolute -right-3 top-10 rounded-full w-6 h-6 bg-[#FF8C8C] flex justify-center items-center"
            >
                <img src={RightArrowIcon} className="w-2" />
            </div>
            <div className="logo-div flex space-x-4 items-center">
                <h3>Logo</h3>
                <span className={!isExpanded ? "hidden" : "block"}>Money Tracker</span>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
                <div className="nav-links w-full">
                    <div className="flex space-x-3 w-full p-2 rounded bg-[#FF8C8C] text-white">
                        <LayoutDashboard />
                        <span className={!isExpanded ? "hidden" : "block"}>Dashboard</span>
                    </div>
                </div>

                <div className="nav-links w-full">
                    <div className="flex space-x-3 w-full p-2 rounded">
                        <Clock4Icon />
                        <span className={!isExpanded ? "hidden" : "block"}>Acticity</span>
                    </div>
                </div>

                <div className="nav-links w-full">
                    <div className="flex space-x-3 w-full p-2 rounded ">
                        <BarChart3Icon />
                        <span className={!isExpanded ? "hidden" : "block"}>Analytics</span>
                    </div>
                </div>

                <div className="nav-links w-full">
                    <div className="flex space-x-3 w-full p-2 rounded">
                        <ArrowLeftRightIcon />
                        <span className={!isExpanded ? "hidden" : "block"}>
              Transactions
            </span>
                    </div>
                </div>

                <div className="nav-links w-full">
                    <div className="flex space-x-3 w-full p-2 rounded  ">
                        <HelpCircleIcon />
                        <span className={!isExpanded ? "hidden" : "block"}>
              Help Center
            </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Navbar;