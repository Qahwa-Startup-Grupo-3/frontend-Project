<template>
  <div class="app-layout">
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
        <h2>Producción</h2>
        <hr />
        <p>Aquí puedes visualizar de forma general las producciones de café que actualmente gestionas.</p>

        <div class="toolbar">
          <input type="text" placeholder="Buscar producción..." class="buscar-prod" />
          <button class="filtro-btn">Filtro</button>
        </div>

        <div class="producciones-list">
          <div
              v-for="(produccion, index) in producciones"
              :key="index"
              class="produccion-item"
          >
            <div>
              <h4>{{ produccion.nombre }}</h4>
              <p>{{ produccion.descripcion }}</p>
            </div>
            <button class="detalles-btn">Detalles</button>
          </div>
        </div>

        <button class="registrar-btn" @click="$router.push('/registrar-produccion')">
          Registrar nueva producción
        </button>
      </main>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { obtenerProducciones } from '../services/api'

const producciones = ref([])

onMounted(async () => {
  const usuarioId = localStorage.getItem('usuarioId')
  if (!usuarioId) return

  try {
    producciones.value = await obtenerProducciones(usuarioId)
  } catch (e) {
    console.error(e)
  }
})
</script>

<style scoped>
.app-layout {
  font-family: 'Segoe UI', sans-serif;
  background-color: #fafafa;
  min-height: 100vh;
}

.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #2e7d32;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.layout {
  display: flex;
}

.sidebar {
  width: 220px;
  background-color: #ffffff;
  border-right: 1px solid #ddd;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sidebar input {
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.sidebar button {
  padding: 10px;
  background-color: #f0f0f0;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s;
}

.sidebar button:hover {
  background-color: #e0e0e0;
}

.content {
  flex: 1;
  padding: 2rem;
}

.toolbar {
  display: flex;
  gap: 1rem;
  margin: 1.5rem 0;
}

.buscar-prod {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.filtro-btn {
  padding: 10px 14px;
  background-color: #eeeeee;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}

.producciones-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.produccion-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
}

.detalles-btn {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 14px;
  border-radius: 6px;
  cursor: pointer;
}

.registrar-btn {
  margin-top: 2rem;
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
