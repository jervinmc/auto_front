<template>
  <div>
    <div class="pa-5 text-h5">
      <b>Hello, {{ name }}</b>
    </div>
    <div>
      <v-row>
        <v-col align="center">
          <div>
            <v-card
              elevation="10"
              height="200"
              width="200"
              class="d-flex justify-center align-center mb-5 pa-5"
            >
              <v-row>
                <v-col cols="12">
                  <div class="text-h2 green--text">
                    <b>{{total_seller}}</b>
                  </div>
                </v-col>
                <v-col>
                  <div class="text-h6"><b>Total Number of Seller</b></div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
        <v-col align="center">
          <div>
            <v-card
              elevation="10"
              height="200"
              width="200"
              class="d-flex justify-center align-center mb-5 pa-5" 
            >
              <v-row>
                <v-col cols="12">
                  <div class="text-h2 green--text">
                    <b>{{total_buyer}}</b>
                  </div>
                </v-col>
                <v-col>
                  <div class="text-h6"><b>Total Number of Buyer</b></div>
                </v-col>
              </v-row>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
   <div align="center">
      <div class="text-h5 pl-6 pt-5">
      <b>Reports and Analytics</b>
    </div>
    <div class="pie_chart"  style="height:189px" align="center" v-if="chart_data1">
      <pie-chart :data="chartData1" :options="chartOptions"></pie-chart>
    </div>
   </div>
    <!-- <GChart type="ColumnChart" :data="chartData" :options="chartOptions" /> -->
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'
import PieChart from "./PieChart.js";
export default {
  components: {
    GChart,
    PieChart,
  },
  created() {
    this.loadData()
  },
  methods: {
    async reports(){
      const response = await this.$axios
            .get(`/getsales/`, {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            })
            .then((res)=>{
            //   this.reports_list = res.data
              this.total_seller=res.data['no_seller']
              this.total_buyer=res.data['no_customer']
              this.chartData1.datasets[0].data[0]=this.total_seller
             this.chartData1.datasets[0].data[1]=this.total_buyer
             this.chart_data1=true
            })
    },
    loadData() {
      this.reports()
      this.name =
        localStorage.getItem('firstname') +
        ' ' +
        localStorage.getItem('lastname')
    },
  },
  data() {
    return {
      chart_data1:false,
      chartData1: {
        responsive:false,
        hoverBackgroundColor: "red",
        hoverBorderWidth: 10,
        labels: ["Total Seller", "Total Customer"],
        datasets: [
          {
            label: "Data One",
            backgroundColor: ['#E3C790', '#344557'],
            data: [1, 10]
          }
        ]
      },

      total_seller:0,
      total_buyer:0,
      reports_list:[],
      name: '',
      // Array will be automatically processed with visualization.arrayToDataTable function
      // chartData: [
      //   ['Year', 'Number Of Listing', 'Sold Listing'],
      //   ['2022', 1000, 400],
      //   ['2023', 1170, 460],
      //   ['2024', 660, 1120],
      //   ['2025', 1030, 540],
      // ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        },
      },
    }
  },
}
</script>

<style>
.pie_chart {
   margin: 0px 0px 30px 20px;
    max-width: 250px;
  }

</style>