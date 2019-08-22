<template>
   <div>
      <h3>数据与方法</h3><hr>
      <p>当一个Vue实例被创建时，它将data对象中的所有的属性加入到Vue的响应式系统中。
         当这些属性值发生改变时，视图将会产生“响应”，即匹配更新为新的值。</p>
      <p>值得注意的是只有当实例被创建时data中存在的属性才是响应式的。也就是说如果你添加一个新的属性，比如：
         <pre><code style="font-size:17px;">
            vm.b = 'hi'
         </code></pre>
         那么对b的改动将不会触发任何视图的更新。如果你知道你会在晚些时候需要一个属性但是一开始它为空或不存在，那么
         你仅需要设置一些初始值。比如：
         <pre><code>
            data: {
               newTodoText: '',
               visitCount: 0,
               hideCompleteTodos: false,
               todos: [],
               error: null
            }
         </code></pre>
         这里唯一的例外是使用Object.freeze()，这会阻止修改现有的属性，也意味着响应系统无法再追踪变化。示例：
      </p>
      <div id="ex">
         <button v-on:click="foo = 'baz'">change it</button>
         <p>{{foo}}</p>
      </div>
      <p>除了数据属性，Vue实例还暴露了一些有用的实例属性与方法。它们都有前缀$，以便与用户定义的属性区分开来。
         具体请参考<a href="https://cn.vuejs.org/v2/api/#%E5%AE%9E%E4%BE%8B%E5%B1%9E%E6%80%A7">API</a>。
      </p>
   </div> 
</template>
<script>
var obj = {
   foo: 'bar'
}
//Object.freeze(obj)
export default{
   data(){
      return obj
   }
}
</script>
<style>
code{
   font-size: 17px;
   /*font-family: 'Times New Roman', Times, serif;*/
}
#ex{
   width: 180px;
   padding: 15px 0 0 15px;
   border: 1px solid gray;
}
</style>