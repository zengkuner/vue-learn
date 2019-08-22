<template>
    <div>
        <h3>计算属性</h3><hr>
        <p>模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
            在模板中放入太多的逻辑会让模板过重且难以维护。所以对于任何复杂逻辑应当使用<b>计算属性</b>。</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: 66
        }
    },
    created: function(){
        this.msg = 77
    }
}
</script>

<style>

</style>