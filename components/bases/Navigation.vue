<template>
  <nav class="navigation">
    <div>
      <NuxtLink to="/">
        <BasesIconsHome />
      </NuxtLink>
    </div>
    <ul class="navigation__ul">
      <li class="navigation__li">
        <a href="https://github.com/onishi-kohei"><BasesIconsGithub /></a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.navigation {
  width : 100%;
  max-width: 1024px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 24px;

  &__ul {
      display: flex;
      list-style-type: none;

  }

  &__li {
    margin: 0 8px;

  }
}
</style>
