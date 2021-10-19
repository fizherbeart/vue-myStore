<template>
  <div>
    <el-form ref="form" label-width="80px">
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
      <el-form-item>
        <el-row>
          <el-col :span="12">
            <el-select placeholder="选择角色" v-model="value">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <el-col :span="12" prop="invitation">
            <el-input
              prefix-icon="el-icon-star-on"
              v-model="form.invitation"
              placeholder="邀请码"
            ></el-input>
          </el-col>
        </el-row>
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
        invitation:""
      },
      value:'',
      options:[{
        value:1,
        label:"管理员"
      },{
        value:2,
        label:"卖家"
      },{
        value:3,
        label:"买家"
      }]
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
