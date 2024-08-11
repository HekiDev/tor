<script setup lang="ts">
withDefaults(defineProps<{text: string, to: string}>(), {text: '', to: ''})
</script>
<template>
    <li class="whitespace-nowrap text-surface-900 font-semibold flex rounded-md dark:hover:bg-surface-700 hover:bg-surface-100 hover:shadow-sm transition ease-in-out">
        <NuxtLink 
            class="px-5 py-2 h-full w-full dark:text-white" 
            :href="to"
        >
            {{ text }}
        </NuxtLink>
    </li>
</template>