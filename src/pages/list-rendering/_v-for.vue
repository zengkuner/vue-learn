<template>
    <div>
        <h3>v-for</h3><hr>
        <p>1. 测试：v-for遍历数组</p>
        <ul>
            <li v-for="(p,index) in persons" :key="index">
                {{index}}---{{p.name}}---{{p.age}}---<button @click="deleteP">删除</button>
                ---<button @click="updateP(index,{name:'Cat',age:20})">更新</button>
            </li>
        </ul>
        <p>2. 测试：v-for遍历对象</p>
        <ul>
            <li v-for="(item,key) in persons[1]" :key="key">
                {{item}}---{{key}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            //vue本身只监视了persons的改变，没有监视数组内部数据的改变
            //vue重写了数组中的一系列改变数组内部数据的方法（先调用原生，更新界面）--数组内部改变，界面自动变化
            persons:[
                {name: 'TOm1',age: 18},
                {name: 'Jack',age: 19},
                {name: 'Bob',age: 20},
                {name: 'Rose',age: 21}
            ]
        }
    },
    methods:{
        //删除persons中指定下标（index）的P
        deleteP(index){
            this.persons.splice(index,1)
        },
        updateP(index,newP){
            //并没有改变persons本身，数组内部发生了变化，但并没有调用变异方法，vue不会更新界面。
            //this.persons[index] = newP  
            this.persons.splice(index,1,newP)
        }
    }
}
</script>

<style>

</style>