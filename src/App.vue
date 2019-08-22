<template>
    <el-container>
      <el-aside width="220px">
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
              <el-menu-item index="2-3"><router-link to = "/hooks" tag="li" active-class="active">实例生命周期钩子</router-link></el-menu-item>
              <el-menu-item index="2-4">生命周期图示</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-menu"></i>模板语法</template>
            <el-menu-item-group>
              <el-menu-item index="3-1" :class="{on: '/interpolations'===$route.path}" @click="goTo('/interpolations')">插值</el-menu-item>
              <el-menu-item index="3-2" :click="{on: '/directives'===$route.path}" @click="goTo('/directives')">指令</el-menu-item>
              <el-menu-item id="3-3" :class="{on: '/short-hands'===$route.path}" @click="goTo('/short-hands')">缩写</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>计算属性和侦听器</template>
            <el-menu-item-group>
              <el-menu-item index="4-1" :class="{on: '/example'===$route.path}" @click="goTo('/example')">计算属性</el-menu-item>
              <el-menu-item index="4-2">侦听器</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
</template>

<script>
import Instance from './pages/instance'
import Computed from './pages/computed'
import TemplateSyntax from './pages/template-syntax'

export default {
  components: {
    Instance,
    Computed,
    TemplateSyntax 
  },
  methods:{
    goTo(path){
      //this.$router和router使用起来完全一样
      this.$router.replace(path)//调用router.replace()导航后不会留下history记录
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
  /*text-align: center;*/
  /*line-height: 160px;*/
}
body > .el-container{
  height: 600px;
  border: 1px solid #eee;
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