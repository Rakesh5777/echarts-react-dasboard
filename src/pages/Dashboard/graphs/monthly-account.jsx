import ReactECharts from "echarts-for-react";
import React, { useEffect, useState } from "react";


export const MonthlyAccount = ({ monthlyDeveloperAccountData }) => {
    const [monthlyGraphData, setMonthlyGraphData] = useState();
    const [seriesData, setSeriesData] = useState();
    const [optionsData, setOptionsData] = useState();

    useEffect(() => {
        initialiseGraphData(monthlyDeveloperAccountData);
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
                title: { text: monthData },
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
                        playInterval: 5000,
                        data: Object.keys(monthlyGraphData.developersMonthWiseData).map(monthData => monthData),
                    },
                    title: {
                        subtext: 'Spending by developer',
                    },
                    tooltip: {
                        // Trigger on mouse hover
                        trigger: 'axis',
                        // Customizing tooltip content
                        formatter: function (params) {
                            var tooltip = params[0].name + '<br/>';
                            params.forEach(function (item) {
                                // Check if value is not zero
                                if (item.value !== 0) {
                                    tooltip += '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>' +
                                        item.seriesName + ': ' + item.value + '<br/>';
                                }
                            });
                            return tooltip;
                        }
                    },
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
                        show: false
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