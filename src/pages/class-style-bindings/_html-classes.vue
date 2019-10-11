<template>
  <div>
    <h3>绑定HTML Class</h3>
    <hr />
    <p>1. class绑定 :class='xxx'</p>
    <p class="c_class" :class="a">xxx是字符串</p>
    <p :class="{a_class: true,b_class:false}">xxx是对象1</p>
    <p :class="{a_class: isA,b_class: isB}">xxx是对象2</p>
    <p :class="['a_class', 'c_class']">xxx是数组</p>
    <button @click="update">更新字符串</button>
    <button @click="update1">更新对象2</button>

    <p>2. style绑定</p>
    <p :style="{color: activeColor, fontSize: fontSize + 'px'}">测试style绑定</p>
    <button @click="update2">更新</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      a: "a_class",
      isA: true,
      isB: false,
      activeColor: "red",
      fontSize: 20
    };
  },
  methods: {
    update() {
      this.a = "b_class";
    },
    update1() {
      this.isA = false;
      this.isB = true;
    },
    update2() {
      this.activeColor = "green";
      this.fontSize = 30;
    }
  }
};
</script>

<style>
.a_class {
  color: red;
}
.b_class {
  color: blue;
}
.c_class {
  font-size: 18px;
}
</style>