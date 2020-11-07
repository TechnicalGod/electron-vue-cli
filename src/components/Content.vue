<template>
  <a-layout>
    <f-header></f-header>
    <a-layout-content style="margin: 16px">
      <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
        Bill is a cat.
      </div>
    </a-layout-content>
    <f-footer></f-footer>
  </a-layout>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    fHeader: () => import("@/components/Header.vue"),
    fFooter: () => import("@/components/Footer.vue")
  }
})
export default class Content extends Vue {}
</script>