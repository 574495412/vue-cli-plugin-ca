<template>
  <div class="page page-index">
    <div class="header-wrapper">
      <div class="header-container">

      </div>
    </div>
    <div class="main full-container">
      <h3>中非网前端架构</h3>
      <a href="https://github.com/574495412/vue-cli-plugin-ca#readme" target="_blank" rel="noopener">vue-cli-plugin-ca</a>.
    </div>
    <!--footer-->
    <div class="footer-container">
      <p>
        For guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
      </p>
      <h3>Installed CLI Plugins</h3>
      <ul>
        <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript" target="_blank" rel="noopener">typescript</a></li>
      </ul>
      <h3>Essential Links</h3>
      <ul>
        <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
        <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
        <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
        <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
        <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
      </ul>
      <h3>Ecosystem</h3>
      <ul>
        <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
        <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
        <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
        <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
        <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "home",
    components: {},
    data() {
      return {}

    },
    created() {},
    mounted() {

    },
    computed: {},
    methods: {

    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .page-index {
    font-family: Arial, Helvetica, Tahoma, Arial, "Microsoft Yahei";
    background-color: #f2f3f7; // padding: 30px 0;
    width: 100%;
    height: 100%;
  }

  .main {
    background-color: #f2f3f7;
    padding: 30px 0;
    color: #333;
    font-size: 26px;
    text-align: center;
  }

  .footer-container {
    text-align: center
  }

  h3 {
    margin: 40px 0 0;
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