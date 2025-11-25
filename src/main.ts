import { createApp } from 'vue'
import { createPinia } from 'pinia'

import '@/styles/global.scss'

import App from './App.vue'
import router from './router'
import pngFavicon from '@/assets/logo/galarcorp-black-red.png'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

const ensureFaviconLinks = (href: string) => {
  const iconPng = document.querySelector<HTMLLinkElement>('link[rel="icon"][type="image/png"]')
  if (iconPng) {
    iconPng.href = href
  } else {
    const l = document.createElement('link')
    l.rel = 'icon'
    l.type = 'image/png'
    l.href = href
    document.head.appendChild(l)
  }

  const appleIcon = document.querySelector<HTMLLinkElement>('link[rel="apple-touch-icon"]')
  if (appleIcon) {
    appleIcon.href = href
  } else {
    const a = document.createElement('link')
    a.rel = 'apple-touch-icon'
    a.href = href
    document.head.appendChild(a)
  }
}

ensureFaviconLinks(pngFavicon)
