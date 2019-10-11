<template>
  <div>
    <h3>事件修饰符</h3>
    <hr />
    <!--
            2. 事件修饰符
                .prevent：阻止事件的默认行为 event.preventDefault()
                .stop：停止事件冒泡 event.stopPropagation()
    -->
    <div class="box">
      <p class="title">1. 事件冒泡</p>
      <div id="box0" @click="test1">
        <div id="box2" @click="test2">点我</div>
      </div>
      <div id="box3" @click="test3">
        <div id="box4" @click.stop="test4">点我</div>
        <!--阻止事件冒泡-->
        阻止事件冒泡
      </div>
    </div>
    <div class="box">
      <p>2. 事件的默认行为</p>
      <button>
        <a href="http://www.baidu.com" @click="test5">去百度</a>
      </button>
      &nbsp;&nbsp;
      <a
        class="fake-button"
        href="http://www.baidu.com"
        @click.prevent="test6"
      >去百度</a>
      <!--阻止事件的默认行为-->

      <div>
        <router-link to="/watcher">侦听器</router-link>
        <br />
        <a href="/watcher" @click.prevent="$router.push({path: '/watcher'})">侦听器</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test1() {
      alert("out");
    },
    test2() {
      alert("inner");
    },
    test3() {
      alert("out");
    },
    test4() {
      // event.stopPropagation()
      alert("inner");
    },
    test5() {
      // event.preventDefault()
      alert("点击了");
    },
    test6() {
      alert("点击了（已阻止跳转）");
    }
  }
};
</script>

<style lang="scss">
.box {
  position: relative;
  overflow: hidden; /*解决高度塌陷*/
}
#box0 {
  float: left;
  width: 200px;
  height: 200px;
  background: red;
  margin-right: 70px;
}
#box2 {
  text-align: center;
  line-height: 80px;
  float: left;
  width: 100px;
  height: 100px;
  background: blue;
}
#box3 {
  text-align: center;
  line-height: 250px;
  float: left;
  width: 200px;
  height: 200px;
  background: red;
}
#box4 {
  text-align: center;
  line-height: 80px;
  float: left;
  width: 100px;
  height: 100px;
  background: blue;
}
a {
  text-decoration: none;
}
.fake-button {
  display: inline-block;
  text-decoration: none;
  color: #666;
  border: 1px solid;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  background: #999;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease;
}

.fake-button:hover {
  background: #fff;
  color: #666;
}
</style>