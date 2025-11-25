<script setup lang="ts">
import { ref, computed } from 'vue'
import resolutionPdf from '@/assets/legal/Resolución No. SCVS-INMV-DNAR-2025-00035872 III EOLP MOSINVEST SA-signed.pdf'
import informePdf from '@/assets/legal/PDF_GO_303-2025-INFORMEFINAL-MOSINVEST-3EO-SEPT.pdf'

const query = ref('')

const documents = [
  {
    title: 'Resolución No. SCVS-INMV-DNAR-2025-00035872',
    description: 'Aprobación de la Tercera Emisión de Obligaciones de Largo Plazo - Mosinvest S.A.',
    date: '24 de noviembre de 2025',
    href: resolutionPdf,
  },
  {
    title: 'Informe Final 3EO Septiembre 2025',
    description: 'Reporte de seguimiento de obligaciones - Mosinvest S.A.',
    date: '30 de septiembre de 2025',
    href: informePdf,
  },
]

const filtered = computed(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return documents
  return documents.filter((d) =>
    [d.title, d.description, d.date].some((t) => t.toLowerCase().includes(q))
  )
})
</script>

<template>
  <main class="resolution-page">
    <section class="mini-hero">
      <div class="container">
        <h1>Transparencia y Resoluciones Corporativas</h1>
        <p>Acceso público a la documentación regulatoria y emisiones de obligaciones.</p>
      </div>
    </section>

    <section class="content">
      <div class="container">
        <div class="toolbar">
          <div class="search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              type="text"
              placeholder="Buscar resolución..."
              v-model="query"
              aria-label="Buscar resolución"
            />
          </div>
        </div>

        <div class="grid">
          <article v-for="doc in filtered" :key="doc.title" class="card">
            <header class="card-header">
              <h3 class="card-title">{{ doc.title }}</h3>
              <span class="card-date">{{ doc.date }}</span>
            </header>
            <p class="card-desc">{{ doc.description }}</p>
            <div class="card-actions">
              <a :href="doc.href" target="_blank" rel="noopener" class="download">
                <i class="fa-regular fa-file-pdf"></i>
                Descargar PDF
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  </main>
  
</template>

<style scoped lang="scss">
@use '@/styles/colorVariables.module.scss' as *;

.resolution-page {
  display: block;
  min-height: 100vh;
}

.mini-hero {
  background: rgba($black, 0.06);
  border-bottom: 1px solid rgba($black, 0.08);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 72px 16px 24px;
}

.mini-hero .container {
  padding-top: 96px;
  padding-bottom: 32px;
}

.mini-hero h1 {
  font-size: 26px;
  line-height: 1.2;
  color: $black;
  margin: 0 0 8px;
}

.mini-hero p {
  color: rgba($black, 0.75);
  margin: 0;
}

.content .toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;
}

.search {
  display: flex;
  align-items: center;
  gap: 8px;
  border: 1px solid rgba($black, 0.12);
  border-radius: 10px;
  padding: 10px 12px;
  background-color: rgba($white, 0.9);
}

.search input {
  border: none;
  outline: none;
  background: transparent;
  color: $black;
  width: 100%;
}

.grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.card {
  border: 1px solid rgba($black, 0.1);
  border-radius: 12px;
  background-color: $white;
  padding: 16px;
}

.card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 8px;
}

.card-title {
  font-size: 18px;
  color: $black;
  margin: 0;
}

.card-date {
  font-size: 14px;
  color: rgba($black, 0.65);
}

.card-desc {
  color: rgba($black, 0.8);
  margin: 0 0 12px;
}

.download {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: $red;
  color: $white;
  border: 1px solid rgba($white, 0.2);
  padding: 10px 12px;
  border-radius: 9999px;
  text-decoration: none;
  font-weight: 600;
}

@media (min-width: 768px) {
  .mini-hero .container {
    padding-top: 112px;
    padding-bottom: 40px;
  }

  .mini-hero h1 {
    font-size: 32px;
  }

  .grid {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }
}

@media (min-width: 1024px) {
  .grid {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 18px;
  }
}
</style>
