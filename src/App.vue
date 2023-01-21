<template>
    <layout>
        <block02 />
        <div
            class="antialiased w-full bg-gradient-to-br from-gray-800 to-gray-900 text-gray-400 font-inter p-10">
            <div class="container px-4 mx-auto">
                <div>
                    <div id="title" class="text-center my-10">
                        <h1 class="font-bold text-9xl text-white pb-6">Check out my Projects</h1>
                        <h2 class="text-4xl text-gray-300">I'm always working on something new {{ emoji }}</h2>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
                        <genericBlock title="Wind-Notify"
                            description="Wind-Notify provide a simple and easy way to display tailwind and daisy UI toast notification with almost zero configuration"
                            link="https://github.com/mariojgt/wind-notify"
                            img="https://raw.githubusercontent.com/mariojgt/wind-notify/main/art/logo_large.png"
                            tags="tailwind, javascript" />
                        <genericBlock title="Skeleton Admin"
                            description="Laravel starting point with frontend and backend authentication, comes with 2fa, vue js, tailwind out of the box."
                            link="https://github.com/mariojgt/skeleton-admin"
                            img="https://raw.githubusercontent.com/mariojgt/skeleton-admin/master/Publish/Art/logo.png"
                            tags="laravel,tailwind, vuejs" />
                        <genericBlock title="Master inventory"
                            description="Master inventory was design to be a simple and powerful inventory system for any kind of game."
                            link="https://www.unrealengine.com/marketplace/en-US/product/master-inventory"
                            img="https://cdn1.epicgames.com/ue/product/Thumbnail/MasterInventory_thumb-284x284-f18d1dab69231c9ba9e392092b196882.png?resize=1&w=300"
                            tags="Unreal engine" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
                        <genericBlock title="Castle"
                            description="This Laravel packages has been design to quickly add 2 steps verifications in am very simple way and very easy to expand."
                            link="https://github.com/mariojgt/castle"
                            img="https://raw.githubusercontent.com/mariojgt/castle/main/Publish/Art/logo.png"
                            tags="laravel,vuejs,tailwind,2fa" />
                        <genericBlock title="Biscotto"
                            description="Laravel cookie policy packages to help your website with the GDPR rules."
                            link="https://github.com/mariojgt/biscotto"
                            img="https://raw.githubusercontent.com/mariojgt/biscotto/main/Publish/Image/Biscotto.png"
                            tags="laravel,vanilia js" />
                        <genericBlock title="Gateway"
                            description="This is a Laravel package design to make checkout easy and clean to implement, available integration (Stripe), in the future we going to have some more integrations with others gateways, the paypal is almost there"
                            link="https://github.com/mariojgt/gateway"
                            img="https://raw.githubusercontent.com/mariojgt/gateway/main/Publish/Art/logo.png"
                            tags="laravel,php, stripe, paypal" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
                        <genericBlock title="Magnifier" description="A laravel media manager easy to use an integrate."
                            link="https://github.com/mariojgt/magnifier"
                            img="https://raw.githubusercontent.com/mariojgt/magnifier/main/Publish/art/logo.png"
                            tags="laravel,api, tailwind" />
                        <genericBlock title="UnrealRpgMapMaker"
                            description="Complete solution to make a RPG map maker, with a lot of features, like a radar, waypoints and more."
                            link="https://github.com/mariojgt/UnrealRpgMapMaker"
                            img="https://raw.githubusercontent.com/mariojgt/UnrealRpgMapMaker/main/Art/logo.png"
                            tags="unreal engine 5" />
                        <genericBlock title="RpgClimbing"
                            description="Zelda style climbing system for unreal engine, this project was design to work standalone and almost 0 configurations"
                            link="https://github.com/mariojgt/RpgClimbing"
                            img="https://raw.githubusercontent.com/mariojgt/RpgClimbing/main/Art/logo.png"
                            tags="unreal engine 5" />
                    </div>
                </div>
            </div>
        </div>
    </layout>
</template>

<script setup>
import layout from "./components/layout/app.vue";
// navbar
import navbar from "./components/global/navbar.vue";

// Blocks
import block02 from "./components/Block02.vue";
import genericBlock from "./components/global/GenericBlock.vue";
// Import the core library.
import { randomTheme } from "./helpers/core";
// Update the page tittle
document.title = "Mario Tarosso | Projects";

let emoji = $ref('😎');
const randomEmoji = async (id, name) => {
    const emojisList = ['😎', '😊', '👨‍💻', '😁', '🙄', '🥸'];
    emoji = emojisList[Math.floor(Math.random() * emojisList.length)];
};

setInterval(() => {
    randomEmoji();
}, 3000);

randomTheme();
</script>
