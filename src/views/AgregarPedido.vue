<template>
  <div class="p-6">
    <h2 class="text-2xl font-bold mb-4">Registrar nuevo pedido</h2>

    <form @submit.prevent="guardarPedido" class="space-y-4">
      <div>
        <label class="block">Cliente</label>
        <input v-model="cliente" type="text" class="border p-2 w-full rounded" required />
      </div>

      <div>
        <label class="block">Costo</label>
        <input v-model.number="costo" type="number" class="border p-2 w-full rounded" required />
      </div>

      <button type="submit" class="bg-green-600 text-white px-4 py-2 rounded">
        Guardar pedido
      </button>
    </form>
  </div>
</template>

<script>
import api from '../services/api';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      cliente: '',
      costo: 0
    };
  },
  setup() {
    const router = useRouter();
    return { router };
  },
  methods: {
    async guardarPedido() {
      try {
        const nuevoPedido = {
          cliente: this.cliente,
          costo: this.costo,
          fecha: new Date().toISOString().split('T')[0]
        };

        await api.post('/pedidos', nuevoPedido);
        this.router.push('/pedidos-productor'); // Redirige a la lista
      } catch (error) {
        console.error('Error al guardar el pedido:', error);
      }
    }
  }
};
</script>
