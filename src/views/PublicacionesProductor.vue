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
        <h2>Mis Publicaciones</h2>
        <hr />
        <div class="toolbar">
          <input type="text" v-model="busqueda" placeholder="Buscar publicación..." class="buscar-pub" />
          <button class="filtro-btn">Filtro</button>
        </div>

        <div class="publicaciones-grid">
          <div
              v-for="(pub, index) in publicacionesFiltradas"
              :key="index"
              class="publicacion-card"
          >
            <h3>{{ pub.titulo }}</h3>
            <p class="fecha">{{ pub.fecha }}</p>
          </div>
        </div>

        <div class="add-btn-container">
          <button class="add-btn" @click="$router.push('/agregar-publicacion')">➕</button>
        </div>
      </main>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref, computed } from 'vue'
import { obtenerPublicaciones } from '../services/api'

const publicaciones = ref([])
const busqueda = ref('')
const usuarioId = localStorage.getItem('usuarioId')

onMounted(async () => {
  if (usuarioId) {
    publicaciones.value = await obtenerPublicaciones(usuarioId)
  }
})

const publicacionesFiltradas = computed(() => {
  if (!busqueda.value) return publicaciones.value
  return publicaciones.value.filter((pub) =>
      pub.titulo.toLowerCase().includes(busqueda.value.toLowerCase())
  )
})
</script>

<style scoped>
.layout {
  display: flex;
}
.sidebar {
  width: 20%;
  padding: 1rem;
  border-right: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.content {
  width: 80%;
  padding: 1rem;
}
.publicaciones-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
}
.publicacion-card {
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 6px;
  background: #f9f9f9;
}
.fecha {
  font-size: 0.8rem;
  color: #666;
}
.toolbar {
  display: flex;
  gap: 10px;
  margin: 20px 0;
}
.buscar-pub {
  flex: 1;
  padding: 8px;
}
.add-btn-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
.add-btn {
  font-size: 1.5rem;
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 12px 16px;
  border-radius: 50%;
  cursor: pointer;
}
</style>
