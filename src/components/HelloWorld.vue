<template>
  <div class="hello">
    hello world
    <el-button @click="doLogin()">登录</el-button>
    <el-button @click="MyTest()">测试</el-button>
    <el-button @click="doLogout()">注销</el-button>
  </div>
</template>

<script>
import { aaaa } from "../api/testApi";
import { login, logout } from "../api/login";
import { setToken } from "../api/cookie";

export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {},
  methods: {
    doLogin() {
      let User = { username: "测试者", password: "123456" };
      login(User).then(res => {
        console.log(res);
        setToken(res.data.data.sessionId);
      });
    },
    MyTest() {
      aaaa()
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    doLogout() {
      logout().then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
