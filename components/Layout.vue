<script setup>
import { ref, watch } from 'vue'
import { links, colors } from '@/constants/landing'

const isDarkMode = ref(false)
const color = ref('default')
const menu = ref();

watch(color, (value) => {
    changeColor(value)
})

const changeColor = (theme) => {
    const nums = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]
    nums.forEach((num, i) => {
        document.documentElement.style.setProperty(`--p-surface-${num}`, theme.schemes[i]);
    });
};

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

const toggleColorMenu = (event) => {
    menu.value.toggle(event);
}

onMounted(() => {
    setTheme()
})
</script>

<template>
	<section class="min-h-screen dark:bg-gray-900">
		<header class="sticky top-0 bg-transparent bg-opacity-50 backdrop-blur-md z-50">
			<nav class="container flex items-center w-full min-h-16 gap-4 overflow-hidden">
				<div class="flex-none flex items-center text-surface-900 dark:text-white font-bold gap-2">
                    <h1 class="text-lg">TOR</h1>
                    <Button icon="pi pi-palette" severity="secondary" size="small" @click="toggleColorMenu" />
                    <Popover ref="menu">
                        <div class="flex flex-col gap-2">
                            <span class="font-medium block text-sm">Color Scheme</span>
                            <div class="">
                                <SelectButton
                                    v-model="color"
                                    :options="colors"
                                    optionLabel="name"
                                    dataKey="id"
                                    aria-labelledby="custom"
                                    :allowEmpty="false"
                                >
                                    <template #option="slotProps">
                                        <!-- <span :class="`pi pi-circle-fill ${slotProps.option.id == 3 ? '!text-[#ecb732]' : slotProps.option.id == 2 ? '!text-[#35eb9a]' : '!text-[#b2aadb]'}`"></span> -->
                                        <span :class="`size-5 rounded-md ${slotProps.option.id == 3 ? '!bg-[#ecb732]' : slotProps.option.id == 2 ? '!bg-[#35eb9a]' : '!bg-[#b2aadb]'}`"></span>
                                    </template>
                                </SelectButton>
                            </div>
                        </div>
                    </Popover>
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