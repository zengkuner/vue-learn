<template>
    <div>
        <h3>按键修饰符</h3><hr>
        <!--
            3. 按键修饰符
                .keycode：操作的是某个keycode值的键
                .enter：操作的是enter键
        -->
        <input type="text" placeholder="获取输入的值" @keyup="test1"><br><br>
        <input type="text" placeholder="获取输入的值及编码" @keyup="test2"><br><br>
        <input type="text" placeholder="按下enter键后获取" @keyup.13="test3"><br><br>
        <input type="text" placeholder="按下enter键后获取" @keyup.enter="test3">
    </div>
</template>

<script>
export default {
    methods: {
        test1(event){
            alert(event.target.value)
        },
        test2(event){
            alert(event.target.value + ' ' + event.keyCode)
        },
        test3(event){
            alert(event.target.value + ' ' + event.keyCode)
        }
    }
}
</script>

<style>

</style>