<template>
  <div>
    <h3>侦听器</h3>
    <hr />
    <p>
      虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么Vue通过watch选项提供了
      一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
    </p>
    <P>
      Ask a yes/no question:
      <input type="text" v-model="question" />
    </P>
    <p>{{answer}}</p>
    <p>
      在这个示例中，使用watch选项允许我们执行异步操作（访问一个API），限制我们执行该操作的频率，
      并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      question: "answer",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  watch: {
    //如果`question`发生改变，这个函数就会运行
    question: {
      immediate: true,
      handler: function(newQuestion, OldQuestion) {
        this.answer = "Waiting for you to stop typing....";
        console.log("Waiting for you to stop typing....");
        // this.debouncedGetAnswer();
      }
    }
  }
  /*
    created: function(){
        this.debouncedGetAnswer = _.debounce(this.getAnswer,500)
    },
    methods: {
        getAnswer: function(){
            if (this.question.indexof('?')===-1){
                this.answer = 'Question usually contain a question mark. '
                return 
            }
            this.answer = 'Thinking...'
            var vm = this
            axios.get('https://yesno.wtf/api')
                .then(function (response){
                    vm.answer = _.capitalize(response.data.answer)
                })
                .catch(function (error){
                    vm.answer = 'Error! Could not reach the API.' + error
                })
        }
    }*/
};
</script>

<style>
</style>