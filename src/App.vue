<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import SiteHeader from '@/components/SiteHeader.vue'
import LegalFooter from '@/components/LegalFooter.vue'

const route = useRoute()
const isSolidHeader = computed(() => route.path.startsWith('/resolutions'))
</script>

<template>
  <SiteHeader :solid="isSolidHeader" />
  <router-view />
  <LegalFooter />
</template>

 
 
