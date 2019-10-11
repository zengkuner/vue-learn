<template>
    <button @click="incrementCounter">{{ counter }}</button>
</template>

<script>
export default {
  data(){
    return {
      counter: 0
    }
  },
  methods: {
    incrementCounter(){
      this.counter++,
      this.$emit('increment')
    }
  }
}
</script>

<style>

</style>