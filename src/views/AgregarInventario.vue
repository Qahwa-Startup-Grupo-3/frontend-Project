<template>
  <div>
    <nav class="navbar">
      <div class="nav-left">🔔</div>
      <div class="nav-center">Qahwa</div>
    </nav>

    <section class="layout">
      <aside class="sidebar">
        <input type="text" placeholder="Buscar…" class="search" />
        <button @click="$router.push('/')">Home</button>
        <button @click="$router.push('/produccion')">Producción</button>
        <button @click="$router.push('/inventario')">Inventario</button>
        <button @click="$router.push('/publicaciones')">Publicaciones</button>
        <button @click="$router.push('/pedidos')">Pedidos</button>
      </aside>

      <main class="content">
        <h2>Agregar nuevo producto al inventario:</h2>
        <hr />

        <form @submit.prevent="guardarInventario">
          <div>
            <label>Producto:</label>
            <input v-model="producto" required />
          </div>

          <div>
            <label>Fecha:</label>
            <input type="date" v-model="fecha" required />
          </div>

          <div>
            <label>Estado:</label>
            <select v-model="estado" required>
              <option value="Buen Estado">Buen Estado</option>
              <option value="Regular Estado">Regular Estado</option>
              <option value="Mal Estado">Mal Estado</option>
            </select>
          </div>

          <div>
            <label>Cantidad:</label>
            <input type="number" v-model="cantidad" required />
          </div>

          <button type="submit">Guardar</button>
        </form>
      </main>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { registrarInventario } from '../services/api'
import { useRouter } from 'vue-router'

const producto = ref('')
const fecha = ref('')
const estado = ref('Buen Estado')
const cantidad = ref(0)
const router = useRouter()

const guardarInventario = async () => {
  const usuarioId = localStorage.getItem('usuarioId')

  if (!usuarioId) {
    alert('Usuario no identificado')
    return
  }

  const nuevoProducto = {
    usuarioId: Number(usuarioId),
    producto: producto.value,
    fecha: fecha.value,
    estado: estado.value,
    cantidad: Number(cantidad.value)
  }

  try {
    await registrarInventario(nuevoProducto)
    alert('Producto agregado correctamente')
    router.push('/inventario') // redirige a la pantalla de inventario
  } catch (error) {
    console.error(error)
    alert('Error al guardar el producto')
  }
}
</script>
