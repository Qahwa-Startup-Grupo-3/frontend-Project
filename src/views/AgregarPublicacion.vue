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
        <h2>Agregar publicación</h2>
        <hr />

        <form class="formulario" @submit.prevent="guardarPublicacion">
          <label>Título</label>
          <input type="text" v-model="titulo" required />

          <label>Datos generales</label>
          <textarea v-model="datos" required />

          <label>Privacidad</label>
          <select v-model="privacidad" required>
            <option value="publica">Pública</option>
            <option value="privada">Privada</option>
          </select>

          <label>Imagen (opcional)</label>
          <input type="file" @change="manejarImagen" />

          <button type="submit">Guardar</button>
        </form>
      </main>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { guardarPublicacion } from '../services/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const titulo = ref('')
const datos = ref('')
const privacidad = ref('publica')
const imagen = ref(null)

const manejarImagen = (e) => {
  imagen.value = e.target.files[0]
}

const guardar = async () => {
  const usuarioId = localStorage.getItem('usuarioId')
  const nueva = {
    usuarioId,
    titulo: titulo.value,
    datos: datos.value,
    privacidad: privacidad.value,
    fecha: new Date().toISOString().split('T')[0],
    imagen: imagen.value?.name || null
  }
  await guardarPublicacion(nueva)
  router.push('/publicaciones')
}
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
.formulario {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f2f2f2;
  padding: 1.5rem;
  border-radius: 8px;
}
input, textarea, select {
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}
button {
  background-color: #2196f3;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
