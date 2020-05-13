var mytest = echarts.init(document.getElementById("test3"), 'dark');
mytest.showLoading();
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            label: {
                show: true,
                color:'#111'
            }
        }
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    calculable: true,
    legend: {
        data: ['现有确诊人数', '累计确诊人数'],
        itemGap: 5
    },
    grid: {
        top: '10%',
        left: '3%',
        right: '10%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['dfs', 'fdsd', 'sdfs', 'sdfsd', 'rtthe']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '人数/名',
        }
    ],
    dataZoom: [
        {
            show: true,
            start: 0,
            end: 50
        },
        {
            type: 'inside',
            start: 0,
            end: 100
        },
        {
            show: true,
            yAxisIndex: 0,
            filterMode: 'empty',
            width: 30,
            height: '80%',
            showDataShadow: false,
            left: '93%'
        }
    ],
    series: [
        {
            name: '现有确诊人数',
            color:'#F4A460',
            type: 'bar',
            data: ['1000', '2', '3', '4', '5']
        },
        {
            name: '累计确诊人数',
            color:'#DD6B66',
            type: 'bar',
            data: ['1', '2', '3', '4', '5']
        }
    ],
    toolbox: {
        show: true,
        feature: {
            myFull: {
                show: true,
                title: '全屏/退出全屏',
                icon: 'image://images//allfull_icon.png',
                onclick: () => {
                    const element = document.getElementById('test3');
                    // IE 10及以下ActiveXObject
                    if (element.requestFullScreen) { // HTML W3C 提议
                        element.requestFullScreen();
                    } else if (element.msRequestFullscreen) { // IE11
                        element.msRequestFullScreen();
                    } else if (element.webkitRequestFullScreen) { // Webkit (works in Safari5.1 and Chrome 15)
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) { // Firefox (works in nightly)
                        element.mozRequestFullScreen();
                    }
                    if (element.requestFullscreen) {
                        document.exitFullscreen();
                    } else if (element.msRequestFullScreen) {
                        document.msExitFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        document.webkitCancelFullScreen
                    } else if (element.mozRequestFullScreen) {
                        document.mozRequestFullScreen();
                    }
                },
            },
        },
    },
};
mytest.hideLoading();
mytest.setOption(option);
mycharts.push(mytest);//把表加入列表
window.onresize = function () {//窗口监听事件
    for (var i = 0; i < mycharts.length; i++) {
        mycharts[i].resize();
        console.log("执行了1次")
    }
};
var resizeTimer = null;//窗口监听事件优化
$(window).bind('resize', function () {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
    }, 100);
});
