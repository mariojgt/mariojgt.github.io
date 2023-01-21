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
                            description="Wind-Notify offers a seamless way to integrate toast notifications into your website or application using the popular Tailwind CSS and Daisy UI frameworks. With minimal setup required, you can quickly and easily display notifications that fit seamlessly with your project's existing design."
                            link="https://github.com/mariojgt/wind-notify"
                            img="https://raw.githubusercontent.com/mariojgt/wind-notify/main/art/logo_large.png"
                            tags="tailwind, javascript" />
                        <genericBlock title="Skeleton Admin"
                            description="Laravel Starting Point is a pre-configured, ready-to-use boilerplate that includes frontend and backend authentication, as well as 2-factor authentication (2FA) and the Vue.js and Tailwind CSS frameworks. This package provides developers with a quick and easy way to get started on a new Laravel project, with all the necessary features and functionalities already in place."
                            link="https://github.com/mariojgt/skeleton-admin"
                            img="https://raw.githubusercontent.com/mariojgt/skeleton-admin/master/Publish/Art/logo.png"
                            tags="laravel,tailwind, vuejs" />
                        <genericBlock title="Master inventory"
                            description="Master Inventory is a user-friendly and robust inventory management system, specifically tailored for use in any type of game. Designed to be simple and intuitive, it allows game developers to easily manage and track player inventory, ensuring a seamless gaming experience."
                            link="https://www.unrealengine.com/marketplace/en-US/product/master-inventory"
                            img="https://cdn1.epicgames.com/ue/product/Thumbnail/MasterInventory_thumb-284x284-f18d1dab69231c9ba9e392092b196882.png?resize=1&w=300"
                            tags="Unreal engine" />
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 pt-10">
                        <genericBlock title="Castle"
                            description="The Laravel 2-Step Verification package is a simple and effective solution for adding an extra layer of security to your application. It is designed to be easy to implement and expand, making it a great choice for developers looking to quickly and efficiently add 2-step verification to their projects."
                            link="https://github.com/mariojgt/castle"
                            img="https://raw.githubusercontent.com/mariojgt/castle/main/Publish/Art/logo.png"
                            tags="laravel,vuejs,tailwind,2fa" />
                        <genericBlock title="Biscotto"
                            description="The Laravel GDPR Cookie Policy package simplifies compliance with GDPR regulations by providing an easy-to-use solution for managing and displaying cookie consent on your website."
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
                        <genericBlock title="Magnifier" description="The Laravel Media Manager is a user-friendly package that makes it simple to integrate and manage media files within your application."
                            link="https://github.com/mariojgt/magnifier"
                            img="https://raw.githubusercontent.com/mariojgt/magnifier/main/Publish/art/logo.png"
                            tags="laravel,api, tailwind" />
                        <genericBlock title="UnrealRpgMapMaker"
                            description="The RPG Map Maker package offers a comprehensive solution for creating and customizing maps in RPG games, with features such as a radar, waypoints, and more."
                            link="https://github.com/mariojgt/UnrealRpgMapMaker"
                            img="https://raw.githubusercontent.com/mariojgt/UnrealRpgMapMaker/main/Art/logo.png"
                            tags="unreal engine 5" />
                        <genericBlock title="RpgClimbing"
                            description="The Zelda-style climbing system for Unreal Engine is a standalone project designed to provide realistic and smooth climbing mechanics, with minimal setup and configuration required."
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
