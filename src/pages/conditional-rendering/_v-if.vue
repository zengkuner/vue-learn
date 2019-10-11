<template>
  <div>
    <h3>v-if</h3>
    <hr />
    <p v-if="ok">成功了</p>
    <p v-else>失败</p>

    <test v-show="ok"></test>
    <button @click="ok=!ok">切换</button>
  </div>
</template>

<script>
import Test from "./test";
export default {
  components: { Test },
  data() {
    return {
      ok: false
    };
  }
};
</script>

<style>
</style>