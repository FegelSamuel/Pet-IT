<script setup lang="ts">


</script>


<template lang="pug">
NuxtLink(to="/")
    img.rounded-full.h-16.w-16.justify-left(src="~/assets/img/pet-it-logo-1.jpg")
div.mt-7.gap-2.border-4.bg-steel-blue.border-soft-mint.rounded-xl.shadow-2xl.flex.buttons.justify-between.p-2.font-mono.text-charcoal
    button.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/") Home
    button.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/software") Software
    button.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/hardware") Hardware
    button.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/backup") Backups
    button.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/about") About Us
    button.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/contact") Contact Us
</template>