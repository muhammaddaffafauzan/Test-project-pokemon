<template>
  <nav class="bg-red-600 dark:bg-red-600">
  <div class="max-w-screen-xs flex flex-wrap items-center justify-between mx-5 p-3">
    <a href="/" class="flex items-center">
        <img src="../assets/logo.png" class="h-14 mr-3" alt="Flowbite Logo" />
    </a>
    <router-link to="/create">
    <button type="button"  class="inline-flex items-center justify-center">
      <svg class="w-7 h-7 text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 1v16M1 9h16"/>
  </svg>
    </button>
  </router-link>
  </div>
</nav>
  <div class="container mx-auto p-10">
  <div class="grid grid-cols-5 gap-4">
    <div v-for="item in listPokemon" :key="item.id" class="w-56 h-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div class="p-5">
        <span class="text-gray-600 font-semibold">#{{ item.id }}</span>
        <img src="../assets/logo.png">
        <div class="text-center">
        <span class="text-red-600 font-semibold text-2xl">{{ item.name }}</span>
        <div class="pt-10">
        <span class="bg-lime-500 text-white text-base font-medium mr-3 px-3 py-1.5 rounded text-center">Green</span>
        <span class="bg-purple-800 text-white text-base font-medium mr-3 px-3 py-1.5 rounded text-center">Green</span>
      </div>    
      </div>
    </div>
</div>

  </div>
</div>
</template>
<script>
export default {
  computed: {
    listPokemon() {
      return this.$store.state.data.dataPokemon;
    }
  }
}
</script>