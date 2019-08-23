<template>
  <div>
      <h3>v-if</h3><hr>
      <p v-if="ok">成功了</p>
      <p v-else>失败</p>
      <button @click="ok=!ok">切换</button>
  </div>
</template>

<script>
export default {
    data(){
        return{
            ok: false
        }
    }
}
</script>

<style>

</style>