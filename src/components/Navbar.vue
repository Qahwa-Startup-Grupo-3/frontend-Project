<template>
  <nav>
    <div class="logo">Qahwa</div>
    <div class="links">
      <router-link to="/tipo-usuario">Iniciar sesión</router-link>

      <router-link to="/registro">Registro</router-link>
    </div>
  </nav>
</template>

<script setup>
// No es necesario importar defineComponent si estás usando <script setup>
</script>

<style scoped>
/* Los estilos están en el archivo CSS global */

nav {
  display: flex;
  justify-content: center;  /* centra horizontalmente */
  align-items: center;      /* centra verticalmente */
  position: relative;
  height: 60px;             /* puedes ajustar esto */
  background-color: #fff;   /* opcional */
  padding: 0 2rem;
  border-bottom: 1px solid #ddd; /* opcional */
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}

.links {
  margin-left: auto;
  display: flex;
  gap: 1.5rem;
}

</style>

