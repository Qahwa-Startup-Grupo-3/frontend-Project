
<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { obtenerInventarioProductor } from '../services/api'

const router = useRouter()
const inventario = ref([])
const busqueda = ref('')

const cargarInventario = async () => {
  const usuarioId = localStorage.getItem('usuarioId')
  inventario.value = await obtenerInventarioProductor(usuarioId)
}

const irADetalles = (id) => {
  router.push(`/producto/${id}`)
}

const irAgregar = () => {
  router.push('/agregar-inventario')
}

onMounted(cargarInventario)
</script>

<template>
  <div class="pantalla">
    <!-- Navbar superior -->
    <header class="navbar">
      <div class="titulo">Qahwa</div>
      <div class="notificaciones">🔔</div>
    </header>

    <div class="cuerpo">
      <!-- Barra de navegación lateral -->
      <aside class="barra-lateral">
        <input type="text" placeholder="Buscar..." class="busqueda" />
        <button @click="router.push('/')">🏠 Home</button>
        <button @click="router.push('/produccion')">📦 Producción</button>
        <button @click="router.push('/inventario')">📋 Inventario</button>
        <button @click="router.push('/publicaciones-productor')">📝 Publicaciones</button>
        <button @click="router.push('/pedidos')">📬 Pedidos</button>
      </aside>

      <!-- Contenido principal -->
      <main class="contenido">
        <h1>Inventario</h1>
        <hr />
        <input v-model="busqueda" placeholder="Buscar o filtrar..." class="filtro" />

        <!-- Tabla de inventario -->
        <table class="tabla">
          <thead>
          <tr>
            <th>Producto</th>
            <th>Fecha</th>
            <th>Estado</th>
            <th>Cantidad</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="producto in inventario" :key="producto.id">
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.fecha }}</td>
            <td>{{ producto.estado }}</td>
            <td>{{ producto.cantidad }}</td>
            <td>
              <button @click="irADetalles(producto.id)" class="btn-ver">Ver</button>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="agregar">
          <button @click="irAgregar">Agregar nuevo</button>
        </div>
      </main>
    </div>
  </div>
</template>

<style scoped>
.pantalla {
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #fafafa;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}

.cuerpo {
  display: flex;
  flex: 1;
}

.barra-lateral {
  width: 220px;
  background: #34495e;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
}

.barra-lateral input {
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
}

.barra-lateral button {
  background: none;
  color: white;
  border: none;
  text-align: left;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}

.barra-lateral button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.contenido {
  flex: 1;
  padding: 2rem;
  background: white;
}

.filtro {
  width: 100%;
  padding: 0.6rem;
  margin: 1rem 0;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.tabla {
  width: 100%;
  border-collapse: collapse;
  background: #fff;
}

.tabla th {
  background-color: #2c3e50;
  color: white;
  padding: 0.7rem;
}

.tabla td {
  border: 1px solid #ccc;
  padding: 0.7rem;
  text-align: center;
}

.btn-ver {
  background-color: #27ae60;
  color: white;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-ver:hover {
  background-color: #219150;
}

.agregar {
  margin-top: 2rem;
  text-align: center;
}

.agregar button {
  padding: 0.7rem 1.5rem;
  background-color: #2980b9;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
}

.agregar button:hover {
  background-color: #1f6391;
}

</style>
