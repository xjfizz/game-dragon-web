import * as echarts from "echarts";
export default function barChartOptions() {
    return {

        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                },
            }
        },
        legend: {
            data: ['lbp'],
            x: 'left'
        },
        color: ["#0080ff", "#4cd5ce"],

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['1', '2', '3', '4', '5', '6', '7']
            }
        ],
        yAxis: [
            {
                type: 'value',
                splitLine: {
                    show: false //去掉折线图中的横线
                }
            }
        ],
        series: [

            {
                name: 'lbp',
                type: 'line',
                stack: '总量',
                itemStyle: {
                    normal: {   //颜色渐变函数 前四个参数分别表示四个位置依次为左、下、右、上
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0, color: 'rgba(255, 199, 90, 0.5)' // 0% 处的颜色
                        }, {
                            offset: 0.2, color: 'rgba(255, 199, 90, 0.4)' // 100% 处的颜色
                        }, {
                            offset: 0.4, color: 'rgba(255, 199, 90, 0.3)' // 100% 处的颜色
                        }, {
                            offset: 0.6, color: 'rgba(255, 199, 90, 0.2)' // 100% 处的颜色
                        }, {
                            offset: 0.8, color: 'rgba(255, 199, 90, 0.1)' // 100% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255, 199, 90, 0)' // 100% 处的颜色
                        }]
                        ),  //背景渐变色 
                        lineStyle: {        // 系列级个性化折线样式  
                            width: 2,
                            type: 'solid',
                            color: "rgba(255, 199, 90, 0.9)"
                        }
                    },
             
                },//线条样式  
                symbolSize: 0, //折线点的大小
                areaStyle: { normal: {} },
                data: [320, 332, 601, 134, 120, 230, 210]
            }

        ]


    };
}