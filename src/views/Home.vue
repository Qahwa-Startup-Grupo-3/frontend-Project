<template>
  <div class="home-page">
    <Navbar />
    <div class="hero">
      <div class="text">
        <h1>Desde el café hasta el saco, todo bajo control.</h1>
        <p>Qahwa: Tu mejor aliado en el proceso productivo de café</p>
        <div class="buttons">
          <button class="btn productor">Productor</button>
          <button class="btn distribuidor">Distribuidor</button>
        </div>
      </div>
      <div class="image">
        <img src="../assets/home.jpg" alt="Café" />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue'
</script>

<style scoped>
.home-page {
  font-family: 'Segoe UI', sans-serif;
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 5%;
  min-height: 85vh;
  background-color: #f5f5f5;
}

.text {
  flex: 1;
  max-width: 50%;
}

.text h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #333;
}

.text p {
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 12px 24px;
  font-size: 1rem;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.productor {
  background-color: #4caf50;
  color: white;
}

.distribuidor {
  background-color: #2196f3;
  color: white;
}

.btn:hover {
  opacity: 0.85;
}

.image {
  flex: 1;
  display: flex;
  justify-content: center;
}

.image img {
  width: 90%;
  max-width: 500px;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
}
</style>
