<template>
  <div class="flex flex-col gap-96">
    <div class="flex items-center justify-center pt-10 relative">
      <img class="absolute left-0 top-0" :src="Vector1" alt="" />
      <div class="flex flex-col gap-6">
        <h1 class="text-5xl font-medium text-main-gray inline-28">
          Your
          <span class="font-bold text-main-blue">company will rise</span> like a
          rocket
        </h1>
        <p class="text-main-gray inline-28">
          Lorem ipsum dolor sit amet consectetur. Tempus tristique phasellus
          fringilla nulla est facilisis. In quis eleifend habitant neque nisl
          nulla sem turpis molestie. Nunc a eleifend suspendisse in velit. Vitae
          aliquet sit quam facilisis. Adipiscing eu ullamcorper sit pulvinar
          pellentesque.
        </p>
        <Btn
          @event="callBack"
          text="I want the company to rise!"
          class="self-start"
        />
      </div>
      <img :src="Rocket" alt="" />
    </div>
    <div class="relative bg-main-blue h-96 w-full">
      <img :src="Vector3" alt="" class="absolute -top-96 right-0" />
      <img
        :src="Vector2"
        alt=""
        class="absolute -top-52 left-1/2 -translate-x-2/3"
      />
      <img id="Rbtn" :src="RightChevron" alt="" class="absolute top-1/2 -translate-y-1/2 right-8 cursor-pointer z-10">
      <img id="Lbtn" :src="LeftChevron" alt="" class="absolute top-1/2 -translate-y-1/2 left-8 cursor-pointer z-10">

      <div
        class="slide flex justify-center items-center gap-20 p-16 absolute h-full w-full duration-300"
        v-for="obj in data"
      >
        <img :src="obj.img" alt="" class="justify-self-center" />
        <div class="flex flex-col gap-4 text-main-light">
          <h1 class="text-4xl font-semibold">{{ obj.title }}</h1>
          <p class="inline-24 text-base font-light">
            {{ obj.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Hooks
import { createHydrationRenderer, onMounted } from "vue";

//// Logo/Icon
import Rocket from "../../assets/images/illustrations/rocket.png";

// Lines
import Vector3 from "../../assets/images/illustrations/lines/Vector1.png";
import Vector2 from "../../assets/images/illustrations/lines/Vector3.png";
import Vector1 from "../../assets/images/illustrations/lines/Vector4.png";

// Chevrons
import LeftChevron from "../../assets/icons/left-chevron.svg";
import RightChevron from "../../assets/icons/right-chevron.svg";



// Illustrations
import Laptop from "../../assets/images/illustrations/laptop.png";
import Design from "../../assets/images/illustrations/design.png";
import Shapes from "../../assets/images/illustrations/shapes.png";


// Btn
import Btn from "../../Utility/Btn/Btn.vue";
///////////////////

function callBack() {
  // Event
}

// Data
const data = [
  {
    img: Shapes,
    title: "Graphic Design",
    text: "lorem ipsum dolor sit amet alirim seni goruturm denizlere vay dayim vay hay knk la lol girekm mi olm",
  },
  {
    img: Laptop,
    title: "Website development",
    text: "lorem ipsum dolor sit amet alirim seni goruturm denizlere vay dayim vay hay knk la lol girekm mi olm",
  },
  {
    img: Design,
    title: "Logo Design",
    text: "lorem ipsum dolor sit amet alirim seni goruturm denizlere vay dayim vay hay knk la lol girekm mi olm",
  },
];

// Slide Functions
onMounted(() => {
  const slides = Array.from(document.querySelectorAll('.slide'))
  const rightBtn = document.getElementById('Rbtn')
  const leftBtn = document.getElementById('Lbtn')
  let currentSlider = 0;

  const goToSlide = function (slide) {
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${100 * (i  - slide)}%)`;
    });
  };
  goToSlide(0);

  rightBtn.addEventListener('click', (e) => {
    console.log(currentSlider);
    if(currentSlider === 2) {
      currentSlider = 0
    } else currentSlider++;
    goToSlide(currentSlider)
  })

  leftBtn.addEventListener('click', (e) => {
    console.log(currentSlider);
    if(currentSlider === 0) return
    currentSlider--;
    goToSlide(currentSlider)
  })
});
</script>

<style lang="scss" scoped></style>
