<template>
  <div class="flex justify-between items-center mt-5">
    <img :src="Logo" alt="">
    <div class="flex gap-6 font-kanit font-light text-main-gray">
      <a href="" class="text-xl">About Us</a>
      <a href="" class="text-xl">Services</a>
      <a href="" class="text-xl">Works</a>
      <a href="" class="text-xl">Reviews</a>
      <a href="" class="text-xl">Contacts</a>
      <a href="" class="text-xl">F.A.Q</a>
    </div>
    <div class="flex gap-6">
      <img :src="Dark" alt="">
      <img :src="Flag" alt="">
    </div>
  </div>
</template>

<script setup>
// Icons/Images
import Logo from "../../../assets/images/logo.png"
import Flag from "../../../assets/icons/litvanFlag.svg"
import Dark from "../../../assets/icons/dark.svg"
</script>

<style lang="scss" scoped>

</style>