var mytest = echarts.init(document.getElementById("test2"), 'dark');
var charts = { // 按顺序排列从大到小
  cityList: ['38号点（1）', '38号点（2）', '15号点', '16号点', '24号点', '38号点（1）', '38号点（2）', '15号点', '16号点', '24号点'],
  cityData: [7500, 6200, 5700, 4200, 3500, 7500, 6200, 5700, 4200, 3500]
}
var top10CityList = charts.cityList
var top10CityData = charts.cityData
var color = ['rgba(248,195,248', 'rgba(100,255,249', 'rgba(135,183,255', 'rgba(248,195,248', 'rgba(100,255,249']

let lineY_ = []
for (var i = 0; i < charts.cityList.length; i++) {
  var x = i
  if (x > color.length - 1) {
    x = color.length - 1
  }
  var data = {
    name: charts.cityList[i],
    color: color[x] + ')',
    value: top10CityData[i],
    itemStyle: {
      normal: {
        show: true,
        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
          offset: 0,
          color: color[x] + ', 0.3)'
        }, {
          offset: 1,
          color: color[x] + ', 1)'
        }], false),
        barBorderRadius: 10
      },
      emphasis: {
        shadowBlur: 15,
        shadowColor: 'rgba(0, 0, 0, 0.1)'
      }
    }
  }
  lineY_.push(data)
}

console.log(lineY_)
option = {
  backgroundColor: '#333333',
  title: {
    show: false
  },
  tooltip: {
    trigger: 'item'
  },
  grid: {
    borderWidth: 0,
    top: '10%',
    left: '5%',
    right: '15%',
    bottom: '3%'
  },
  color: color,
  yAxis: [{
    type: 'category',
    inverse: true,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      show: false,
      inside: false
    },
    data: top10CityList
  }, {
    type: 'category',
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    axisLabel: {
      show: true,
      inside: false,
      textStyle: {
        color: '#b3ccf8',
        fontSize: '14',
        fontFamily: 'PingFangSC-Regular'
      },
      formatter: function (val) {
        return `${val}k`
      }
    },
    splitArea: {
      show: false
    },
    splitLine: {
      show: false
    },
    data: top10CityData
  }],
  xAxis: {
    type: 'value',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    splitLine: {
      show: false
    },
    axisLabel: {
      show: false
    }
  },
  series: [{
    name: '',
    type: 'bar',
    zlevel: 2,
    barWidth: '10px',
    data: lineY_,
    animationDuration: 1500,
    label: {
      normal: {
        color: '#b3ccf8',
        show: true,
        position: [0, '-24px'],
        textStyle: {
          fontSize: 16
        },
        formatter: function (a, b) {
          return a.name
        }
      }
    }
  }],
  animationEasing: 'cubicOut',
  toolbox: {
    show: true,
    feature: {
      myFull: {
        show: true,
        title: '全屏/退出全屏',
        icon: 'image://images//allfull_icon.png',
        onclick: () => {
          const element = document.getElementById('test2');
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
}
mytest.setOption(option);
mycharts.push(mytest);
