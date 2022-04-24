<template>
  <!-- Navbar -->
  <div class="w-full navbar bg-base-300">
    <div class="flex-1 px-2 mx-2">
      <label for="my-drawer" class="btn btn-square drawer-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </label>
    </div>
    <div class="flex-none hidden lg:block">
      <ul class="menu menu-horizontal">
        <!-- Navbar menu content here -->
        <li><a href="mailto:mariojgt2@gmail.com">Email</a></li>
      </ul>
    </div>
  </div>
</template>
<script setup >
</script>


