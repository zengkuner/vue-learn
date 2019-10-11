<template>
  <div>
    <input :value="name" @input="$emit('update:name', $event.target.value)"/>
  </div>
</template>
<script>
export default {
  props: ['name']
}
</script>