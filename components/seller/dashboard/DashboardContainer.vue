<template>
  <div>
    <div class="pa-5 text-h5">
      <b>Hello, Juan Delacruz</b>
    </div>
    <div>
      <v-row>
        <v-col align="center">
          <div>
            <v-card elevation="5" height="200" width="200" class="d-flex justify-center align-center mb-5">
              <div class="text-h5">
                <b> 50</b>
              </div>
            </v-card>
          </div>
        </v-col>
         <v-col align="center">
          <div>
            <v-card elevation="5" height="200" width="200" class="d-flex justify-center align-center mb-5">
              <div class="text-h5">
                <b> 50</b>
              </div>
            </v-card>
          </div>
        </v-col>
         <v-col align="center">
          <div>
            <v-card elevation="5" height="200" width="200" class="d-flex justify-center align-center mb-5">
              <div class="text-h5">
                <b> 50</b>
              </div>
            </v-card>
          </div>
        </v-col>
      </v-row>
    </div>
    <GChart type="ColumnChart" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { GChart } from 'vue-google-charts'

export default {
  components: {
    GChart,
  },
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350],
      ],
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
</style>