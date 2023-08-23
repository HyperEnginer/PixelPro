<template>
  <div class="grid grid-rows-[auto_1fr] grid-cols-1 h-screen w-screen">
    <Header />
    <div class="flex flex-col items-center justify-center gap-6 relative">
      <div class="flex flex-col items-center gap-3">
        <h1 class="text-6xl font-medium text-main-gray inline-48 text-center">
          Just
          <span class="text-main-blue font-semibold"
            >a nice design for your company</span
          >
          and that's it
        </h1>
        <p class="text-main-gray font-semibold text-xl">
          PixelPro - every pixel professionally!
        </p>
      </div>

      <div class="flex flex-col items-center gap-4">
        <p class="font-medium text-md">Beautiful designs already exist:</p>
        <div class="flex gap-6">
          <div class="flex flex-col items-center gap-1" v-for="obj in data">
            <div
              class="w-9 h-9 flex items-center justify-center bg-main-blue text-main-light font-medium font-kanit text-2xl"
            >
              {{ obj.num }}
            </div>
            <span class="font-medium text-md">{{ obj.name }}</span>
          </div>
        </div>
      </div>
      <div class="absolute h-1 bg-main-blue w-3/5 bottom-8">

      </div>
    </div>
  </div>
</template>

<script setup>
// Components
import Header from "./Header/Header.vue";

// Data
const data = [
  {
    num: 2,
    name: "Year",
  },
  {
    num: 6,
    name: "Months",
  },
  {
    num: 27,
    name: "Days",
  },
  {
    num: 34,
    name: "Minutes",
  },
  {
    num: 12,
    name: "Seconds",
  },
];
</script>

<style lang="scss" scoped></style>
