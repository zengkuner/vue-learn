<template>
  <div>
    <h3>指令</h3>
    <hr />
    <h4>其余指令</h4>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-show">v-show</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-if">v-if</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-else">v-else</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-else-if">v-else-if</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-for">v-for</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-model">v-model</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-slot">v-slot</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-pre">v-pre</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-cloak">v-cloak</a>
    </p>
    <p>
      <a href="https://cn.vuejs.org/v2/api/#v-once">v-once</a>
    </p>
    <!--v-once只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被是为静态内容并跳过。
    这这可用于优化更新性能-->
    <!--单个元素-->
    <span v-once>This will never change: {{msg}}</span>
    <!--有子元素-->
    <div>
      <h6>comment</h6>
      <p>{{ msg }}</p>
    </div>
    <button @click="msg++">ADD</button>
    <!--组件-->
    <!--v-for指令-->
    <ul>
      <li v-for="(list,index) in lists" :key="index" v-once>{{list.name}}---{{list.age}}</li>
      <!--在组件中使用v-for时，key是必须的，否则会报错-->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 66,
      lists: [
        {
          name: "鸣人",
          age: 16
        },
        {
          name: "佐助",
          age: 17
        }
      ]
    };
  },
  created: function() {
    this.msg = 77;
  },
  mounted() {
    this.msg = 100;
  },
};
</script>

<style>
</style>