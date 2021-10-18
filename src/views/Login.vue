<template>
  <div style="width: 100%; height: 100vh; overflow: hidden">
    <!--  :style="bg" 加背景图片-->
    <div style="width: 400px; margin: 100px auto">
      <div style="font-size: 30px; text-align: center; padding: 30px 0">
        欢迎登录
      </div>
      <el-form ref="form" :model="form" size="normal" :rules="rules">
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-user-solid"
            v-model="form.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
          ></el-input>
        </el-form-item>
        <el-form-item> </el-form-item>
        <el-row>
          <el-col :span="10">
            <el-form-item>
              <el-button style="width: 100%" type="primary" @click="login"
                >登 录</el-button
              >
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-button style="width: 100%" @click="dialogVisible = true"
              >注册</el-button
            >

            <el-dialog
              title="注册"
              :visible.sync="dialogVisible"
              width="30%"
              :before-close="handleClose"
            >
              <Register></Register>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">立即注册</el-button>
                <el-button type="primary" @click="dialogVisible = false"
                  >确 定</el-button
                >
              </span>
            </el-dialog>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </div>
</template>

<script>
import Register from "./Register.vue";
export default {
  components: { Register },
  name: "Login",
  data() {
    return {
      form: { role: 1 },
      dialogVisible: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
      // 加背景图片
      // bg: {
      //   backgroundImage: "url(" + require("@/assets/bg.jpg") + ")",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "100% 100%"
      // }
    };
  },
  created() {
    sessionStorage.removeItem("user");
  },
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
