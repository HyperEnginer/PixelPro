<template>
  <div class="flex items-center justify-center mt-10 relative">
    <img class="absolute left-0 top-0" :src="Vector" alt="">
    <div class="flex flex-col gap-6">
      <h1 class="text-5xl font-medium text-main-gray inline-28">Your <span class="font-bold text-main-blue">company will rise</span>  like a rocket</h1>
      <p class="text-main-gray inline-28">Lorem ipsum dolor sit amet consectetur. Tempus tristique phasellus fringilla nulla est facilisis. In quis eleifend habitant neque nisl nulla sem turpis molestie. Nunc a eleifend suspendisse in velit. Vitae aliquet sit quam facilisis. Adipiscing eu ullamcorper sit pulvinar pellentesque.</p>
      <Btn @event="callBack" text="I want the company to rise!" class="self-start" />
    </div>
    <img :src="Rocket" alt="">
  </div>
</template>

<script setup>
// Logo/Icon
import Rocket from "../../assets/images/illustrations/rocket.png"
import Vector from "../../assets/images/illustrations/lines/Vector4.png"

// Btn
import Btn from "../../Utility/Btn/Btn.vue";
///////////////////

function callBack() {
  console.log(1)
}
</script>

<style lang="scss" scoped>

</style>