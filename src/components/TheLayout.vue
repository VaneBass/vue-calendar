<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style scoped>
.container {
  width: 100vw;
  height: 100vh;
  padding: 2rem;
  border: 1px solid red;

  display: flex;
  justify-content: center;
}
</style>
