<template>
    <div>
        <!--<home></home>-->
        <br>
        <create></create>
        <br>
        <data-method></data-method>
        <br>
        <hooks/>
    </div>
</template>
<script>
import Create from './_create'
import DataMethod from './_data-method'
import Home from './_home'
import Hooks from './_hooks'

export default {
    components: {
        Create,
        DataMethod,
        Home,
        Hooks
    }
}
</script>