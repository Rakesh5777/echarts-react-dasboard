import React, { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import axiosInstance from "./../../../axiosInstance"

export const MonthlyAccount = () => {
    const [monthlyGraphData, setMonthlyGraphData] = useState();
    const [seriesData, setSeriesData] = useState();
    const [optionsData, setOptionsData] = useState();

    useEffect(() => {
        const getMonthlyAccount = async () => {
            try {
                const response = await axiosInstance.get("/monthlyAccountWiseCost")
                if (response.status === 200) {
                    initialiseGraphData(response.data)
                }
            } catch (error) {
                console.error(error)
            }
        }
        getMonthlyAccount();
    }, [])

    const initialiseGraphData = (data) => {
        setMonthlyGraphData(data);
        setSeriesData(data.developersList.map((developer) => {
            return {
                type: "bar",
                name: developer,
                stack: "A",
            }
        }));
        setOptionsData(Object.keys(data.developersMonthWiseData).map((monthData) => {
            return {
                title: { text: monthData.charAt(0).toUpperCase() + monthData.slice(1) },
                series: data.developersMonthWiseData[monthData]
            }
        }));
    }

    return <div id="year-graph" className="h-full w-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {monthlyGraphData && seriesData && optionsData && <ReactECharts
            style={{ width: "100%", height: "100%" }}
            option={{
                baseOption: {
                    timeline: {
                        axisType: 'category',
                        autoPlay: true,
                        playInterval: 3000,
                        data: Object.keys(monthlyGraphData.developersMonthWiseData).map(monthData => monthData.charAt(0).toUpperCase() + monthData.slice(1, 3)),
                    },
                    title: {
                        subtext: 'Spending by developer',
                    },
                    tooltip: {},
                    calculable: true,
                    grid: {
                        top: 80,
                        bottom: 100,
                        tooltip: {
                            trigger: 'axis',
                            axisPointer: {
                                type: 'shadow'
                            }
                        }
                    },
                    legend: {
                        right: 0,
                        show: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            axisLabel: { interval: 0 },
                            data: monthlyGraphData.xAxisData,
                            splitLine: { show: false }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                        }
                    ],
                    series: seriesData
                },
                options: optionsData
            }
            }
        />}
    </div>
}