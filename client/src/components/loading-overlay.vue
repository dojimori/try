<template>
  <div
    v-if="loading"
    v-motion-fade
    class="absolute z-100 top-0 left-0 w-screen h-screen bg-black/60 flex gap-2 flex-col items-center justify-center"
  >
    <vue-spinner-sync color="white"></vue-spinner-sync>
    <small class="text-white">Please wait...</small>
  </div>
</template>

<script>
import { VueSpinnerSync } from "vue3-spinners";

export default {
  components: {
    VueSpinnerSync,
  },

  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
