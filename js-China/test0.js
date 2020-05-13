var mytest = echarts.init(document.getElementById('test0'),'dark') 
// 指定图表的配置项和数据
var data1 = [200, 30, 20, 30, 20, 30, 20, 30, 20, 30];
var data2 = [90, 30, 9, 60, 70, 20, 59, 20, 49, 20];
var datacity = ['济南市', '青岛市', '淄博市', '枣庄', '东营', '烟台市', '潍坊市', '济宁市', '威海市', '泰安市'];
var option = {
    color: ['RGB(233,108,40)', '#111'],
    tooltip: {
        trigger: 'axis',
    },
    legend: {

        top: '8%',
        data: ['境外输入', '本土新增'],
    },
    grid: { //图表的位置
        top: '20%',
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    yAxis: [{
        type: 'value',
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} '
        },
        splitLine: {
            show: true,
            lineStyle: {
                type: 'dashed'
            }
        },
        show: true

    }],
    xAxis: [{
        type: 'category',
        axisLabel: {
            interval: 0,
            show: true,
            splitNumber: 15,
            textStyle: {
                fontSize: 10,
                color: 'white'
            },

        },
        data: datacity,
    }],
    series: [{
            name: '境外输入',
            type: 'bar',
            stack: 'sum',
            barWidth: '20px',
            data: data1

        },
        {
            name: '本土新增',
            type: 'bar',
            barWidth: '20px',
            stack: 'sum',
            data: data2,

        },
    ]
};
mytest.setOption(option)
