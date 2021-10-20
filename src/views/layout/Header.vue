<template>
  <div style="height: 50px; line-height: 50px; border-bottom: 1px solid #ccc; display: flex; ">
    <div style="width: 200px; padding-left: 30px; font-weight: bold; color: dodgerblue">后台管理</div>
    <div style="flex: 1"></div>
    <span v-show="cartList.length">{{ cartList.reduce((pre, cur) => (pre + cur.count), 0) }}</span>
    <router-link to="/cart">
      <div>
        <i
          style="font-size: 30px; "
          :class="cartList.length == 0 ? 'el-icon-shopping-cart-2' : 'el-icon-shopping-cart-full'"
        ></i>
      </div>
    </router-link>
    <div style="width: 20px"></div>
    <div style="width: 100px">
      <el-dropdown>
        <span class="el-dropdown-link">
          欢迎, {{ username }}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="$router.push('/person')">个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="exit">退出系统</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      username: ''
    }
  },
  created() {
    // let str = sessionStorage.getItem("user") || "{}"
    this.username = this.cookie.getCookie('username');
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    }
  },
  methods: {
    exit() {
      this.cookie.clearCookie('openId');
      this.cookie.clearCookie('username');
      this.$store.commit('setUserLevel', 0);
      this.$router.replace('/login');
    }
  }
}
</script>

<style scoped>
</style>
