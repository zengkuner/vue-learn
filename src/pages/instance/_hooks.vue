<template>
    <div>
        <h3>实例生命周期钩子</h3><hr>
        <p>每个Vue实例在被创建时都要经过一系列的初始化过程--例如，需要设置数据监听、编译模板、
            将实例挂载到DOM并在数据变化时更新DOM等。同时在这个过程中也会运行一些叫做
            生命周期钩子的函数，这给了用户在不同阶段添加自己代码的机会。</p>
        <p>比如created钩子可以用来在一个实例被创建之后执行代码：
            <pre><code>
                new Vue({
                    data: { a : 1 },
                    created: function(){
                        //`this`指向vm实例
                        console.log('a is:' + this.a)
                    }
                })//=> " a is: 1 "
            </code></pre>
            也有一些其它的钩子，在实例生命周期的不同阶段被调用，如mounted、updated和destroyd。
            生命周期钩子的this上下文指向调用它的Vue实例。
        </p>
        <p>注意箭头函数没有自己的this，所以不要在选项属性或回调上使用箭头函数。</p>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>