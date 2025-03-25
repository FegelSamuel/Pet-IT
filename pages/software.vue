<script setup lang="ts">
import Body from '~/components/PITBody.vue'
// this is the homepage of the website!
</script>


<template lang="pug">
div.font-mono.text-charcoal.border-slate-gray.size-fit.py-10.space-y-8
    div() We are familiar with all the most popular Veterinary Practice Management Software programs. We work with your software provider to help during installation, upgrades, and maintenance, as well as helping to resolve problems. 
    div() Whether you are considering upgrading to a paperless (or paper-light) office, or simply have a 'bug' that's bothering you, we can help by working with your provider so you can focus on your clients.
    h2.text-xl.p-4.mt-16 Links to Popular Practice Management Websites
    div.font-bold.grid.grid-cols-3.gap-4.flex.rounded-sm.border-slate-gray.p-16.mb-16
        NuxtLink(to="https://2inova.com")
            img.size-full(src="https://www.conferenceharvester.com/uploads/harvester/photos/VIVRTOHA-CompanyLogo-577597.png")
        NuxtLink(to="https://covetrus.com")
            img.size-full(src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Covetrus_Logo.png")
        NuxtLink(to="https://www.idexx.com/en/")
            img.size-full(src="https://download.logo.wine/logo/Idexx_Laboratories/Idexx_Laboratories-Logo.wine.png")
</template>