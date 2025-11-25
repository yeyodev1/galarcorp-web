<script setup lang="ts">
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-left">
        <span>Copyright © 2025 GalarCorp. Todos los derechos reservados.</span>
      </div>
      <div class="footer-right">
        <RouterLink
          class="legal-link"
          to="/resolutions"
          title="Resoluciones"
        >
          <i class="fa-regular fa-file-pdf"></i>
          Resoluciones
        </RouterLink>
        <small class="disclaimer">Documentos oficiales emitidos por entidades oficiales.</small>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/colorVariables.module.scss' as *;

.site-footer {
  background-color: $black;
  color: rgba($white, 0.88);
  padding: 32px 16px;
  border-top: 1px solid rgba($white, 0.08);
}

.footer-inner {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 18px;
  max-width: 1280px;
  margin: 0 auto;
  width: 100%;
  box-sizing: border-box;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1 1 50%;
  min-width: 0;
}

.footer-right {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  flex: 1 1 50%;
  min-width: 0;
}

.legal-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba($white, 0.98);
  text-decoration: none;
  border: 1px solid rgba($white, 0.18);
  padding: 10px 12px;
  border-radius: 10px;
  font-size: 0.95rem;
  width: 100%;
  max-width: 100%;
  white-space: normal;
  overflow-wrap: anywhere;
  word-break: break-word;
  box-sizing: border-box;
  line-height: 1.3;
}

.legal-link:hover {
  border-color: rgba($white, 0.3);
}

.legal-link i {
  flex-shrink: 0;
}

.disclaimer {
  font-size: 12px;
  color: rgba($white, 0.72);
}

@media (min-width: 768px) {
  .site-footer {
    padding: 40px 24px;
  }

  .footer-inner {
    flex-wrap: nowrap;
    gap: 24px;
  }

  .footer-right {
    align-items: flex-end;
    text-align: right;
  }

  .legal-link {
    font-size: 1.025rem;
    padding: 12px 16px;
    width: auto;
    max-width: 100%;
  }
}
</style>
