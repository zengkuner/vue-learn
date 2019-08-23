<template>
    <div>
        <h3>计算属性</h3><hr>
        <p>模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
            在模板中放入太多的逻辑会让模板过重且难以维护。所以对于任何复杂逻辑应当使用<b>计算属性</b>。
        </p>
        <p>Original message: "{{message}}"</p>
        <p>Computed reversed message: "{{reversedMessage}}"</p>
        姓：
        <input type="text" placeholder="First Name" v-model="firstName"><br/>
        名：
        <input type="text" placeholder="Last Name" v-model="lastName"><br/>
        姓名1（单向）：
        <input type="text" placeholder="Full Name1" v-model="fullName1"><br/>
        姓名2（单向）：
        <input type="text" placeholder="Full Name2" v-model="fullName2"><br/>
        姓名3（双向）：
        <input type="text" placeholder="Full Name3" v-model="fullName3"><br/>
    </div>
</template>

<script>
export default {
    data(){
        return{
            message: 'Hello',
            firstName: '',
            lastName: '',
            fullName2: '',
            //fullName3: ''
        }
    },
    computed:{
        reversedMessage: function(){
            return this.message.split('').reverse().join('')
        },
        fullName1: function(){
            return this.firstName + ' ' + this.lastName
        },
        fullName3: {
            get(){
                return this.firstName + ' ' + this.lastName
            },
            set(value){
                var names = value.trim().split(' ')
                this.firstName = names[0]
                this.lastName  = names.length > 1 ? names[1] : ''
            }
        }
    },
    watch: {
        firstName: function(val){
            this.fullName2 = val + ' ' + this.lastName
        },
        lastName: function(val){
            this.fullName2 = this.firstName + ' ' + val
        }
    }

}
</script>

<style>

</style>