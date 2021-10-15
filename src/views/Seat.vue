<template>
  <div style="padding: 10px">
    <!--    功能区域-->
    <div style="margin: 10px 0">
      <el-button type="primary" @click="add" v-if="true">新增</el-button>
    </div>

    <!--    搜索区域-->
    <div style="margin: 10px 0">
      <el-input v-model="search" placeholder="请输入关键字" style="width: 20%" clearable></el-input>
      <el-button type="primary" style="margin-left: 5px" @click="load">查询</el-button>
    </div>
    <el-table
        v-loading="loading"
        :data="tableData"
        border
        stripe
        style="width: 100%">
      <el-table-column
          prop="time"
          label="时间">
      </el-table-column>
      <el-table-column
          prop="author"
          label="作者">
      </el-table-column>
      <el-table-column
          prop="title"
          label="标题">
      </el-table-column>
      <el-table-column
          prop="id"
          label="ID"
          sortable
      >
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button size="mini" @click="handleEdit(scope.row)" v-if="true">编辑</el-button>
          <el-popconfirm title="确定删除吗？" @confirm="handleDelete(scope.row.id)" v-if="true">
            <template #reference>
              <el-button size="mini" type="danger">删除</el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>

    <div style="margin: 10px 0">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>

    

    </div>
  </div>
</template>

<script>

export default {
  name: 'Seat',
  components: {

  },
  data() {
    return {
      user: {},
      loading: true,
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize: 10,
      total: 0,
      tableData: [{
          time: '2016-05-02',
          author: '王小虎',
          title: '上海市普陀区金沙江路 1518 弄',
          id:'1'
        }, {
          time: '2016-05-02',
          author: '王小虎',
          title: '上海市普陀区金沙江路 1518 弄',
          id:'1'
        }, {
          time: '2016-05-02',
          author: '王小虎',
          title: '上海市普陀区金沙江路 1518 弄',
          id:'1'
        }, {
          time: '2016-05-02',
          author: '王小虎',
          title: '上海市普陀区金沙江路 1518 弄',
          id:'1'
        }],
      filesUploadUrl: "http://" + window.server.filesUploadUrl + ":9090/files/upload"
    }
  },
  created() {
  },
  methods: {
    filesUploadSuccess(res) {
      console.log(res)
      this.form.cover = res.data
    },
    load() {},
    load2() {},
    add() {
      this.dialogVisible = true
      this.form = {}
      if (this.$refs['upload']) {
        this.$refs['upload'].clearFiles()  // 清除历史文件列表
      }
    },
    save() {},
    handleEdit(row) {
      this.form = JSON.parse(JSON.stringify(row))
      this.dialogVisible = true
      this.$nextTick(() => {
        if (this.$refs['upload']) {
          this.$refs['upload'].clearFiles()  // 清除历史文件列表
        }
      })

    },
    handleDelete(id) {
      console.log(id)
    },
    handleSizeChange(pageSize) {   // 改变当前每页的个数触发
      this.pageSize = pageSize
      this.load()
    },
    handleCurrentChange(pageNum) {  // 改变当前页码触发
      this.currentPage = pageNum
      this.load()
    }
  }
}
</script>
