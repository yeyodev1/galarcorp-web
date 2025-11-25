<script setup lang="ts">
const props = defineProps({
  solid: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>

<template>
  <header class="site-header" :class="{ solid: solid }">
    <div class="inner">
      <div class="brand">
        <img src="@/assets/logo/galarcorp-white-red.png" alt="GalarCorp" class="logo" />
      </div>
      <nav class="actions">
        <a href="/resolutions" class="nav-link">Resoluciones</a>
        <a href="#contacto" class="contact-link">
          <i class="fa-regular fa-envelope"></i>
          Contacto
        </a>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/colorVariables.module.scss' as *;

.site-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 8px 12px;
  z-index: 50;
  background-color: rgba($black, 0.5);
  backdrop-filter: saturate(160%) blur(10px);
  border-bottom: 1px solid rgba($white, 0.06);
  box-sizing: border-box;
}

.site-header.solid {
  background-color: $black;
  border-bottom: 1px solid rgba($white, 0.12);
  backdrop-filter: none;
}

.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  gap: 8px;
  width: 100%;
}

.brand {
  display: flex;
  align-items: center;
  flex: 0 1 auto;
}

.logo {
  display: block;
  height: auto;
  width: 180px;
}

.actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  color: $white;
  text-decoration: none;
  font-size: 0.875rem;
}

.contact-link {
  color: $white;
  border: 1px solid rgba($white, 0.3);
  padding: 8px 10px;
  border-radius: 9999px;
  text-decoration: none;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.875rem;
}

.contact-link:hover {
  background-color: rgba($white, 0.12);
  border-color: rgba($white, 0.5);
}

.contact-link i {
  display: none;
}

@media (min-width: 768px) {
  .site-header {
    padding: 12px 20px;
  }

  .logo {
    width: 220px;
  }

  .actions {
    gap: 12px;
  }

  .contact-link {
    padding: 10px 14px;
    font-size: 0.95rem;
  }

  .contact-link i {
    display: inline-block;
  }
}
</style>
