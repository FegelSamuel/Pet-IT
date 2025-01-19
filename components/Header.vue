<template lang="pug">
div.mt-7.gap-2.border-4.bg-steel-blue.border-soft-mint.rounded-xl.shadow-2xl.flex.buttons.justify-between.p-2
    button.px-4.py-2.shadow-2xl.bg-teal.rounded-lg.hover_bg-bright-orange
        NuxtLink(to="/") Home
    button.px-4.py-2.shadow-2xl.bg-fuchsia-200.rounded-lg.hover_bg-fuchsia-300
        NuxtLink(to="/software") Software
    button.px-4.py-2.shadow-2xl.bg-red-100.rounded-lg.hover_bg-red-300
        NuxtLink(to="/hardware") Hardware
    button.px-4.py-2.shadow-2xl.bg-red-100.rounded-lg.hover_bg-red-300
        NuxtLink(to="/backup") Backups
    button.px-4.py-2.shadow-2xl.bg-red-100.rounded-lg.hover_bg-red-300
        NuxtLink(to="/about") About Us
    button.px-4.py-2.shadow-2xl.bg-red-100.rounded-lg.hover_bg-red-300
        NuxtLink(to="/contact") Contact Us
</template>