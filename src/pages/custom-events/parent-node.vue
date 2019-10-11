<template>
  <div>
    <h3>事件绑定</h3><hr>
    <p>{{ total }}</p>
    <child-node @increment="incrementTotal" />
    <child-node @increment="incrementTotal" />
  </div>
</template>

<script>
import ChildNode from './child-node'
export default {
  components:{
    ChildNode
  },
  data() {
    return {
      'total': 0
    }
  },
  methods: {
    incrementTotal() {
      this.total++
    }
  }
}
</script>

<style>

</style>