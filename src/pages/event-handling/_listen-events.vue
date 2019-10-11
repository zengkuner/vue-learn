<template>
  <div>
    <h3>事件监听</h3>
    <hr />
    <!--
            1. 绑定监听：
                v-on:xxx="fun"
                @xxx="fun"
                @xxx="fun(参数)"
                默认事件形参：event
                隐含属性对象：$event
    -->
    <button @click="test1">test1</button>
    <button @click="test2('information')">test2</button>
    <button @click="test3">test3</button>
    <button @click="test4(123,$event)">test4</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    test1() {
      alert("test1");
    },
    test2(msg) {
      alert(msg);
    },
    test3(event) {
      alert(event.target.innerHTML);
    },
    test4(number, event) {
      alert(number + "---" + event.target.innerHTML);
    }
  }
};
</script>

<style>
</style>