export default {
  filters: {
    remainTwo(val) {
      return val !== undefined ? val.toFixed(2) : ''
    }
  },
  data() {
    return {
      time: '',
      showTime: '2021-11-09',
      showData: {
        yesterdayReceivable: 37110783.93,
        yesterdayPayable: 33339688.21,
        yesterdayProfit: 3771095.72,
        todayReceivable: 26749.5,
        todayPayable: 54603.92,
        todayProfit: -27854.42,
        thisMonthReceivable: 37137533.43,
        thisMonthPayable: 33394292.13,
        thisMonthProfit: 3743241.3,
        thisMonthChangeReceivable: 0.0,
        thisMonthChangePayable: 0.0,
        pastMonthChangeReceivable: 0.0,
        pastMonthChangePayable: 0.0,
        pastYearChangeReceivable: 0.0,
        pastYearChangePayable: 0.0,
        list: [
          {
            costCenterName: '水电一局',
            accountReceivable: 2107.0,
            accountPayable: 2114.0,
            profit: -7.0
          },
          {
            costCenterName: '水电三局',
            accountReceivable: 660.0,
            accountPayable: 660.0,
            profit: 0.0
          },
          {
            costCenterName: '水电四局',
            accountReceivable: 4450.0,
            accountPayable: 4368.0,
            profit: 82.0
          },
          {
            costCenterName: '水电五局',
            accountReceivable: 7550.0,
            accountPayable: 7469.0,
            profit: 81.0
          },
          {
            costCenterName: '水电六局',
            accountReceivable: 8840.0,
            accountPayable: 8680.0,
            profit: 160.0
          },
          {
            costCenterName: '水电七局',
            accountReceivable: 8850.0,
            accountPayable: 8813.0,
            profit: 37.0
          },
          {
            costCenterName: '水电十一局',
            accountReceivable: 1170.0,
            accountPayable: 1155.0,
            profit: 15.0
          },
          {
            costCenterName: '电建建筑',
            accountReceivable: 1090.0,
            accountPayable: 1044.0,
            profit: 46.0
          },
          {
            costCenterName: '水电十四局',
            accountReceivable: 7445.0,
            accountPayable: 7279.0,
            profit: 166.0
          },
          {
            costCenterName: '水电十五局',
            accountReceivable: 210.0,
            accountPayable: 210.0,
            profit: 0.0
          },
          {
            costCenterName: '水电十六局',
            accountReceivable: -1640.0,
            accountPayable: -1585.0,
            profit: -55.0
          },
          {
            costCenterName: '电建市政公司',
            accountReceivable: 3266.0,
            accountPayable: 3228.0,
            profit: 38.0
          },
          {
            costCenterName: '水电基础局',
            accountReceivable: 5810.0,
            accountPayable: 5760.0,
            profit: 50.0
          },
          {
            costCenterName: '山东电建三公司',
            accountReceivable: -55281.0,
            accountPayable: -44443.0,
            profit: -10838.0
          },
          {
            costCenterName: '湖北工程公司',
            accountReceivable: 9980.0,
            accountPayable: 9875.0,
            profit: 105.0
          },
          {
            costCenterName: '电建国际公司',
            accountReceivable: -18969.0,
            accountPayable: -18158.0,
            profit: -811.0
          },
          {
            costCenterName: '电建水电开发公司',
            accountReceivable: 2910.0,
            accountPayable: 2898.0,
            profit: 12.0
          },
          {
            costCenterName: '电建路桥公司',
            accountReceivable: 5020.0,
            accountPayable: 4946.0,
            profit: 74.0
          },
          {
            costCenterName: '电建地产公司',
            accountReceivable: 1010.0,
            accountPayable: 1033.0,
            profit: -23.0
          },
          {
            costCenterName: '电建铁路公司',
            accountReceivable: 8270.0,
            accountPayable: 8158.14,
            profit: 111.86
          },
          {
            costCenterName: '水电新能源公司',
            accountReceivable: 1590.0,
            accountPayable: 1546.0,
            profit: 44.0
          },
          {
            costCenterName: '电建港航公司',
            accountReceivable: 9800.0,
            accountPayable: 9700.0,
            profit: 100.0
          },
          {
            costCenterName: '华东院',
            accountReceivable: 29093.0,
            accountPayable: 28810.0,
            profit: 283.0
          },
          {
            costCenterName: '西北院',
            accountReceivable: 6680.0,
            accountPayable: 6629.0,
            profit: 51.0
          },
          {
            costCenterName: '昆明院',
            accountReceivable: 11525.0,
            accountPayable: 11265.57,
            profit: 259.43
          },
          {
            costCenterName: '河北院',
            accountReceivable: 3686.0,
            accountPayable: 3658.0,
            profit: 28.0
          },
          {
            costCenterName: '华中院',
            accountReceivable: 1360.0,
            accountPayable: 1340.0,
            profit: 20.0
          },
          {
            costCenterName: '江西院',
            accountReceivable: 1310.0,
            accountPayable: 1268.0,
            profit: 42.0
          },
          {
            costCenterName: '福建院',
            accountReceivable: 1780.0,
            accountPayable: 1761.0,
            profit: 19.0
          },
          {
            costCenterName: '上海院',
            accountReceivable: 3100.0,
            accountPayable: 3038.0,
            profit: 62.0
          },
          {
            costCenterName: '吉林院 ',
            accountReceivable: 1700.0,
            accountPayable: 1675.57,
            profit: 24.43
          },
          {
            costCenterName: '青海院',
            accountReceivable: 630.0,
            accountPayable: 605.0,
            profit: 25.0
          },
          {
            costCenterName: '上海电建',
            accountReceivable: 3840.0,
            accountPayable: 3763.0,
            profit: 77.0
          },
          {
            costCenterName: '河北工程公司',
            accountReceivable: 5320.0,
            accountPayable: 5276.0,
            profit: 44.0
          },
          {
            costCenterName: '电建核电公司 ',
            accountReceivable: 780.0,
            accountPayable: 762.0,
            profit: 18.0
          },
          {
            costCenterName: '江西电建',
            accountReceivable: 432.0,
            accountPayable: 399.0,
            profit: 33.0
          },
          {
            costCenterName: '江西水电公司',
            accountReceivable: 760.0,
            accountPayable: 760.0,
            profit: 0.0
          },
          {
            costCenterName: '贵州工程有限公司',
            accountReceivable: 6850.0,
            accountPayable: 6773.0,
            profit: 77.0
          },
          {
            costCenterName: '长春设备公司',
            accountReceivable: 518.0,
            accountPayable: 503.57,
            profit: 14.43
          },
          {
            costCenterName: '湖北装备公司',
            accountReceivable: 940.0,
            accountPayable: 920.0,
            profit: 20.0
          },
          {
            costCenterName: '电建重工公司',
            accountReceivable: 2140.0,
            accountPayable: 2115.57,
            profit: 24.43
          },
          {
            costCenterName: '青海广恒新能源有限公司',
            accountReceivable: 5340.0,
            accountPayable: 5298.0,
            profit: 42.0
          },
          {
            costCenterName: '同业客户',
            accountReceivable: 8370.0,
            accountPayable: -13327.0,
            profit: 21697.0
          },
          {
            costCenterName: '因私服务',
            accountReceivable: -107490.0,
            accountPayable: -67245.0,
            profit: -40245.0
          },
          {
            costCenterName: '宁夏工程公司',
            accountReceivable: 2270.0,
            accountPayable: 2250.0,
            profit: 20.0
          },
          {
            costCenterName: '易瑞国际电子商务有限公司',
            accountReceivable: 450.0,
            accountPayable: 445.0,
            profit: 5.0
          },
          {
            costCenterName: '中铁环境科技工程有限公司',
            accountReceivable: 1360.0,
            accountPayable: 1350.0,
            profit: 10.0
          },
          {
            costCenterName: '中铁建工集团山东有限公司',
            accountReceivable: 1860.0,
            accountPayable: 1840.0,
            profit: 20.0
          },
          {
            costCenterName: '卓望信息技术（北京）有限公司',
            accountReceivable: 4440.0,
            accountPayable: 4410.0,
            profit: 30.0
          },
          {
            costCenterName: '卓望数码技术（深圳）有限公司',
            accountReceivable: 6390.0,
            accountPayable: 6361.0,
            profit: 29.0
          },
          {
            costCenterName: '中国电建集团北京勘测设计研究院有限公司',
            accountReceivable: 6913.0,
            accountPayable: 6885.0,
            profit: 28.0
          },
          {
            costCenterName: '中国电力建设集团有限公司华中区域总部',
            accountReceivable: 264.5,
            accountPayable: 264.5,
            profit: 0.0
          },
          {
            accountReceivable: 26749.5,
            accountPayable: 54603.92,
            costCenterName: '合计',
            profit: -27854.42
          }
        ]
      }
    }
  },
  computed: {
    first40() {
      const p = this.showData.list
      return p.length >= 40 ? p.slice(0, 40) : p
    },
    second90() {
      const p = this.showData.list
      return p.length > 40 ? p.slice(40, 90) : []
    }
  },
  created() {
    // this.time = new Date().format('YYYY-MM-DD')
    this.getData()
  },
  methods: {
    printPage() {
      const subOutputRankPrint = document.getElementById('printArea')
      const newContent = subOutputRankPrint.innerHTML
      const newwindow = window.open(
        'printpage.html',
        'newwindow',
        'width=' +
          (window.screen.availWidth - 10) +
          ',height=' +
          (window.screen.availHeight - 30) +
          ',top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no'
      )
      setTimeout(() => {
        newwindow.document.body.innerHTML += newContent
        newwindow.print()
        newwindow.close()
      }, 1000)
      return false
    },
    getData() {}
  }
}
