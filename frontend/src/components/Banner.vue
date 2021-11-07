<template>
  <div class="row mt-4">
    <div class="col-12 col-md-8 mx-auto">
      <h1 class="text-center mb-3">
        Boost your <span class="typed-text">{{ typeValue }}</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "banner",
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "cardiovascular system",
        "metabolism",
        "mood",
        "attention",
        "immune system",
        "tolerance to the cold",
      ],
      typingSpeed: 100,
      erasingSpeed: 50,
      newTextDelay: 1000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;
        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Contrail+One&display=swap");
h1 {
  font-size: 2em;
  color: black;
  font-family: "Contrail One", cursive;
}
span.typed-text {
  color: black;
}
span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: black;
  animation: cursorBlink 1s infinite;
}
span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
