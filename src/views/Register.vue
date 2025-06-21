<template>
  <div>
    <Navbar />
    <div class="form-container">
      <div class="form-box">
        <h2>Crea tu cuenta</h2>
        <hr />
        <label for="name">Nombre completo</label>
        <input type="text" id="name" placeholder="Ingresa tu nombre completo" />

        <label for="user-type">¿Qué tipo de usuario eres?</label>
        <button @click="goToProducer">Productor</button>
        <button @click="goToDistributor">Distribuidor</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Navbar from '../components/Navbar.vue'

const router = useRouter()

const goToProducer = () => {
  router.push('/registro-productor')
}

const goToDistributor = () => {
  router.push('/registro-distribuidor')
}
</script>

<style scoped>
/* Los estilos están en el archivo CSS global */
</style>
