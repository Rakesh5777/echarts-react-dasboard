import React from "react";
import ReactECharts from "echarts-for-react";

export const YearlySections = ({ yearlyBudget }) => {

    return <div id="year-graph" className="h-full w-full block p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {yearlyBudget && <ReactECharts
            style={{ width: "100%", height: "100%" }}
            option={{
                title: {
                    text: `Used: $${yearlyBudget.used}  Available: $${yearlyBudget.available}`
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
                            ...yearlyBudget.accountData.map((account, index) => ({
                                ...account,
                                itemStyle: {
                                    color: `rgba(62, 168, 255, ${Math.max(((index / yearlyBudget.accountData.length) + 0.4), 0.4)})`
                                }
                            })),
                            {
                                value: yearlyBudget.available,
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