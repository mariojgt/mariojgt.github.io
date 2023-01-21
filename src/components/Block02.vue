<template>
    <div class="flex items-center justify-center h-screen bg-gradient-to-br from-gray-800 to-gray-900">
        <div class="mx-auto max-w-screen-lg px-3 py-6">
            <div class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24">
                <div>
                    <h1 class="text-3xl font-bold text-white">
                        Hi there, I'm<span
                            class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent">
                            Mario Jose Goes Tarosso</span>
                        👋
                    </h1>
                    <p class="mt-6 text-xl leading-9 text-white">
                        A creative developer and content creator passionate
                        about open source projects and game development, I love to create things that help other
                        developers and people in general.
                    </p>
                    <div class="mt-3 flex gap-1">
                        <a href="http://twitter.com/mariojgt2" target="_blank">
                            <Twitter class="h-12 w-12 hover:translate-y-1" />
                        </a>
                        <a href="http://instagram.com/mariojgt2" target="_blank">
                            <Instagram class="h-12 w-12 hover:translate-y-1" />
                        </a>
                        <a href="https://www.linkedin.com/in/mariojgt/" target="_blank">
                            <Linkedin class="h-12 w-12 hover:translate-y-1" />
                        </a>
                        <a href="https://www.youtube.com/@mariojgt" target="_blank">
                            <Youtube class="h-12 w-12 hover:translate-y-1" />
                        </a>
                        <a href="https://www.udemy.com/user/mario-jose-goes-tarosso/" target="_blank">
                            <Udemy class="h-12 w-12 hover:translate-y-1" />
                        </a>
                        <a href="https://ko-fi.com/mariojgt" target="_blank">
                            <Kofi class="h-12 w-12 hover:translate-y-1" />
                        </a>
                        <a href="https://github.com/mariojgt" target="_blank">
                            <Github class="h-12 w-12 hover:translate-y-1 bg-white rounded" />
                        </a>
                    </div>
                </div>
                <div class="shrink-0" @click="randomTheme" >
                    <img class="h-auto w-auto" src="https://raw.githubusercontent.com/mariojgt/mariojgt/main/mario_avatar.png" alt="Avatar image" loading="lazy" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

import Twitter from "./iconsSvg/twitter.vue";
import Linkedin from "./iconsSvg/linkedin.vue";
import Youtube from "./iconsSvg/youtube.vue";
import Instagram from "./iconsSvg/instagram.vue";
import Udemy from "./iconsSvg/udemy.vue";
import Kofi from "./iconsSvg/kofi.vue";
import Github from "./iconsSvg/github.vue";

defineProps({
    msg: String,
});

// Import the core library.
import { randomTheme } from "./../helpers/core";
</script>
