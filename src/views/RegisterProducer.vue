<template>
  <div>
    <Navbar />
    <div class="form-container">
      <div class="form-box">
        <h2 class="center-text">Productor</h2>
        <h3 class="center-text">Crea tu cuenta</h3>
        <hr />

        <label for="name">Nombre completo:</label>
        <input type="text" id="name" placeholder="Ingresa tu nombre completo" v-model="name" />

        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" placeholder="Ingresa tu correo electrónico" v-model="email" />

        <label for="production-place">Lugar de producción:</label>
        <input type="text" id="production-place" placeholder="Ingresa el lugar de producción" v-model="productionPlace" />

        <label for="password">Contraseña:</label>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" v-model="password" />

        <label for="confirm-password">Confirmar contraseña:</label>
        <input type="password" id="confirm-password" placeholder="Confirma tu contraseña" v-model="confirmPassword" />

        <button @click="registrar">Registrar</button>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue';
import { registrarUsuario } from '../services/api';

export default {
  components: { Navbar },
  data() {
    return {
      name: '',
      email: '',
      productionPlace: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    async registrar() {
      if (this.password !== this.confirmPassword) {
        alert('Las contraseñas no coinciden');
        return;
      }

      try {
        await registrarUsuario({
          nombre: this.name,
          email: this.email,
          lugar: this.productionPlace,
          password: this.password,
          tipo: 'productor'
        });
        this.$router.push('/sesion-productor');
      } catch (error) {
        console.error('Error al registrar:', error);
        alert('Hubo un error al registrar el usuario');
      }
    }
  }
};
</script>

<style scoped>
.center-text {
  text-align: center;
}
</style>
