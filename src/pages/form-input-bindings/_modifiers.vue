<template>
  <div>
    <h3>修饰符</h3>
    <hr />
    <p>1. .lazy</p>
    <p>
      在默认的情况下，v-model在每次input事件触发后将输入框的值与数据进行同步（除上述输入法组合文字时）。
      你可以添加lazy修饰符，从而转变为使用change事件进行同步。
    </p>
    <span>请输入内容：</span>
    <input type="text" placeholder="按下enter键后进行同步" v-model.lazy="msg" />
    <p>在此处显示：{{msg}}</p>
    <!--按下enter键后进行同步-->
    <p>2. .number</p>
    <p>如果想要自动将用户的输入值转为数值类型，可以给v-model添加number修饰符：</p>
    <span>请输入年龄：</span>
    <input type="number" v-model.number="age" />
    <p>在此处显示：{{age}}</p>
    <p>
      这通常很有用，因为即使在type="number"时，HTML输入元素的值也总会返回字符串。
      如果这个值无法被parseFloat()解析，则会返回原始的值。
    </p>
    <p>3. .trim</p>
    <p>如果要自动过滤用户输入的首尾空白符，可以给v-model添加trim修饰符：</p>
    <span>试一试：</span>
    <input type="text" v-model.trim="msg1" />
    <p>在此处显示：{{msg1}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
      msg1: "",
      age: 0
    };
  }
};
</script>

<style>
</style>