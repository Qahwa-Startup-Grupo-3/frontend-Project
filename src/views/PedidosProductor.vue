// src/views/PedidosProductor.vue
<template>
  <div class="h-screen flex flex-col">
    <!-- Navbar -->
    <nav class="flex justify-between items-center h-16 bg-green-800 text-white px-8">
      <div></div>
      <h1 class="text-2xl font-bold">Qahwa</h1>
      <div>
        <button class="text-white">🔔</button>
      </div>
    </nav>

    <div class="flex flex-1">
      <!-- Sidebar -->
      <aside class="w-1/5 bg-gray-100 p-4 border-r">
        <input type="text" placeholder="Buscar..." class="w-full mb-4 p-2 border rounded" />
        <div class="space-y-2">
          <router-link to="/home" class="block">🏠 Home</router-link>
          <router-link to="/produccion-productor" class="block">🌱 Producción</router-link>
          <router-link to="/inventario-productor" class="block">📦 Inventario</router-link>
          <router-link to="/publicaciones-productor" class="block">📢 Publicaciones</router-link>
          <router-link to="/pedidos-productor" class="block font-bold">🛒 Pedidos</router-link>
        </div>
      </aside>

      <!-- Main Content -->
      <main class="w-4/5 p-6">
        <h2 class="text-3xl font-semibold mb-2">Pedidos</h2>
        <hr class="mb-4" />

        <input type="text" placeholder="Buscar pedido..." class="w-full mb-4 p-2 border rounded" />

        <table class="w-full table-auto border text-left">
          <thead>
          <tr class="bg-gray-200">
            <th class="p-2">ID</th>
            <th class="p-2">Fecha</th>
            <th class="p-2">Cliente</th>
            <th class="p-2">Costo</th>
            <th class="p-2"></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="pedido in pedidos" :key="pedido.id" class="border-t">
            <td class="p-2">{{ pedido.id }}</td>
            <td class="p-2">{{ pedido.fecha }}</td>
            <td class="p-2">{{ pedido.cliente }}</td>
            <td class="p-2">S/ {{ pedido.costo }}</td>
            <td class="p-2">
              <button class="bg-green-500 text-white px-3 py-1 rounded">Ver</button>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="mt-6">
          <router-link to="/agregar-pedido" class="bg-blue-600 text-white px-4 py-2 rounded">Registrar nuevo pedido</router-link>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import api from '../services/api';

export default {
  data() {
    return {
      pedidos: []
    };
  },
  mounted() {
    api.get('/pedidos').then(response => {
      this.pedidos = response.data;
    });
  }
};
</script>

<style scoped>
</style>
