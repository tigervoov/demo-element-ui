<template>
  <div class="container">
    <el-row>
      <el-table :data="shoppingList">
        <el-table-column>
          <template slot-scope="scope">
            <el-checkbox v-model="scope.row.selected" @change="select"/>
          </template>
        </el-table-column>
        <el-table-column prop="vesselType" label="vessel"/>
        <el-table-column prop="POL" label="POL"/>
        <el-table-column prop="POD" label="POD"/>
        <el-table-column prop="ServiceCode" label="ServiceCode"/>
        <el-table-column prop="price" label="price"/>
        <el-table-column prop="amount" label="amount"/>
        <el-table-column prop="totalPrice" label="totalPrice"/>
        <el-table-column label="operation">
          <template slot-scope="scope">
            <el-button type="danger" @click="removeItem(scope.$index)">删除订单</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row class="buyBtn">
      <el-button type="primary" @click="buy">提交订单</el-button>
    </el-row>
  </div>
</template>

<script>
import { handoverBookingList } from '@/api/market'
export default {
  data() {
    return {
      shoppingList: []
    }
  },
  mounted() {
    this.shoppingList = this.$store.getters.shoppingList
  },
  methods: {
    removeItem(index) {
      this.shoppingList.splice(index, 1)
      this.$store.dispatch('changeShoppingList', this.shoppingList)
      this.$router.push('/order')
    },
    async buy() {
      const itemSelected = []
      for (var i = 0; i < this.shoppingList.length; i++) {
        if (this.shoppingList[i].selected) {
          itemSelected.push(this.shoppingList.splice(i, 1))
          i = i - 1
        }
      }
      this.$store.dispatch('changeShoppingList', this.shoppingList)
      const result = await handoverBookingList(itemSelected)
      if (result) {
        this.$message({ type: 'success', message: 'booking already handed over' })
      } else {
        this.$message({ type: 'error', message: 'booking failed to hand over' })
      }
    },
    select() {
      this.$store.dispatch('changeShoppingList', this.shoppingList)
    }
  }
}
</script>

<style scoped>
.container {
  padding: 16px;
}
.buyBtn {
  float: right;
  padding-right: 80px;
  padding-top: 10px;
}
</style>
