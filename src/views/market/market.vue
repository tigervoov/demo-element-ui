<template>
  <div class="container">
    <el-row>
      <el-col :span="4" :offset="2">
        <el-input v-model="POL" placeholder="SOU"/>
      </el-col>
      <el-col :span="4" :offset="2">
        <el-input v-model="POD" placeholder="DES"/>
      </el-col>
      <el-col :span="2" :offset="2">
        <el-button type="primary" @click="getShip">search</el-button>
      </el-col>
    </el-row>
    <el-table :data="productList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-table :data="props.row.product">
            <el-table-column prop="vesselType" label="vessel"/>
            <el-table-column prop="price" label="price"/>
            <el-table-column prop="remained" label="remained"/>
            <el-table-column label="operation">
              <template slot-scope="scope">
                <el-button type="primary" @click="openBuyDialog(scope.row, props)">Buy</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="POL" prop="POL"/>
      <el-table-column label="POD" prop="POD"/>
      <el-table-column label="ServiceCode" prop="ServiceCode"/>
    </el-table>

    <el-dialog :visible.sync="dialogTableVisible" title="订购" center>
      <el-form :model="productItem">
        <el-form-item label="POD" prop="POD">
          {{ productItem.POD }}
        </el-form-item>
        <el-form-item label="POL" prop="POL">
          {{ productItem.POL }}
        </el-form-item>
        <el-form-item label="ServiceCode" prop="ServiceCode">
          {{ productItem.ServiceCode }}
        </el-form-item>
        <el-form-item label="vessel" prop="vesselType">
          {{ productItem.vesselType }}
        </el-form-item>
        <el-form-item label="price" prop="price">
          {{ productItem.price }}
        </el-form-item>
        <el-form-item label="remained" prop="remained">
          {{ productItem.remained }}
        </el-form-item>
        <el-form-item label="amount" prop="amount">
          <el-input-number v-model="productItem.amount" :min="1" :max="parseInt(productItem.remained)" @change="handleChange"/>
        </el-form-item>
        <el-form-item label="total price">
          {{ productItem.totalPrice }}
        </el-form-item>
        <el-form-item>
          <el-button @click="addToShoppingList">加入购物车</el-button>
          <el-button type="primary" @click="switchToOrder">购买</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

  </div>
</template>

<script>
import { getShips } from '@/api/market'
export default {
  data() {
    return {
      POL: '',
      POD: '',
      productList: [],
      dialogTableVisible: false,
      productItem: {
        POD: '',
        POL: '',
        ServiceCode: '',
        price: '',
        remained: '',
        vesselType: '',
        amount: 1,
        total: 1,
        totalPrice: 0,
        originRemained: 0
      }
    }
  },
  methods: {
    async getShip() {
      const result = await getShips({})
      console.log(result)
      this.productList = result.data
    },
    openBuyDialog(product, catalog) {
      this.dialogTableVisible = true
      this.productItem.vesselType = product.vesselType
      this.productItem.price = product.price
      this.productItem.remained = product.remained
      this.productItem.originRemained = product.remained
      this.productItem.amount = 1
      this.productItem.totalPrice = product.price
      this.productItem.POD = catalog.row.POD
      this.productItem.POL = catalog.row.POL
      this.productItem.ServiceCode = catalog.row.ServiceCode
    },
    handleChange(value) {
      this.productItem.amount = value
      this.productItem.remained = this.productItem.originRemained - value
      this.productItem.totalPrice = this.productItem.price * this.productItem.amount
    },
    switchToOrder() {
      this.dialogTableVisible = false
      this.productItem.selected = false
      this.$store.dispatch('addShoppingList', this.productItem)
      this.$router.push({ path: '/order' })
    },
    addToShoppingList() {
      this.dialogTableVisible = false
      this.productItem.selected = false
      this.$store.dispatch('addShoppingList', this.productItem)
      this.$message({ type: 'success', message: 'already added to shopping list' })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 16px;
}
</style>
