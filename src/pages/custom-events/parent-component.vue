<template>
  <div class="parent">
    <h3>数据传递</h3><hr>
    <div>
      <span>父组件数据</span>
      <input type="text" v-model="msg">
    </div>
    <p>{{ msg }}</p>
    <child-component @pass-data="getData"></child-component>
  </div>
</template>

<script>
import ChildComponent from './child-component'
export default {
  components:{
    ChildComponent
  },
  data(){
    return{
      'msg': 'match'
    }
  },
  methods:{
    getData(value){
      this.msg = value;
    }
  }
}
</script>

<style>

</style>