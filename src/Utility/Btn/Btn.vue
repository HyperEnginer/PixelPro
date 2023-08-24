<template>
  <button @click.prevent="$emit('event')" class="bg-main-blue px-5 py-3 text-main-light font-medium shadow-btnShadow" >{{ text }}</button>
</template>

<script setup>
const { text } = defineProps(['text'])

</script>

<style lang="scss" scoped>

</style>