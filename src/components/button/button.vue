<template>
    <button :class="[`Y-btn Y-btn-${type}`]">
      <div class="click-loader" v-show="loading"></div>
      <span>{{text}}</span>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
interface Data {
    [key: string]: unknown;
}
interface Slots {
    [key: string]: unknown;
}
interface SetupContext {
    attrs: Data;
    slots: Slots;
    emit: (event: string, ...args: unknown[]) => void;
}
export default defineComponent({
  name: 'Y-Button',
  props: {
    text: String,
    type: String,
    loading: Boolean
  },
  setup(props, ctx:SetupContext){
    return {
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$btn-class-prefix: "btn"; 
.#{$class-prefix}#{$btn-class-prefix} { 
  &{
    padding: 12px 20px;
    font-size: 14px;
    line-height: 1;
    position: relative;
    display: flex;
    align-items: center;
  }
  &-primary {
    background: #409eff;
  }
  &-success {
    background: #67c23a;
  }
  &-info{
    background: #909399;
  }
}
.click-loader{
		display: inline-flex;
    margin-right: 5px;
		vertical-align: middle;
		width: 8px;
		height: 8px;
		background: 0 0;
		border-radius: 50%;
		border: 2px solid;
		border-color: #e5e5e5 #e5e5e5 #e5e5e5 #8f8d8e;
		animation: u-circle 1s linear infinite;
}
@keyframes u-circle {
		0% {
			transform: rotate(0);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
