<template>
    <div class="card w-full border-2 border-primary shadow-xl transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in">
        <figure class="px-5 pt-5">
            <img :src="props.img" alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
            <h2 class="card-title">{{ props.title }}</h2>
            <div v-for="(item, index) in tagsLoop" :key="index" class="badge badge-primary">
                    {{ item }}
            </div>
            <p>{{ props.description }}</p>
            <div class="card-actions">
                <a class="btn btn-primary" :href="props.link">Read More</a>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        default: "mariojgt is heredude",
    },
    description: {
        type: String,
        default: "infor here",
    },
    link: {
        type: String,
        default: "https://tailwindcss.com/docs/grid-template-columns",
    },
    img: {
        type: String,
        default:
            "https://raw.githubusercontent.com/mariojgt/skeleton/master/Publish/Art/skeleton.png",
    },
    tags: {
        type: String,
        default: "php,laravel",
    },
});

let tagsLoop = $ref();

const projectTags = async () => {
    // Build the tags spereate by comma
    tagsLoop = props.tags.split(",");
};

projectTags();
</script>
