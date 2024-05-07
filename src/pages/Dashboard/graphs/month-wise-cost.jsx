import React, { useEffect, useMemo, useState } from "react";
import ReactECharts from "echarts-for-react";
import axiosInstance from "./../../../axiosInstance"

export const MonthWiseCost = ({ mouthWiseCostData, totalBudget }) => {
    const [monthWiseCostGraphData, setMonthWiseCostGraphData] = useState();
    const [seriesData, setSeriesData] = useState();
    const [monthlyMaxLimit, setMonthlyMaxLimit] = useState();

    useEffect(() => {
        initialiseGraphData(mouthWiseCostData)
    }, [])

    const initialiseGraphData = (data) => {
        setMonthWiseCostGraphData(data);
        setSeriesData(data.keys.map((key, index) => {
            return {
                type: "bar",
                name: key,
                data: data[key.charAt(0).toLowerCase() + key.substring(1)],
                color: index === 0 ? "#3ea8ff" : "#4aaeff7e",
                stack: "A",
                markLine: {
                    data: [{ type: 'average', name: 'Avg' }]
                },
            }
        }));
        setMonthlyMaxLimit({
            type: "line",
            data: [
                [-1, data.monthlyMaxLimit],
                [12, data.monthlyMaxLimit]
            ],
            lineStyle: {
                color: 'red',
                opacity: 0.5,
            },
            markLine: {
                symbol: 'none',
                lineStyle: {
                    color: 'red',
                    opacity: 0.5,
                },
                data: [
                    {
                        yAxis: data.monthlyMaxLimit,
                        label: {
                            formatter: 'Monthly Limit'
                        }
                    }
                ]
            },
            z: 2
        });
    }

    return <div id="year-graph" className="h-full w-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {monthWiseCostGraphData && seriesData && <ReactECharts
            style={{ width: "100%", height: "100%" }}
            option={{
                title: {
                    text: totalBudget ? 'Total budget $' + totalBudget : 'Monthly Cost',
                },
                tooltip: {
                    trigger: "axis",
                    axisPointer: {
                        type: "shadow",
                    },
                },
                legend: {
                    x: 'right',
                },
                grid: {
                    top: "20%",
                    left: "5%",
                    right: "8%",
                    bottom: "5%",
                    containLabel: true,
                },
                xAxis: [
                    {
                        type: "category",
                        data: monthWiseCostGraphData.xAxisData,
                    },
                ],
                yAxis: [
                    {
                        type: "value",
                    },
                ],
                series: [
                    ...seriesData,
                    monthlyMaxLimit
                ]
            }

            }
        />}
    </div>
}