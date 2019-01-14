<template>
  <div>
    <el-header>
      <Header/>
    </el-header>
    <el-main>
      <router-view/>
    </el-main>
  </div>
</template>

<script>
import { Header } from './components'
export default {
  name: 'Layout',
  components: {
    Header
  },
  data() {
    return {}
  }
}
</script>
