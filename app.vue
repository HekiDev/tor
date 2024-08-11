<template>
    <Layout>
        <template #content>
            <section class="py-40">
                <div class="relative container flex flex-col gap-10">
                    <div class="absolute left-2 -translate-y-12 pointer-events-none md:left-[12%] h-12 w-12">
                        <img :src="`/images/float/laravel.png`" alt="" class="animate-logo-bounce object-contain h-full opacity-50 dark:opacity-100">
                    </div>
                    <div class="absolute right-2 -translate-y-20 pointer-events-none md:right-1/4 h-12 w-12">
                        <img :src="`/images/vue.png`" alt="" class="animate-logo-bounce-del object-contain h-full opacity-50 dark:opacity-100">
                    </div>
                    <div class="absolute bottom-9 md:bottom-0 right-6 -translate-y-20 pointer-events-none md:right-[12%] h-12 w-12 opacity-50 dark:opacity-100">
                        <img :src="`/images/nuxt.png`" alt="" class="animate-logo-bounce object-contain h-full">
                    </div>
                    <div class="absolute bottom-9 md:bottom-0 left-6 -translate-y-20 pointer-events-none md:left-[12%] h-12 w-12 opacity-50 dark:opacity-100">
                        <img :src="`/images/tailwind.png`" alt="" class="animate-logo-bounce-del object-contain h-full">
                    </div>
                    <div class="flex flex-col items-center text-wrap text-center dark:text-white">
                        <h1 class="text-5xl sm:text-7xl font-bold">I'm Hector,</h1>
                        <h1 class="text-5xl sm:text-7xl font-bold">A Full-stack <span class="text-surface-500 dark:text-surface-700">Web Developer.</span></h1>
                    </div>
                    <div class="text-center flex justify-center dark:text-white">
                        <p class="max-w-4xl text-lg">I find excitement in building web-based applications, whether using static or dynamic approaches. 
                            As a proficient developer specializing in Laravel and Vue.js, I transform prototype designs into fully functional web apps.
                        </p>
                    </div>
                    <div class="flex gap-4 justify-center flex-col sm:flex-row">
                        <!-- <Button type="button" label="Download resume" icon="pi pi-arrow-down" class="py-3 px-4" /> -->
                        <Button as="a" label="Download resume" class="py-3 px-4" icon="pi pi-arrow-down" href="/file/hectormorada.pdf" download target="_blank" rel="noopener" />
                        <Button type="button" label="Let's connect" icon="pi pi-share-alt" severity="secondary"  @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" outlined />
                        <Menu ref="menu" id="overlay_menu" :model="contacts" :popup="true" />
                    </div>
                </div>
            </section>
            <section class="">
                <div class="container flex gap-4 flex-col md:flex-row">
                    <div class="flex flex-1 flex-col gap-6">
                        <h2 class="text-3xl font-bold text-surface-500 dark:text-surface-700 text-center md:text-left">Brief Introduction</h2>
                        <p class="text-lg dark:text-white text-center md:text-left">Highly motivated and detail-oriented web developer with 3 years of experience in developing and maintaining web applications. Strong ability to problem solve and effectively communicate with both technical and non-technical team members. Passionate about staying up-to-date with industry trends and continuously improving development skills.</p>
                        <div class="flex gap-3 justify-center md:justify-start">
                            <Button label="Send email" class="px-4" icon="pi pi-envelope" severity="contrast" @click="handleSendEmail" />
                            <Button type="button" label="Read more" class="px-4" severity="secondary" outlined />
                        </div>
                    </div>
                    <div class="flex-1 relative h-72 overflow-hidden rounded-md">
                        <img :src="`/images/user.jpg`" alt="Hector Morada" class="rounded-md object-cover absolute -top-5 "/>
                    </div>
                </div>
            </section>
            <section class="py-40">
                <div class="container flex flex-col gap-4">
                    <h1 class="text-center max-w-4xl place-self-center text-5xl sm:text-5xl font-bold dark:text-white">Build using latest <span class="text-surface-500 dark:text-surface-700">Web technologies</span> with ease.</h1>
                    <p class="py-4 text-center text-lg dark:text-white">Ensure that the structures are always on-track for quality standards by using robust and latest web technologies and frameworks.</p>
                    <div class="flex justify-center">
                        <div class="w-[90%] md:w-full grid grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-3">
                            <div v-for="skill, i in skills" :key="i" class="flex gap-3 items-center border border-surface-100 p-5 rounded-md hover:border-surface-400 transition-all cursor-pointer dark:text-white max-h-[150px]">
                                <div>
                                    <div class="flex justify-center items-center bg-surface-100 hover:shadow-sm transition ease-in-out h-20 w-20 py-3 px-5 rounded-md">
                                        <img :src="`/images/${skill.logo}`" :alt="skill.name" class="rounded-md object-contain h-full"/>
                                    </div>
                                </div>
                                <div class="flex flex-col gap-1">
                                    <p class="text-lg font-semibold">{{ skill.name }}</p>
                                    <!-- <p class="line-clamp-3">{{ skill.description }}</p> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="">
                <div class="container flex flex-col gap-10">
                    <h1 class="text-center text-5xl sm:text-5xl font-bold dark:text-white">Work Experiences</h1>
                    <Timeline :value="experiences" align="alternate" class="customized-timeline">
                        <template #marker="slotProps">
                            <span class="flex w-8 h-8 items-center justify-center text-white rounded-full z-10 shadow-sm" :style="{ backgroundColor: slotProps.item.color }">
                                {{ slotProps.item.order }}
                            </span>
                        </template>
                        <template #opposite="slotProps">
                            <div class="h-full">
                                <h1 class="text-lg text-surface-500 dark:text-surface-400">
                                    {{ slotProps.item.date }}
                                </h1>
                            </div>
                        </template>
                        <template #content="slotProps">
                            <Card class="my-4">
                                <template #content>
                                    <div class="flex flex-col gap-3">
                                        <h1 class="text-lg font-semibold">{{ slotProps.item.company }}</h1>
                                        <div class="">
                                            <Tag severity="success" class="py-1 mr-2" :value="slotProps.item.position"></Tag>
                                            <Tag severity="info" class="py-1" :value="slotProps.item.type"></Tag>
                                        </div>
                                        <ul class="text-black dark:text-white">
                                            <li v-for="item, i in slotProps.item.responsibilities" :key="i">
                                                {{ item }}
                                            </li>
                                        </ul>
                                        <p>Technologies:</p>
                                        <ul class="flex flex-wrap gap-2">
                                            <li v-for="item, i in slotProps.item.tools" :key="i">
                                                <Chip :label="item.name" />
                                            </li>
                                        </ul>
                                    </div>
                                </template>
                            </Card>
                        </template>
                    </Timeline>
                </div>
            </section>
            <section class="py-40">
                <div class="container flex flex-col gap-4">
                    <h1 class="text-center max-w-4xl place-self-center text-5xl sm:text-5xl font-bold dark:text-white"><span class="text-surface-500 dark:text-surface-700">Web-based </span>projects worked with.</h1>
                    <p class="py-4 text-center text-lg dark:text-white">Projects.</p>
                    <div class="flex justify-center">
                        <div class="w-[90%] grid grid-cols-[repeat(auto-fill,minmax(250px,_1fr))] gap-3">
                            <div v-for="service, i in services" :key="i" class="flex flex-col gap-3 border border-surface-100 p-5 rounded-md hover:border-surface-400 transition-all cursor-pointer dark:text-white max-h-[150px]">
                                <div class="flex gap-3 items-center">
                                    <span :class="`text-surface-700 pi ${service.icon}`"></span>
                                    <p class="text-lg font-semibold">{{ service.title }}</p>
                                </div>
                                <div class="truncate text-ellipsis text-wrap">
                                    <p class="line-clamp-3">{{ service.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="py-20">
                <Divider />
                <div class="container flex flex-col gap-4 items-center pt-6">
                    <h1 class="text-center max-w-4xl place-self-center text-5xl sm:text-5xl font-bold dark:text-white"><span class="text-surface-500 dark:text-surface-700">Get in touch </span></h1>
                    <div class="flex flex-col sm:flex-row items-center dark:text-white gap-2 flex-wrap">
                        <p>hectormorada041799@gmail.com</p>
                        <p>|</p>
                        <p>+639095082575</p>
                    </div>
                    <form class="flex flex-col mt-5 w-full md:w-[50%] gap-3">
                        <InputText v-model="email" placeholder="Email address" type="email" />
                        <Textarea v-model="message" autoResize rows="5" cols="30" placeholder="Message.." />
                        <Button type="button" :disabled="!email || !message || loading" label="Submit" class="py-3 px-4" @click="handleSubmit" />
                        <div class="flex gap-2 flex-wrap items-center justify-center">
                            <Button icon="pi pi-sun" severity="secondary" aria-label="Bookmark" size="small" />
                            <Button icon="pi pi-facebook" severity="secondary" aria-label="Bookmark" size="small"/>
                            <Button icon="pi pi-github" severity="secondary" aria-label="Bookmark" size="small"/>
                        </div>
                    </form>
                </div>
            </section>
        </template>
    </Layout>
    <Toast position="bottom-right" group="br"/>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "primevue/usetoast";
import { skills, services, experiences } from '@/constants/landing'
useSeoMeta({
    title: 'Tor Portfolio',
    ogTitle: 'Tor Portfolio',
    description: 'Web Developer',
    ogDescription: 'Web Developer',
})
useHead({
    title: 'Tor\'s Portfolio',
    description: 'Web Developer',
})

const toast = useToast();
const email = ref('')
const message = ref('')
const loading = ref(false)
const menu = ref();

const error = () => {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Error submitting form.', group: 'br', life: 3000 });
    loading.value = false
};
const submitted = () => {
    toast.add({ severity: 'success', summary: 'Success', detail: 'Form submitted.', group: 'br', life: 3000 });
};

const contacts = ref([
{
    label: 'Contacts',
    items: [
        {
            label: 'hectormorada041799@gmail.com',
            icon: 'pi pi-envelope'
        },
        {
            label: '+639 09 508 2575',
            icon: 'pi pi-phone'
        }
    ]
}
]);

const toggle = (event) => {
    menu.value.toggle(event);
};

const handleSendEmail = () => {
    const email = 'hectormorada041799@gmail.com';
    const subject = '';
    const body = '';
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
}

const handleSubmit = () => {
    loading.value = true
    var data = new FormData()
    data.append('email', email.value);
    data.append('message', message.value);
    // pci email
    fetch('https://formspree.io/f/xvgpalkg', {
        method: 'POST',
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            email.value = ''
            message.value = ''
            submitted()
            loading.value = false
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    error()
                } else {
                    error()
                }
            })
        }
    }).catch(err => {
        error()
    });
}
</script>