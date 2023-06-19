<template>
  <q-page class="flex flex-center">
    <counter-store></counter-store>
    <counter-vueuse></counter-vueuse>
  </q-page>
</template>

<style></style>

<script lang="ts">
import { defineComponent } from "vue";
import CounterStore from "./CounterStore.vue";
import CounterVueuse from "./CounterVueuse.vue";

export default defineComponent({
  name: "HelloWorld",
  components: { CounterStore, CounterVueuse },
});
</script>
