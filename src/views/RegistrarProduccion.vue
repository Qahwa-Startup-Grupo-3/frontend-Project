<template>
  <!-- NAVBAR -->
  <nav class="navbar">
    <!-- Notificaciones a la IZQUIERDA -->
    <div class="nav-left">
      <!-- Ícono sencillo; cámbialo por un componente o icon-font si quieres -->
      <span class="notif-icon" title="Notificaciones">🔔</span>
    </div>

    <!-- Nombre Qahwa CENTRADO -->
    <div class="nav-center">Qahwa</div>
  </nav>

  <!-- CONTENIDO GENERAL (sidebar + área principal)-->
  <section class="layout">
    <!-- SIDEBAR pegado al lado izquierdo -->
    <aside class="sidebar">
      <input
          type="text"
          placeholder="Buscar…"
          class="search"
      />

      <!-- Navegación principal -->
      <button @click="$router.push('/')">Home</button>
      <button @click="$router.push('/produccion')">Producción</button>
      <button @click="$router.push('/inventario')">Inventario</button>
      <button @click="$router.push('/publicaciones')">Publicaciones</button>
      <button @click="$router.push('/pedidos')">Pedidos</button>
    </aside>

    <!-- ÁREA CENTRAL (lo que vaya mostrando cada sección) -->
    <main class="content">
      <h2>Registrar Producción</h2>
      <hr />
      <p>Aquí puedes registrar una nueva producción de café que estés gestionando actualmente.</p>

      <form class="registro-form" @submit.prevent="registrarProduccion">
        <input v-model="nombre" placeholder="Nombre" required />
        <input v-model="ubicacion" placeholder="Ubicación" required />
        <input v-model="variedad" placeholder="Variedad del café" required />
        <select v-model="etapa" required>
          <option disabled value="">Selecciona etapa</option>
          <option>Floración</option>
          <option>Maduración</option>
          <option>Cosecha</option>
        </select>
        <input type="date" v-model="fecha" required />

        <button type="submit">Registrar</button>
      </form>
    </main>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { crearProduccion } from '../services/api'

const router = useRouter()
const nombre = ref('')
const ubicacion = ref('')
const variedad = ref('')
const etapa = ref('')
const fecha = ref('')

async function registrarProduccion () {
  const usuarioId = localStorage.getItem('usuarioId')
  if (!usuarioId) { alert('Usuario no identificado'); return }

  const nuevaProduccion = {
    usuarioId,
    nombre: nombre.value,
    descripcion:
        `Ubicación: ${ubicacion.value}, Variedad: ${variedad.value}, ` +
        `Etapa: ${etapa.value}, Fecha: ${fecha.value}`
  }

  try {
    await crearProduccion(nuevaProduccion)
    router.push('/produccion')
  } catch (e) {
    console.error(e)
    alert('Error al registrar la producción')
  }
}
</script>

<style scoped>
/* Usa los mismos estilos generales del navbar y sidebar */
.registro-form {
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin-top: 20px;
  gap: 12px;
}
.registro-form input,
.registro-form select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
.registro-form button {
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
}
</style>
