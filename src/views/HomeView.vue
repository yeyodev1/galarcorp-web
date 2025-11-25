<template>
  <section class="hero">
    <div class="overlay"></div>
    <div class="content">
      <h1>Tu auto solo con tu cédula por crédito directo</h1>
      <p>Sin trámites complicados. Estrena hoy mismo.</p>
      <a
        class="cta"
        href="https://wa.me/593968543502?text=Hola%20GalarCorp%2C%20vi%20su%20publicidad%20en%20IG%20sobre%20el%20auto%20con%20c%C3%A9dula%20y%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        target="_blank"
        rel="noopener"
      >
        <i class="fa-brands fa-whatsapp"></i>
        Lo vi en Instagram - Más info aquí
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
@use '@/styles/colorVariables.module.scss' as *;

.hero {
  position: relative;
  min-height: 100vh;
  background-image: url('@/assets/hero.webp');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom,
      rgba($black, 0.6) 0%,
      rgba($black, 0.5) 40%,
      rgba($black, 0.6) 100%);
}

.content {
  position: relative;
  z-index: 1;
  color: $white;
  text-align: center;
  padding: 72px 16px 24px;
  max-width: 960px;
}

h1 {
  font-size: 32px;
  line-height: 1.2;
  margin-bottom: 12px;
}

p {
  font-size: 16px;
  margin-bottom: 24px;
  opacity: 0.9;
}

.cta {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: $red;
  color: $white;
  border: 1px solid rgba($white, 0.2);
  padding: 12px 16px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.cta:hover {
  transform: translateY(-1px);
  opacity: 0.95;
}

@media (min-width: 768px) {
  h1 {
    font-size: 44px;
  }

  p {
    font-size: 18px;
  }
}
</style>
