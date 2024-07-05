<template>
    <form @submit.prevent="storePassword">
      <label for="service" class="block">Servicio:</label>
      <input type="text" name="service" id="service" v-model="service" class="w-full p-2 border rounded mb-2" required />
      <label for="username" class="block">Nombre de usuario:</label>
      <input type="text" name="username" id="username" v-model="username" class="w-full p-2 border rounded mb-2" required />
      <label for="password" class="block">Contraseña:</label>
      <input type="password" name="password" id="password" v-model="password" class="w-full p-2 border rounded mb-4" required />
      <button type="submit" class="bg-[#575366] hover:bg-[#434248] text-white px-4 py-2 rounded">
        <i class="fas fa-save mr-2"></i>Guardar Contraseña
      </button>
    </form>
  </template>
  
  <script>
  export default {
    name: 'PasswordForm',
    data() {
      return {
        service: '',
        username: '',
        password: '',
      };
    },
    methods: {
      storePassword() {
        // Logic to store the password
      },
    },
  };
  </script>
  