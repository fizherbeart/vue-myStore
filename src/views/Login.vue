<template>
  <div id="background" style="width: 100%; height: 100vh; overflow: hidden;" :style="bg">
    <div id="login_box" style="width: 400px; margin: 200px auto;">
      <div style="font-size: 30px; text-align: center; padding: 30px 0">欢迎登录</div>
      <el-form ref="form" :model="form" size="normal" :rules="rules">
        <el-form-item prop="username">
          <el-input prefix-icon="el-icon-user-solid" v-model="form.username" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            v-model="form.password"
            show-password
            placeholder="密码"
          ></el-input>
        </el-form-item>
        <el-row>
          <el-col :span="12">
            <el-form-item>
              <el-button style="width: 80%; margin: 0 20% 0 0%" type="primary" @click="login">登录</el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-button style="width: 80%; margin: 0 0% 0 20%" @click="dialogVisible = true">注册</el-button>
          </el-col>
        </el-row>
      </el-form>
      <el-dialog title="注册" :visible.sync="dialogVisible" width="30%" append-to-body>
        <Register></Register>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">立即注册</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </el-dialog>
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
      form: {
        role: 1,
        username: '',
        password: '',
        invitation: ''
      },
      options: [{
        value: '0',
        label: '管理员'
      }, {
        value: '1',
        label: '卖家'
      }, {
        value: '2',
        label: '买家'
      }],
      value: '',
      dialogVisible: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        invitation: [{
          required: () => {
            console.log(this.data().value);
            return true
          }, message: "请输入邀请码", trigger: "blur"
        }],
      },
      // 加背景图片
      bg: {
        backgroundImage: "url(" + require("@/assets/bg.jpg") + ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        opacity: 0.9
      }
    };
  },
  created() {
    sessionStorage.removeItem("user");
  }
  ,
  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          const formInfo = this.$refs["form"].model;
          const user = { username: formInfo.username, password: formInfo.password }
          if (this.$store.getters.userIsExisted(user)) {
            this.$message.success('登录成功!');
            this.$router.replace('/list');
          } else {
            this.$message.error('登录失败,用户名或密码错误!');
          }
        }
      });
    }
    ,
  }
};
</script>

<style scoped>
#background {
}
#login_box {
  border: 2px solid blanchedalmond;
  padding: 45px;
  background-color: rgba(255, 255, 255, 0.1);
}
.el-form-item {
  padding-bottom: 20px;
}
</style>
