<template>
    <div class="hero bg-base-200 preview border-base-300 rounded-b-box rounded-tr-box">
        <div class="hero-content text-center">
            <div class="max-w-md">
                <div class="avatar cursor-pointer " @click="randomTheme">
                    <div class="
                w-24
                rounded-full
                ring ring-primary ring-offset-base-100 ring-offset-2
              ">
                        <img src="https://raw.githubusercontent.com/mariojgt/mariojgt/main/mario_avatar.png" />
                    </div>
                </div>

                <h1 class="text-5xl font-bold p-3">Mario Jose Goes Tarosso</h1>
                <div class="badge">Laravel</div>
                <div class="badge badge-primary">Unreal Engine</div>
                <div class="badge badge-secondary">php</div>
                <div class="badge badge-accent">vue js</div>
                <div class="badge badge-outline">Tailwind</div>
                <div class="badge badge-secondary badge-outline">Node js</div>

                <div class="btn-group justify-center p-5">
                    <a href="https://github.com/mariojgt" class="btn btn-primary"><svg
                            xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg></a>
                    <a href="https://www.linkedin.com/in/mariojgt/" class="btn btn-primary"><svg
                            xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path
                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg></a>
                    <a href="https://www.youtube.com/channel/UC6wn6zd5JYJa3rzx1B12Orw/videos" class="btn btn-primary">
                        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="40" height="40"
                            viewBox="0 0 461.001 461.001" style="enable-background: new 0 0 461.001 461.001"
                            xml:space="preserve">
                            <g>
                                <path style="fill: #f61c0d" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
		C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
		c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </svg>
                    </a>
                    <a href="https://www.udemy.com/user/mario-jose-goes-tarosso/" class="btn btn-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 64" width="40" height="40">
                            <path
                                d="M141.58 40.23a3.83 3.83 0 0 0-1.693-.796c-3.655 3.643-8.115 7.48-12.075 10.06-1.827 1.214-4.126 1.82-5.647 1.82-3.503 0-5.025-3.34-5.482-8.65-.61-7.13-1.02-15.672-1.02-28.873 0-13.54-3.073-22.743-11.258-23.465-.346-.03-.696-.052-1.06-.052-5.025 0-7.462 2.58-10.66 9.104-2.74 5.613-7.004 13.806-14.92 29.282C70.913 42.014 63.3 53.85 56.75 62.042c-1.824 2.27-3.265 3.83-4.62 4.72-.905.596-1.774.894-2.688.894-2.585 0-4.47-2.18-5.1-7.26-.15-1.207-.23-2.577-.23-4.12 0-10.47 3.96-27.462 10.8-52.498 5.025-18.206 2.894-30.646-8.07-30.646h-.123l-.007.002c-2.483.03-4.54.928-6.524 2.49-1.952 1.537-3.906 4.857-5.73 9.322C32.413-10.03 19.91 15.047.014 27.966c-.234 4.912 2.546 9.82 8.18 10.353 5.13.486 8.77-1.676 13.46-4.825a1296.183 1296.183 0 0 0-1.858 8.416l-.652 2.986a83.792 83.792 0 0 0-1.417 8.52C14.92 78.494 26.543 90.87 40.155 90.87c2.275 0 4.53-.27 6.767-.84C61.92 86.226 76.36 69.023 93.448 29.42c-.26 4.308-.286 8.33-.1 12.065 1.125 22.697 10.103 29.507 22.787 29.507 9.593 0 18.576-5.006 23.144-11.227 3.35-4.4 4.72-9.256 4.72-13.05 0-2.944-.934-5.295-2.42-6.488"
                                fill="#ea5252" fill-rule="evenodd" />
                        </svg></a>
                </div>
                <p class="py-6">
                    I'm Mario Jose Goes Tarosso, a creative developer and content
                    creator passionate about open source projects.
                </p>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <div class="card-body">
                        <p>If you like my work, consider supporting.</p>
                        <div class="card-actions justify-end">
                            <a href='https://ko-fi.com/D1D5EJZ3P' target='_blank'><img height='36' style='border:0px;height:36px;'
                        src='https://cdn.ko-fi.com/cdn/kofi4.png?v=3' border='0'
                        alt='Buy Me a Coffee at ko-fi.com' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({
    msg: String,
});

// Import the core library.
import { randomTheme } from "./../helpers/core";
</script>
