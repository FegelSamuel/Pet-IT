<script setup lang="ts">
import Body from '@/components/Body.vue'
// this is the homepage of the website!
</script>


<template lang="pug">
Body
    Logo
    Header
    div.font-mono.text-charcoal.space-y-4.border-slate-gray
        div() We are familiar with all the most popular Veterinary Practice Management Software programs. We work with your software provider to help during installation, upgrades, and maintenance, as well as helping to resolve problems. 
        div() Whether you are considering upgrading to a paperless (or paper-light) office, or simply have a 'bug' that's bothering you, we can help by working with your provider so you can focus on your clients.
        h2.text-xl.p-4 Links to Popular Practice Management Websites
        div.font-bold.grid.grid-cols-3.gap-4.flex
            NuxtLink(to="https://2inova.com")
                img(src="https://2inova.com/wp-content/uploads/2022/08/favicon.png")
            NuxtLink(to="https://covetrus.com")
                img(src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Covetrus_Logo.png")
            NuxtLink(to="https://www.idexx.com/en/")
                img(src="https://download.logo.wine/logo/Idexx_Laboratories/Idexx_Laboratories-Logo.wine.png")
</template>