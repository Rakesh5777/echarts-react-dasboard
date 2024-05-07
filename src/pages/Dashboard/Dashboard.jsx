import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { MonthWiseCost } from "./graphs/month-wise-cost";
import { MonthlyAccount } from "./graphs/monthly-account";
import { YearlySections } from "./graphs/yearly-sections";
import { MutatingDots } from 'react-loader-spinner';

const get_account_cost_by_month = "https://592lxex6q7.execute-api.us-west-2.amazonaws.com/get_account_cost_by_month_data_api_prod/get_account_cost_by_month_data_api";
const get_budget_status = "https://hpr436o6bb.execute-api.us-west-2.amazonaws.com/get_budget_status_api_prod/get_budget_status_api";
const get_developer_cost_by_month = "https://d7fp3s9ovc.execute-api.us-west-2.amazonaws.com/get_developer_cost_by_month_data_api_prod/get_developer_cost_by_month_data_api";
export const Dashboard = () => {
    const [loading, setLoading] = useState(true);
    const [mouthWiseCostData, setMouthWiseCostData] = useState();
    const [yearlyBudget, setYearlyBudget] = useState();
    const [monthlyDeveloperAccountData, setMonthlyDeveloperAccountData] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const [response1, response2, response3] = await Promise.all([
                    axios.get(get_account_cost_by_month),
                    axios.get(get_budget_status),
                    axios.get(get_developer_cost_by_month)
                ]);
                setMouthWiseCostData(response1.data);
                setYearlyBudget(response2.data);
                setMonthlyDeveloperAccountData(response3.data);

            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <Loader />;

    return (
        <div className="p-4 h-screen overflow-auto">
            <div className="flex h-1/2 gap-2 flex-shrink-0">
                <div className="w-3/4">
                    <MonthWiseCost mouthWiseCostData={mouthWiseCostData} totalBudget={yearlyBudget.used + yearlyBudget.available} />
                </div>
                <div className="w-1/4">
                    <YearlySections yearlyBudget={yearlyBudget} />
                </div>
            </div>
            <div className="flex h-3/4 gap-2 py-2">
                <div className="h-full w-full">
                    <MonthlyAccount monthlyDeveloperAccountData={monthlyDeveloperAccountData} />
                </div>
            </div>
        </div>
    );
}

const Loader = () => {
    const [fetchingData, setFetchingData] = useState('Fetching data ');

    useEffect(() => {
        let count = 0;
        const interval = setInterval(() => {
            setFetchingData((prev) => {
                if (count === 3) {
                    count = 0;
                    return 'Fetching data ';
                }
                count++;
                return prev + '.';
            });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-full bg-gray-300">
            <MutatingDots
                visible={true}
                height="100"
                width="100"
                color="#3f3f3f"
                secondaryColor="#6d6d6d"
                radius="16"
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
            <div className="w-48 font-mono font-medium text-gray-500 text-lg relative left-5">{fetchingData}</div>
        </div>
    );
}