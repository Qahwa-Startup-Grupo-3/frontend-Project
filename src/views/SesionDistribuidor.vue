<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { loginUsuario } from '../services/api'

const email = ref('')
const password = ref('')
const router = useRouter()

async function ingresar () {
  try {
    const user = await loginUsuario({ email: email.value, password: password.value, tipo: 'distribuidor' })
    localStorage.setItem('usuarioId', user.id)           // ← AQUÍ
    router.push('/produccion')
  } catch (e) {
    alert('Correo o contraseña incorrectos')
  }
}
</script>

<template>
  <div class="formulario">
    <h2>Distribuidor, inicia sesión en tu cuenta</h2>
    <hr />
    <label>Correo electrónico:</label>
    <input type="email" v-model="email" />
    <label>Contraseña:</label>
    <input type="password" v-model="password" />
    <div><input type="checkbox" /> Recordarme</div>
    <button @click="ingresar">Ingresar</button>
  </div>
</template>
