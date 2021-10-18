<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="form.password1"
          show-password
        ></el-input>
      </el-form-item>
      <el-form-item label="请再输入">
        <el-input
          prefix-icon="el-icon-lock"
          v-model="form.password2"
          show-password
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      form: {
        username: "",
        password1: "",
        password2: "",
      },
    };
  },
  created() {},
  mounted() {},
  methods: {
    onsubmit() {},
  },
};
</script>

<style>
</style>