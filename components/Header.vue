<script setup lang="ts">


</script>


<template lang="pug">
NuxtLink(to="/")
    img.rounded-full.h-32.w-32.justify-left.background-clip_border-box(src="~/assets/img/pet-it-logo-1.jpg")
div.mt-7.gap-2.border-4.bg-steel-blue.border-soft-mint.rounded-xl.shadow-xl.flex.buttons.justify-between.p-2.font-mono.text-charcoal.sticky.top-4
    button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/") Home
    button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/software") Software
    button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/hardware") Hardware
    button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/backup") Backups
    button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/about") About Us
    button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/contact") Contact Us
</template>