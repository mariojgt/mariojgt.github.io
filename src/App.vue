<template>
    <layout>
        <!-- <navbar /> -->

        <!-- Block start here -->
        <block01 />

        <div class="grid p-6">
            <div>
                <h1 class="text-4xl font-bold">My Projects</h1>
            </div>
        </div>

        <div class="
        flex flex-col
        lg:grid lg:gap-2
        2xl:gap-6
        lg:grid-cols-3
        2xl:row-span-2 2xl:pb-8
        ml-2
        p-10
        card
        bg-base-300
      ">
            <div>
                <genericBlock title="Wind-Notify"
                    description="Wind-Notify provide a simple and easy way to display tailwind and daisy UI toast notification with almost zero configuration"
                    link="https://github.com/mariojgt/wind-notify"
                    img="https://raw.githubusercontent.com/mariojgt/wind-notify/main/art/logo_large.png"
                    tags="tailwind, javascript" />
            </div>
            <div>
                <genericBlock title="Skeleton Admin"
                    description="Laravel starting point with frontend and backend autentication, comes with 2fa, vue js, tailwind out of the box."
                    link="https://github.com/mariojgt/skeleton-admin"
                    img="https://raw.githubusercontent.com/mariojgt/skeleton-admin/master/Publish/Art/logo.png"
                    tags="laravel,tailwind, vuejs" />
            </div>
            <div>
                <genericBlock title="Castle"
                    description="This Laravel packages has been design to quickly add 2 steps verifications in am very simple way and very easy to expand."
                    link="https://github.com/mariojgt/castle"
                    img="https://raw.githubusercontent.com/mariojgt/castle/main/Publish/Art/logo.png"
                    tags="laravel,vuejs,tailwind,2fa" />
            </div>
            <div>
                <genericBlock title="Biscotto"
                    description="Laravel cookie policy packages to help your website with the GDPR rules."
                    link="https://github.com/mariojgt/biscotto"
                    img="https://raw.githubusercontent.com/mariojgt/biscotto/main/Publish/Image/Biscotto.png"
                    tags="laravel,vanilia js" />
            </div>
            <div>
                <genericBlock title="Gateway"
                    description="This is a Laravel package design to make checkout easy and clean to implement, avaliable integration (Stripe), in the future we going to have some more integrations with others gateways, the paypal is almost there"
                    link="https://github.com/mariojgt/gateway"
                    img="https://raw.githubusercontent.com/mariojgt/gateway/main/Publish/Art/logo.png"
                    tags="laravel,php, stripe, paypal" />
            </div>
            <div>
                <genericBlock title="Magnifier" description="A laravel media manager easy to use an integrate."
                    link="https://github.com/mariojgt/magnifier"
                    img="https://raw.githubusercontent.com/mariojgt/magnifier/main/Publish/art/logo.png"
                    tags="laravel,api, tailwind" />
            </div>
            <div>
                <genericBlock title="UnrealRpgMapMaker"
                    description="Comple solution to make a RPG map maker, with a lot of features, like a radar, waypoints and more."
                    link="https://github.com/mariojgt/UnrealRpgMapMaker"
                    img="https://raw.githubusercontent.com/mariojgt/UnrealRpgMapMaker/main/Art/logo.png"
                    tags="unreal engine 5" />
            </div>
            <div>
                <genericBlock title="RpgClimbing"
                    description="Zelda style climbing system for unreal engine, this project was desing to work standalone and almos 0 configurations"
                    link="https://github.com/mariojgt/RpgClimbing"
                    img="https://raw.githubusercontent.com/mariojgt/RpgClimbing/main/Art/logo.png"
                    tags="unreal engine 5" />
            </div>
        </div>
    </layout>
</template>

<script setup>
import layout from "./components/layout/app.vue";
// navbar
import navbar from "./components/global/navbar.vue";

// Blocks
import block01 from "./components/Block01.vue";
import genericBlock from "./components/global/GenericBlock.vue";
// Import the core library.
import { randomTheme } from "./helpers/core";
// Update the page tittle
document.title = "Mario Tarosso | Projects";

randomTheme();
</script>
