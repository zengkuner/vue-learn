<template>
    <div>
        <h3>插值</h3><hr>
        <h4>文本</h4>
        <p>数据绑定最常见的形式就是使用{{ }}双大括号的文本插值：<span v-once>{{msg}}</span>
            <pre><code>
                &lt;span&gt;Message: {{msg}}&lt;/span&gt;
            </code></pre>
            双大括号标签将会被替代为对应数据对象上msg属性的值。无论何时，绑定的数据对象上msg属性发生了改变，
            插值处的内容都会更新。
        </p>
        <p>1. v-once指令</p>
        <p>通过使用v-once指令可以执行一次性地插值，当数据改变时，插值处的内容不会更新。
            但请留心这会影响到该节点上的其它数据绑定：
            <pre><code>
                &lt;span v-once&gt;这个将不会改变：{{ msg }}&lt;/span&gt;
            </code></pre>
        </p>
        <h4>v-html原始HTML</h4>
        <p>2. v-html指令</p>
        <p>双大括号会将数据解释为普通文本，而非HTML代码。为了输出真正的HTML，你需要使用v-html指令。</p>
        <p>3. v-text指令</p>
        <p>v-text="text":将数据解析为纯文本，不能输出真正的html，与双大括号的区别是在页面加载时不显示{{ msg1 }}。
            示例：
        </p>
        <div id="box1">
            <p>当数据rawHtml设定为'{{rawHtml}}' 时：</p>
            <p class="btn1" v-text="msg3"></p>&nbsp;&nbsp;<button @click="test1(rawHtml)">输出</button><br>
            <p class="btn1" v-text="msg4"></p>&nbsp;&nbsp;<button @click="test2(register)">输出</button>
            <span id="te0"></span><span id="te"></span><br>
            <p class="btn1" v-text="msg5"></p>&nbsp;&nbsp;<button @click="test3(rawHtml)">输出</button><br>
        </div>
        <h4>特性</h4>
        <p>双大括号语法不能作用在HTML特性上，遇到这种情况应该使用v-bind指令。</p>
        <p>4. v-bind指令</p>
        <span>v-bind强制数据绑定，指定变化的属性值。示例：</span><br>
        <img :src="imgUrl">
        <img v-bind:src="imgUrl"><br><br>
        <p>所有的数据绑定，都支持JavaScript表达式。有个限制就是，每个绑定都只能包含单个表达式。</p>
        <p>5. v-on指令绑定事件监听</p>
        <span>v-on指令用于监听DOM事件，例如{{msg6}}</span>
        <button type="button" v-on:click="test1">v-on绑定示例</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg: '{{ msg }}',
            msg1: '{{ }}',
            msg2: '{{ rawHtml }}',
            msg3: '<p>Using mustaches: {{ rawHtml}}</p>',
            msg4: '<p>Using v-html directive: <span v-html="rawHtml"></span></p>',
            msg5: '<p>Using v-text directive: <span v-text="rawHtml"></span></p>',
            rawHtml: '<sapn style="color:red">This should be red.</sapn>',
            register: 'This should be red.',
            imgUrl: 'https://cn.vuejs.org/images/logo.png',
            msg6: '<a v-on:cilck="doSomething">...</a>'
        }
    },
    methods:{
        test1(content){
            alert("Using mustaches: "+content)
        },
        test2(content){
            document.getElementById("te0").innerHTML= "Using v-html directive: "
            document.getElementById("te").innerHTML=content
        },
        test3(content){
            alert("Using v-text directive: "+content)
        }
    }
}
</script>

<style>
.btn1{
    display: inline-block;
}
#box1{
    border: 1px solid gray;
    width: 1000px;
    padding: 5px 0 0 15px;
}
#te{
    color: red;
}
</style>