<template>
    <div>
        <create></create>
        <data-method></data-method>
        <home></home>
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