var mytest = echarts.init(document.getElementById('test2'),'dark') 
option = {
    backgroundColor: '#2c343c',
   

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 50,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 1000, name: '直接访问'},
                {value: 3100, name: '邮件营销'},
                {value: 2740, name: '联盟广告'},
                {value: 2350, name: '视频广告'},
                {value: 4000, name: '搜索引擎'},
                {value: 3350, name: '直接访问'},
                {value: 3100, name: '邮件营销'},
                {value: 2740, name: '联盟广告'},
                {value: 2350, name: '视频广告'},
                {value: 4000, name: '搜索引擎'},
                {value: 3350, name: '直接访问'},
                {value: 3100, name: '邮件营销'},
                {value: 2740, name: '联盟广告'},
                {value: 2350, name: '视频广告'},
                {value: 4000, name: '搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
mytest.setOption(option)