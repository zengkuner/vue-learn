<template>
  <div>
      <h3>v-show</h3><hr>
      <p v-show="ok">成功</p>
      <p v-show="!ok">失败</p>
      <button @click="ok=!ok">切换</button>
      <p>v-if VS v-show ：</p>
      <p>v-if 是真正的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。</p>
      <p>v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做--直到条件第一次变为真时，才会开始渲染条件块。</p>
      <p>相比之下，v-show 就简单得多--不管初始条件是什么，元素总是会被渲染，并且只是简单地基于CSS切换。</p>
      <p>一般来说，v-if 有更高地切换开销，而v-show 有更高地初始渲染开销。<b>因此，如果需要非常频繁地切换，则使用v-show比较好；
         如果在运行时条件很少改变，则使用v-if较好。</b>
      </p>
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