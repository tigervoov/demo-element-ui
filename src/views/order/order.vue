<template>
  <div class="container">
    <el-row>
      <el-table :data="orderList">
        <el-table-column prop="vesselType" label="vessel"/>
        <el-table-column prop="POL" label="POL"/>
        <el-table-column prop="POD" label="POD"/>
        <el-table-column prop="ServiceCode" label="ServiceCode"/>
        <el-table-column prop="amount" label="amount"/>
        <el-table-column prop="totalPrice" label="totalPrice"/>
        <el-table-column prop="status" label="status"/>
        <el-table-column label="operation">
          <template slot-scope="scope">
            <el-button type="primary">pay</el-button>
            <el-button type="danger" @click="cancel(scope.row)">cancel</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script>
import { fetchOrderList, cancelOrder } from '@/api/market'
export default {
  data() {
    return {
      orderList: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    async cancel(data) {
      const result = await cancelOrder(data)
      if (result) {
        this.$message({ type: 'success', message: 'already cancel order' })
      } else {
        this.$message({ type: 'error', message: 'failed to cancel order' })
      }
      this.fetchData()
    },
    async fetchData() {
      const result = await fetchOrderList()
      this.orderList = result.data
    }
  }
}
</script>

<style scoped>
.container {
  padding: 16px;
}
</style>
