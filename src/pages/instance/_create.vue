<template>
  <div id="create">
    <h3>创建一个Vue实例</h3>
    <hr />
    <p>每个Vue应用都是通过用Vue函数创建一个新的Vue实例开始的：</p>
    <pre><code style="font-size: 17px;">
            var vm = new Vue({
                //选项
            })
        </code></pre>
    <p>
      一个Vue应用由一个通过new Vue创建的根Vue实例，以及可选的嵌套的、可复用的组件树组成。
      当创建一个Vue实例时，你可以传入一个选项对象。
    </p>
    <div ref="subNode"></div>
  </div>
</template>
<script>
import Vue from "vue";
export default {
};
</script>