<template>
  <div>
    <input type="checkbox" :checked="checked" @change="$emit('input', $event.target.checked)"/>
  </div>
</template>
<script>
export default {
  name: 'my-checkbox',
  model: {
    prop: 'checked',
    // event: 'change'
  },
  props: ['checked']
}
</script>