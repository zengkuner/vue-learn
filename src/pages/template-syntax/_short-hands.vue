<template>
    <div>
        <h3>缩写</h3><hr>
        <p>v- 前缀作为一种视觉提示，用来识别模板中Vue特定的特性。
            而Vue为v-bind和v-on这两个最常用的指令提供了特定简写。</p>
        <p>1. v-bind缩写</p>
        <p>完整语法：{{msg1}}</p>
        <p>缩写：{{msg2}}</p>
        <p>2. v-on缩写</p>
        <p>完整语法：{{msg3}}</p>
        <p>缩写：{{msg4}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg1: '<a v-bind:href = "url">...</a>',
            msg2: '<a :href = "url">...</a>',
            msg3: '<a v-on:click = "doSomething">...</a>',
            msg4: '<a @click = "doSomething">...</a>'
        }
    }
}
</script>

<style>

</style>