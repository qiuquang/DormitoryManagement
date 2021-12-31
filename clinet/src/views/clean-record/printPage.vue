<template>
  <div ref="printArea" class="everyDaySales">
    <div class="search no-print">
      <el-date-picker
        v-model="time"
        size="mini"
        type="date"
        format="yyyy 年 MM 月 dd 日"
        value-format="yyyy-MM-dd"
        placeholder="选择日期"
      />
      <el-button type="primary" size="mini" @click="getData">搜索</el-button>
      <el-button type="primary" size="mini" @click="printPage">打印</el-button>
    </div>
    <div id="printArea">
      <div class="commonPrint">
        <div class="printLeft">
          <div class="printLeftTitle">{{ showTime }} 销售报表统计</div>
          <table border="1" width="370" cellspacing="0">
            <tr align="right">
              <td />
              <td>应收</td>
              <td>应付</td>
              <td>利润</td>
            </tr>
            <tr align="right">
              <td>昨日累计</td>
              <td>{{ showData.yesterdayReceivable | remainTwo }}</td>
              <td>{{ showData.yesterdayPayable | remainTwo }}</td>
              <td>{{ showData.yesterdayProfit | remainTwo }}</td>
            </tr>
            <tr align="right">
              <td>今日发生</td>
              <td>{{ showData.todayReceivable | remainTwo }}</td>
              <td>{{ showData.todayPayable | remainTwo }}</td>
              <td>{{ showData.todayProfit | remainTwo }}</td>
            </tr>
            <tr align="right">
              <td>今月累计</td>
              <td>{{ showData.thisMonthReceivable | remainTwo }}</td>
              <td>{{ showData.thisMonthPayable | remainTwo }}</td>
              <td>{{ showData.thisMonthProfit | remainTwo }}</td>
            </tr>
            <tr align="right">
              <td>今日变动本月</td>
              <td>{{ showData.thisMonthChangeReceivable | remainTwo }}</td>
              <td>{{ showData.thisMonthChangePayable | remainTwo }}</td>
              <td />
            </tr>
            <tr align="right">
              <td>今日调整往月</td>
              <td>{{ showData.pastMonthChangeReceivable | remainTwo }}</td>
              <td>{{ showData.pastMonthChangePayable | remainTwo }}</td>
              <td />
            </tr>
            <tr align="right">
              <td>今日调整往年</td>
              <td>{{ showData.pastYearChangeReceivable | remainTwo }}</td>
              <td>{{ showData.pastYearChangePayable | remainTwo }}</td>
              <td />
            </tr>
          </table>

          <div class="printLeftTitle">{{ showTime }} 销售报表统计</div>
          <table border="1" width="370" cellspacing="0">
            <tr align="right">
              <td>成本中心名称</td>
              <td>应收款</td>
              <td>应付款</td>
              <td>利润</td>
            </tr>
            <tr v-for="(item, index) in first40" :key="index" align="right">
              <td>{{ item.costCenterName }}</td>
              <td>{{ item.accountReceivable | remainTwo }}</td>
              <td>{{ item.accountPayable | remainTwo }}</td>
              <td>{{ item.profit | remainTwo }}</td>
            </tr>
          </table>
        </div>
        <div class="printRight">
          <div v-if="!!second90.length" class="printLeftTitle">
            {{ showTime }} 销售报表统计
          </div>
          <table
            v-if="!!second90.length"
            border="1"
            width="370"
            cellspacing="0"
          >
            <tr align="right">
              <td>成本中心名称</td>
              <td>应收款</td>
              <td>应付款</td>
              <td>利润</td>
            </tr>
            <tr v-for="(item, index) in second90" :key="index" align="right">
              <td>{{ item.costCenterName }}</td>
              <td>{{ item.accountReceivable | remainTwo }}</td>
              <td>{{ item.accountPayable | remainTwo }}</td>
              <td>{{ item.profit | remainTwo }}</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import everyMixin from './everymixin.js'

export default {
  name: 'EveryDaySales',
  mixins: [everyMixin]
}
</script>

<style lang="scss" scoped>
.everyDaySales {
  font-size: 10px;
  padding: 5px;
  .search {
    padding: 5px;
  }
  #printArea {
    display: flex;
    width: 862px;
    flex-direction: column;
    .commonPrint {
      display: flex;
      margin-top: 10px;
      page-break-after: always;
    }
    .printLeft {
      text-align: center;
      width: 50%;
      .printLeftTitle {
        width: 100%;
        text-align: center;
      }
    }
    .printRight {
      text-align: center;
      width: 50%;
      .printLeftTitle {
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
