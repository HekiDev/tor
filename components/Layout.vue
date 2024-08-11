<script setup>
import { ref } from 'vue'
import { links } from '@/constants/landing'

const isDarkMode = ref(false)

const setTheme = () => {
    let theme = localStorage.getItem('isDarkMode');
    isDarkMode.value = JSON.parse(theme);
    if(isDarkMode.value) return document.body.classList.add('dark');
    if(!isDarkMode.value) return document.body.classList.remove('dark');
}

const changeTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('isDarkMode', isDarkMode.value);
    setTheme()
}

onMounted(() => {
  setTheme()
})
</script>

<template>
	<section class="min-h-screen dark:bg-gray-900">
		<header class="sticky top-0 bg-transparent bg-opacity-50 backdrop-blur-md z-50">
			<nav class="container flex items-center w-full min-h-16 gap-4 overflow-hidden">
				<div class="flex-none flex items-center text-surface-900 dark:text-white font-bold">
                    <h1 class="text-lg">TOR</h1>
				</div>
				<div class="flex-1 flex lg:gap-8 justify-center">
					<ul class="hidden md:flex gap-1 items-center overflow-clip">
                        <NavLink 
                            v-for="link, i in links"
                            :key="i"
							:text="link.text"
							:to="link.to"
                        />
					</ul>
				</div>
                <div class="flex-none flex gap-2 flex-wrap">
                    <Button icon="pi pi-sun" severity="secondary" aria-label="Bookmark" size="small" @click="changeTheme"/>
                    <Button icon="pi pi-facebook" severity="secondary" aria-label="Bookmark" size="small"/>
                    <Button icon="pi pi-github" severity="secondary" aria-label="Bookmark" size="small"/>
                </div>
			</nav>
		</header>
        <slot name="content" />
        <footer></footer>
        <ScrollTop />
	</section>
</template>