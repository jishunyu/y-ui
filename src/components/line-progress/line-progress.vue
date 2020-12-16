<template>
  <div :style="[proStyle]" class="Y-pro">
    <span class="Y-text">{{
      flag ? progress + "%" : (progress / width) * 100 + "%"
    }}</span>
    <div class="Y-progress" :style="[gressStyle]"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from "vue";
export default defineComponent({
  name: "y-line-progress",
  props: {
    width: {
      type: String as PropType<string>,
      default: "100",
    },
    height: {
      type: Number as PropType<number>,
      default: 15,
    },
    bgColor: {
      type: String as PropType<string>,
      default: "#000000",
    },
    progress: {
      type: String as PropType<string>,
      default: "50",
    },
    fontSize: {
      type: String as PropType<string>,
      default: "10px",
    },
    proBgColor: {
      type: String as PropType<string>,
      default: "red",
    },
  },
  setup(props) {
    const { width, height, bgColor, fontSize, progress, proBgColor } = props;
    let flag = width[width.length - 1] === "%";
    let proStyle = computed(() => {
      return {
        width: flag ? width : width + "px",
        height: height + "px",
        "background-color": bgColor,
        "border-radius": height / 2 + "px",
        "font-size": fontSize,
      };
    });
    let gressStyle = computed(() => {
      let c = parseInt(progress),
        w = parseInt(width);
      return flag ? { width: c + "%" } : { width: (c / w) * w + "px" };
    });
    return {
      flag,
      proStyle,
      gressStyle,
    };
  },
});
</script>

<style lang="scss" scoped>
.#{$class-prefix} {
  &pro {
    background: #000;
    text-align: center;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
  }
  &progress {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: red;
  }
  &text {
    position: relative;
    z-index: 1;
  }
}
</style>
