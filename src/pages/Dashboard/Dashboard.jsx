import React from "react";
import "./Dashboard.css";
import { MonthWiseCost } from "./graphs/month-wise-cost";
import { MonthlyAccount } from "./graphs/monthly-account";
import { YearlySections } from "./graphs/yearly-sections";

export const Dashboard = () => {

    return (
        <div className="p-4 h-full flex flex-col gap-2">
            <div className="flex h-1/2 gap-2">
                <div className="w-3/4">
                    <MonthWiseCost />
                </div>
                <div className="w-1/4">
                    <YearlySections />
                </div>
            </div>
            <div className="flex h-1/2 gap-2">
                <div className="w-full">
                    <MonthlyAccount />
                </div>
            </div>
        </div>
    );
}