<template>
  <div class="child">
    <div>
      <span>子组件数据</span>
      <input type="text" v-model="childMsg" @input="data">
    </div>
    <p>{{ childMsg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childMsg: ''
    }
  },
  methods: {
    data() {
      this.$emit('pass-data',this.childMsg)
    }
  }
}
</script>

<style>

</style>