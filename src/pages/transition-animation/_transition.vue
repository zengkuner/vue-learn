<template>
    <div>
        <h3>进入/离开&列表过渡</h3><hr>
        <p>1. 单元素/组件的过渡</p>
        <p>Vue提供了transition的封装组件，在下列情形中，可以给任何元素和组件添加进入/离开过渡。</p>
        <ul>
            <li>条件渲染（使用v-if）</li>
            <li>条件展示（使用v-show）</li>
            <li>动态组件</li>
            <li>组件根节点</li>
        </ul>
        <p>示例：</p>
        <div>
            <button @click="show=!show">触发</button>
            <transition name="fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
        <p>当插入和删除包含在transition组件中的元素时，vue将会做以下处理：</p>
        <ul>
            <li>自动嗅探目标元素是否应用了CSS过渡或动画，如果是，在恰当的时机添加/删除CSS类名。</li>
            <li>如果过渡组件提供了JavaScript钩子函数，这些钩子函数将在恰当的时机被调用。</li>
            <li>如果没有找到JavaScript钩子并且也没有检测到CSS过渡/动画，DOM操作（插入/删除）在下一帧中立即
                执行。（注意：此指浏览器逐帧动画机制，和vue的nextTick概念不同）
            </li>
        </ul>
        <p>2. 过渡的类名</p>
        <p>在进入/离开的过渡过程中，会有6个class切换。</p>
        <ul>
            <li>v-enter： 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。</li>
            <li>v-enter-active： 定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，
                在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
            </li>
            <li>v-enter-to： 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效（与此同时v-enter被移除），
                在过渡/动画完成之后移除。
            </li>
            <li>v-leave： 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。</li>
            <li>v-leave-active： 定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时
                立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
            </li>
            <li>v-leave-to： 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效（与此同时
                v-leave被删除），在过渡/动画完成之后移除。</li>
        </ul>
        <p>CSS过渡</p>
        <p>常用的过渡都是使用CSS过渡。示例：</p>
        <div>
            <button @click="show=!show">触发渲染</button>
            <transition name="slide-fade">
                <p v-if="show">hello</p>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            show: true
        }
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active{
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to{
        opacity: 0;
    }
</style>