import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import axiosInstance from "./../../../axiosInstance"

export const YearlySections = () => {
    const [yearlyGraphData, setYearlyGraphData] = useState();

    useEffect(() => {
        const getYearlySections = async () => {
            try {
                const response = await axiosInstance.get("/yearlyBudget")
                if (response.status === 200) {
                    setYearlyGraphData(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        getYearlySections();
    }, [])

    return <div id="year-graph" className="h-full w-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {yearlyGraphData && <ReactECharts
            style={{ width: "100%", height: "100%" }}
            option={{
                title: {
                    text: `Yearly Budget ($${yearlyGraphData.used + yearlyGraphData.available})`,
                    subtext: `Used: $${yearlyGraphData.used}  Available: $${yearlyGraphData.available}`
                },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    show: true,
                    bottom: 0
                },
                series: [
                    {
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '50%'],
                        data: [
                            ...yearlyGraphData.accountData.map((account, index) => ({
                                ...account,
                                itemStyle: {
                                    color: `rgba(62, 168, 255, ${Math.max(((index / yearlyGraphData.accountData.length) + 0.4), 0.4)})`
                                }
                            })),
                            {
                                value: yearlyGraphData.available,
                                name: 'Available',
                                itemStyle: {
                                    color: '#91cc75c3'
                                }
                            }],
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        animationDelay: function (idx) {
                            return Math.random() * 200;
                        }
                    }
                ]
            }}
        />}
    </div>
}