<template>
  <div>
    <h3>计算属性</h3>
    <hr />
    <p>
      模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。
      在模板中放入太多的逻辑会让模板过重且难以维护。所以对于任何复杂逻辑应当使用
      <b>计算属性</b>。
    </p>
    <p>Original message: "{{message}}"</p>
    <p>Computed reversed message: "{{reversedMessage}}"</p>姓：
    <input type="text" placeholder="First Name" v-model="firstName" />
    <br />名：
    <input type="text" placeholder="Last Name" v-model="lastName" />
    <br />姓名1（单向）：
    <input type="text" placeholder="Full Name1" v-model="fullName1" />
    <br />姓名2（单向）：
    <input type="text" placeholder="Full Name2" v-model="fullName2" />
    <br />姓名3（双向）：
    <input type="text" placeholder="Full Name3" v-model="fullName3" />
    <br />
    checked: {{ checked }}
    <my-checkbox v-model="checked"></my-checkbox>
    name: {{ name }}
    <sync :name.sync="name"></sync>
  </div>
</template>

<script>
import MyCheckbox from "./checkbox";
import Sync from "./sync";
export default {
  components: { MyCheckbox, Sync },
  data() {
    return {
      name: '',
      checked: false,
      message: "Hello",
      firstName: "",
      lastName: "w",
      fullName2: ""
      //fullName3: ''
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    fullName1: function() {
      return this.getFullName();
    },
    fullName3: {
      get() {
        return this.getFullName();
      },
      set(value) {
        var names = value.split(" ");
        this.firstName = names[0];
        this.lastName = names.length > 1 ? names[1] : "";
      }
    }
  },
  methods: {
    test(e) {
      console.log(e);
    },
    getFullName() {
      if (this.firstName && this.lastName) {
        return [this.firstName, this.lastName].join(" ");
      }
      if (this.firstName) return this.firstName;
      if (this.lastName) return this.lastName;
    }
  },
  watch: {
    firstName: function(val) {
      if (val && this.lastName) {
        return (this.fullName2 = [val, this.lastName].join(" "));
      }
      if (val) return (this.fullName2 = val);
      if (this.lastName) return (this.fullName2 = this.lastName);
      this.fullName2 = "";
    },
    lastName: function(val) {
      if (this.firstName && val) {
        return (this.fullName2 = [this.firstName, val].join(" "));
      }
      if (val) return (this.fullName2 = val);
      if (this.firstName) return (this.fullName2 = this.firstName);
      this.fullName2 = "";
    }
  }
};
</script>

<style>
</style>