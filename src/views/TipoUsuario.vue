<template>
  <div class="container">
    <h1>Bienvenido de vuelta !</h1>
    <p>Para poder continuar indícanos que tipo de usuario eres: </p>
    <button @click="$router.push('/sesion-productor')">Productor</button>
    <button @click="$router.push('/sesion-distribuidor')">Distribuidor</button>
  </div>
</template>

<script>
export default {
  name: 'TipoUsuario'
};
</script>
