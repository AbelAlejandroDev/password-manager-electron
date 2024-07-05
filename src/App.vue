<template>
    <h1>💖 Hello World!</h1>
    <p>Welcome to your Electron application.</p>
    <div v-if="pepe">Hello</div>
  </template>
  
  <script setup>
  const pepe = true
  console.log('👋 This message is being logged by "App.vue", included via Vite');
  </script>