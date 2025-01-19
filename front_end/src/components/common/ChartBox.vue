<template>
	<div class="chart-box">
		<canvas id="myChart" width="300" height="300"></canvas>
	</div>
	<div class="data-count">
		<p class="all-data">总人数：<span>{{ number }}</span></p>
		<table-box size="small" max-height="200px" :table-list="countList" :table-key="tableKey"></table-box>
	</div>
</template>

<script>
import Chart from 'chart.js/auto'

export default {
  name: "ChartBox",
  data () {
    return {
      chart: {},
      tableKey: [
        { title: '成绩', value: 'score' },
        { title: '人数', value: 'count' }
      ],
      number: 0
    }
  },
  props: {
    countList: {
      type: Array,
      default: () => []
    }
  },
  mounted () {
    setTimeout(() => {
      this.initChart()
    }, 400)
  },
  methods: {
    // 初始化图表
    initChart () {
      let datas = []
      this.countList.forEach(item => {
        datas.push(item.count)
        this.number += item.count
      })
      console.log(datas)
      this.chart = new Chart(document.getElementById('myChart'), {
        type: 'pie',  // 类型：饼图
        data: {
          // 饼图数据标题
          labels: ['60以下', '60-69', '70-79', '80-89', '90-100'],
          datasets: [{
            data: datas,  // 数据
            backgroundColor: [  // 饼图颜色
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(153, 102, 255)'
            ]
          }],
          borderColor: ['#fff'],  // 边框颜色
          borderWidth: 3  // 边框宽度
        },
        options: {
          plugins: {
            legend: {
              position: 'right',  // 图例位置
              labels: {
                // 颜色块宽度
                boxWidth: 20
              }
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.chart-box {
    width: 300px;
    height: 300px;
    margin: 0 auto;
}

/*图表*/
.data-count {
    margin: 0 auto;
    padding: 0 80px;
}

/*数据统计*/
.all-data {
    padding-left: 6px;
    font-size: 13px;
    color: #909399;
    font-weight: bold;
}

.all-data span {
    font-weight: normal;
    color: #606266;
}
</style>
