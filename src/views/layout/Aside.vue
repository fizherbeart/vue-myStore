<template>
  <div>
    <el-menu
      style="width: 200px; min-height: calc(100vh - 50px)"
      :default-active="path"
      router
      class="el-menu-vertical-demo"
    >
      <el-menu-item index="/list" v-if="userLevel >= 1">查看商品</el-menu-item>
      <el-menu-item index="/goods" v-if="userLevel >= 2">商品管理</el-menu-item>
      <el-menu-item index="/user" v-if="userLevel >= 3">用户管理</el-menu-item>
      <!-- <el-submenu index="1" v-if="true">
        <template #title>系统管理</template>
        <el-menu-item index="/user">用户管理</el-menu-item>
      </el-submenu>-->
    </el-menu>
  </div>
</template>

<script>

export default {
  name: "Aside",
  computed: {
    userLevel() {
      return this.$store.state.userLevel;
    }
  },
  data() {
    return {
      user: {},
      path: this.$route.path   // 设置默认高亮的菜单
    }
  },
  created() {
    let userStr = sessionStorage.getItem("user") || "{}"
    this.user = JSON.parse(userStr)
  }
}
</script>

<style scoped>
</style>
