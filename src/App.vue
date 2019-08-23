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
              <el-menu-item index="3-2" :class="{on: '/directives'===$route.path}" @click="goTo('/directives')">指令</el-menu-item>
              <el-menu-item index="3-3" :class="{on: '/short-hands'===$route.path}" @click="goTo('/short-hands')">缩写</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title"><i class="el-icon-menu"></i>计算属性和侦听器</template>
            <el-menu-item-group>
              <el-menu-item index="4-1" :class="{on: '/example'===$route.path}" @click="goTo('/example')">计算属性</el-menu-item>
              <el-menu-item index="4-2" :class="{on: '/watcher'===$route.path}" @click="goTo('/watcher')">侦听器</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title"><i class="el-icon-menu"></i>Class与Style绑定</template>
            <el-menu-item-group>
              <el-menu-item index="5-1" :class="{on: '/html-classes'===$route.path}" @click="goTo('/html-classes')">绑定HTML Class</el-menu-item>
              <el-menu-item index="5-2" :class="{on: '/inline-styles'===$route.path}" @click="goTo('/inline-styles')">绑定内联样式</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title"><i class="el-icon-menu"></i>条件渲染</template>
            <el-menu-item-group>
              <el-menu-item index="6-1" :class="{on: '/v-if'===$route.path}" @click="goTo('/v-if')">v-if</el-menu-item>
              <el-menu-item index="6-2" :class="{on: '/v-show'===$route.path}" @click="goTo('/v-show')">v-show</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title"><i class="el-icon-menu"></i>列表渲染</template>
            <el-menu-item-group>
              <el-menu-item index="7-1" :class="{on: '/v-for'===$route.path}" @click="goTo('/v-for')">v-for</el-menu-item>
              <el-menu-item index="7-2" :class="{on: '/list-sort'===$route.path}" @click="goTo('/list-sort')">列表搜索和排序</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title"><i class="el-icon-menu"></i>事件处理</template>
            <el-menu-item-group>
              <el-menu-item index="8-1" :class="{on: '/listen-events'===$route.path}" @click="goTo('/listen-events')">绑定事件监听</el-menu-item>
              <el-menu-item index="8-2" :class="{on: '/event-modifiers'===$route.path}" @click="goTo('/event-modifiers')">事件修饰符</el-menu-item>
              <el-menu-item index="8-3"><router-link to="/key-modifiers" tag="li" active-class="active">按键修饰符</router-link></el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="9">
            <template slot="title"><i class="el-icon-menu"></i>表单输入绑定</template>
            <el-menu-item-group>
              <el-menu-item index="9-1" :class="{on: '/basic-usage'===$route.path}" @click="goTo('/basic-usage')">基础用法</el-menu-item>
              <el-menu-item index="9-2"><router-link to="/modifiers" tag="li" active-class="active">修饰符</router-link></el-menu-item>
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
/*
import Instance from './pages/instance'
import Computed from './pages/computed'
import TemplateSyntax from './pages/template-syntax'*/

export default {
  /*
  components: {
    Instance,
    Computed,
    TemplateSyntax 
  },*/
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