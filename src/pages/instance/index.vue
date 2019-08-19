<template>
    <div>
        <create></create>
        <data-method></data-method>
        <home></home>
    </div>
</template>
<script>
import Create from './_create'
import DataMethod from './_data-method'
import Home from './_home'

export default {
    components: {
        Create,
        DataMethod,
        Home
    }
}
</script>