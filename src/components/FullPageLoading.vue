<template lang="pug">
.loading-overlay
  .loading-indicator Loading...
</template>

<script setup lang="ts">
// No script logic needed for this simple version
</script>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.8); /* Semi-transparent white background */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's on top */
  font-size: 1.5rem;
  color: #333;
}

.loading-indicator {
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  /* Apply the pulse animation */
  animation: pulse 1.5s ease-in-out infinite;
}

/* Define the pulse animation */
@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(0.98);
  }
}
</style>
