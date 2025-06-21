<template>
  <div>
    <nav class="navbar">
      <h1>Qahwa</h1>
    </nav>

    <div class="contenedor">
      <h2>Formulario de contacto</h2>
      <form @submit.prevent="enviarFormulario">
        <div>
          <label for="nombre">Nombre:</label>
          <input id="nombre" v-model="nombre" type="text" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input id="email" v-model="email" type="email" required />
        </div>
        <div>
          <label for="mensaje">Mensaje:</label>
          <textarea id="mensaje" v-model="mensaje" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const nombre = ref('')
const email = ref('')
const mensaje = ref('')
const router = useRouter()

function enviarFormulario() {
  router.push(`/bienvenida/${encodeURIComponent(nombre.value)}`)
}
</script>

<style scoped>
/* Navbar */
.navbar {
  width: 100%;
  background-color: #2c3e50;
  color: white;
  padding: 10px 0;
  text-align: center;
  font-size: 5px;
  font-weight: 100;
  letter-spacing: 1px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}


/* Contenedor del formulario */
.contenedor {
  max-width: 500px;
  margin: 80px auto 0; /* Este margen superior lo baja debajo del navbar */
  padding: 30px;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}


form {
  display: flex;
  flex-direction: column;
}

form > div {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
  display: block;
}

input,
textarea {
  padding: 10px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 12px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #369d75;
}
</style>
