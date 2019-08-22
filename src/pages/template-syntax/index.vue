<template>
    <div>
        <interpolations/>
        <directives/>
        <short-hands/>
    </div>
</template>

<script>
import Interpolations from './_interpolations'
import Directives from './_directives'
import ShortHands from './_short-hands'
export default {
    components:{
        Interpolations,
        Directives,
        ShortHands,
    }
}
</script>

<style>

</style>