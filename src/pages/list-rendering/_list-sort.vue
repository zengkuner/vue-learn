<template>
    <div>
        <h3>列表的搜索和排序</h3><hr>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="(p,index) in filterPersons" :key="index">
                {{index}}---{{p.name}}---{{p.age}}
            </li>
        </ul>
        <button @click="setOrderType(1)">年龄升序</button>
        <button @click="setOrderType(2)">年龄降序</button>
        <button @click="setOrderType(0)">原本顺序</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchName: '',
            orderType: 0, //0表示原序，1表示升序，2表示降序
            persons: [
                {name: 'Tom',age: 20},
                {name: 'Jack',age: 17},
                {name: 'Bob',age: 19},
                {name: 'Rose',age: 18}
            ]
        }
    },
    computed:{
        filterPersons(){
            //得到相关的数据
            const {searchName,persons,orderType} = this
            //最终需要显示的数组
            let fPersons;
            //对persons进行过滤
           fPersons = persons.filter(p => p.name.indexOf(searchName)!==-1)

            //排序
            if(orderType!==0){
                fPersons.sort(function(p1,p2){ //若返回负数，p1较大，p1在前；反之亦反
                    //1表示升序，2表示降序
                    if(orderType===2){
                        return p2.age-p1.age
                    }
                    else{
                        return p1.age-p2.age
                    }
                })
            }
           return fPersons
        }
    },
    methods:{
        setOrderType(orderType){
            this.orderType = orderType
        }
    }
}
</script>

<style>

</style>