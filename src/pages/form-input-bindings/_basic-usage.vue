<template>
  <div>
    <h3>基础用法</h3>
    <hr />
    <p>1. 表单数据的自动收集</p>
    <!--
            1. 使用v-model（双向数据绑定）自动收集数据
                text/textarea
                checkbox
                radio
                select
    -->
    <div id="demo">
      <form action="/xxx" @submit.prevent="handleSubmit">
        <span>用户名：</span>
        <input type="text" v-model="username" />
        <br />
        <br />

        <span>密码：</span>
        <input type="password" v-model="pwd" />
        <br />
        <br />

        <span>性别：</span>
        <input type="radio" id="female" value="女" v-model="sex" />
        <label for="female">女</label>
        <input type="radio" id="male" value="男" v-model="sex" />
        <label for="male">男</label>
        <br />
        <br />

        <span>爱好：</span>
        <input type="checkbox" id="basket" value="basket" v-model="hobbies" />
        <label for="basket">篮球</label>
        <input type="checkbox" id="foot" value="foot" v-model="hobbies" />
        <label for="foot">足球</label>
        <input type="checkbox" id="pingpang" value="pingpang" v-model="hobbies" />
        <label for="pingpang">乒乓球</label>
        <br />
        <br />

        <span>城市：</span>
        <select name id v-model="cityId">
          <option value>未选择</option>
          <option :value="city.id" v-for="(city, index) in allCities" :key="index">{{ city.name }}</option>
        </select>
        <br />
        <br />
        <span>介绍：</span>
        <textarea name id cols="30" rows="10" v-model="desc"></textarea>
        <br />
        <br />
        <input type="submit" value="注册" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      pwd: "",
      sex: "",
      hobbies: [],
      allCities: [
        { id: 1, name: "BJ" },
        { id: 2, name: "SH" },
        { id: 3, name: "GD" }
      ],
      cityId: "3",
      desc: ""
    };
  },
  methods: {
    handSubmit() {
      alert(
        this.username,
        this.pwd,
        this.sex,
        this.hobbies,
        this.cityId,
        this.desc
      );
    }
  }
};
</script>

<style>
</style>