<template>
    <el-container>
      <el-aside width="200px">
        <el-menu>
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-user"></i>vue</template>
            <el-menu-item-group>
              <el-menu-item index="1-1" :class="{on: '/home'===$route.path}" @click="goTo('/home')">介绍</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>vue实例</template>
            <el-menu-item-group>
              <el-menu-item index="2-1" :class="{on: '/create'===$route.path}" @click="goTo('/create')">创建一个vue实例</el-menu-item>
              <el-menu-item index="2-2" :class="{on: 'data-method'===$route.path}" @click="goTo('/data-method')">数据与方法</el-menu-item>
              <el-menu-item index="2-3">实例生命周期钩子</el-menu-item>
              <el-menu-item index="2-4">生命周期图示</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>模板语法</template>
            <el-menu-item-group>
              <el-menu-item index="3-1">插值</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
</template>

<script>
// hh
// import HelloWorld from './components/HelloWorld.vue'
import Instance from './pages/instance'
import Computed from './pages/computed'

export default {
  components: {
    // HelloWorld
    Instance,
    Computed 
  },
  methods:{
    goTo(path){
      this.$router.replace(path)
    }
  }
}
</script>

<style>
.el-aside{
  background-color: #D3DCE6;
  color:#333;
  text-align: center;
  line-height: 200px;
}
.el-main{
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
body > .el-container{
  margin-bottom: 40px;
}
/*.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside{
  line-height: 260px;
}
.el-container:nth-child(7) .el-aside{
  line-height: 320px;
}*/
</style>