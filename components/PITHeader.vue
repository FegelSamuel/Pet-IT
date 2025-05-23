<script setup lang="ts">

const route = useRoute();
const routePath = defineModel(); // deprecated code, this can be a ref(), but it might need to be a v-model later. 
routePath.value=route.path;

// Listener for when you are switching pages. 
watch(
  () => route.path,
  (newPath) => {
    routePath.value = newPath;
  }
);
</script>


<template lang="pug">
div.flex.flex-row.sticky.top-4
    NuxtLink(to="/")
        img.rounded-full.h-32.w-32.justify-left.background-clip_border-box(src="~/assets/img/pet-it-logo-1.jpg")
    div.mt-7.gap-2.border-4.bg-steel-blue.border-soft-mint.rounded-xl.shadow-xl.flex.buttons.justify-between.p-2.font-mono.text-charcoal.font-lg
        NuxtLink(to="/")
            button.px-4.py-2.bg-soft-olive.rounded-lg.size-full.shadow-xl.shadow-inner.shadow-inner-2xl.inset-shadow-hard-olive.inset-shadow-2xl(class= "scale-[0.98]" v-if="routePath == '/'") Home
            button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.size-full.hover_border-hard-olive(v-else) Home
        NuxtLink(to="/software")
            button.px-4.py-2.bg-soft-olive.rounded-lg.size-full.shadow-xl.shadow-inner.shadow-inner-2xl.inset-shadow-hard-olive.inset-shadow-2xl(class= "scale-[0.98]" v-if="routePath == '/software'") Software
            button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.size-full.hover_border-hard-olive(v-else) Software
        NuxtLink(to="/hardware") 
            button.px-4.py-2.bg-soft-olive.rounded-lg.size-full.shadow-xl.shadow-inner.shadow-inner-2xl.inset-shadow-hard-olive.inset-shadow-2xl(class= "scale-[0.98]" v-if="routePath == '/hardware'") Hardware
            button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.size-full.hover_border-hard-olive(v-else) Hardware
        NuxtLink(to="/backup")
            button.px-4.py-2.bg-soft-olive.rounded-lg.size-full.shadow-xl.shadow-inner.shadow-inner-2xl.inset-shadow-hard-olive.inset-shadow-2xl(class= "scale-[0.98]" v-if="routePath == '/backup'") Backups
            button.border-warm-cream.px-4.py-2.shadow-2xl.bg-soft-olive.rounded-lg.size-full.hover_border-hard-olive(v-else) Backups
</template>