<template>
  <div class="footer">
    <div class="footer_message">
      made with kohei
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
.footer {
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  width: 100%;

  &_message {
    color: gray;
    font-size: 0.5rem;
    line-height: 1rem;
  }
}
</style>
