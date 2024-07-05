<template>
    <div class="flex h-screen">
        <!-- Sidebar -->
        <Sidebar/>

        <!-- Content -->
        <div class="w-3/4 p-4">
            <h1 class="text-3xl mb-4">Gestor de contraseñas</h1>
            <form>
                <label for="service" class="block">Servicio:</label>
                <input type="text" name="service" id="service" class="w-full p-2 border rounded mb-2" required />
                <label for="username" class="block">Nombre de usuario:</label>
                <input type="text" name="username" id="username" class="w-full p-2 border rounded mb-2" required />
                <label for="password" class="block">Contraseña:</label>
                <input type="password" name="password" id="password" class="w-full p-2 border rounded mb-4" required />
                <button type="submit" class="bg-[#575366] hover:bg-[#434248] text-white px-4 py-2 rounded">
                    <font-awesome-icon icon="save" class="mr-2" /> Guardar Contraseña
                </button>
            </form>
        </div>
    </div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue"

</script>

<style scoped></style>