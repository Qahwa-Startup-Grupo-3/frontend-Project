<template>
  <div>
    <Navbar />
    <div class="form-container">
      <div class="form-box">
        <h2 class="center-text">Distribuidor</h2>
        <h3 class="center-text">Crea tu cuenta</h3>
        <hr />

        <label for="name">Nombre completo:</label>
        <input type="text" id="name" placeholder="Ingresa tu nombre completo" v-model="name" />

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" placeholder="Ingresa tu correo electrónico" v-model="email" />

        <label for="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" v-model="password" />

        <label for="confirm-password">Confirmar contraseña:</label>
        <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" v-model="confirmPassword" />

        <button @click="register">Registrar</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import { registrarUsuario } from '../services/api'

const router = useRouter()

// Datos del formulario
const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Las contraseñas no coinciden')
    return
  }

  try {
    await registrarUsuario({
      nombre: name.value,
      email: email.value,
      password: password.value,
      tipo: 'distribuidor'
    })
    router.push('/validacion-registro')
  } catch (error) {
    console.error('Error al registrar:', error)
    alert('Error al registrar usuario')
  }
}
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>

