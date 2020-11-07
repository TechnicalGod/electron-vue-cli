<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <f-sider></f-sider>
    <f-content></f-content>
  </a-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    fContent: () => import("@/components/Content.vue"),
    fSider: () => import("@/components/Sider.vue")
  }
})
export default class Home extends Vue {}
</script>
<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>