<template>
<nav class="bg-red-600 dark:bg-red-600">
  <div class="max-w-screen-xs h-20 flex flex-wrap items-center justify-between mx-5 p-3">
    <router-link to="/" class="flex items-center">
      <svg class="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
  </svg>
  <span class="text-white font-medium p-3 text-lg">Tambah baru</span>
    </router-link>
  </div>
</nav>
<!-- create -->
<div class="container mx-auto p-10">
<section>
  <div class="flex flex-row">
  <div class="basis-1/4">
    <div class="w-[200px] h-[200px] bg-red-50 rounded-full w-48 h-48 bg-no-repeat bg-center">
    <img src="../assets/picture.png" class="p-10" alt="">
  </div>
  <span class="text-red-600 font-semibold text-2xl">Tambahkan Image</span>
  </div>
  <div class="basis-1/2">
    <div class="max-w-full max-h-full p-8 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"> 
     <span class="text-red-600 text-2xl font-semibold">Informasi Umum</span>
     <div class="pt-4">
      <label for="" class="text-gray-600 font-medium">Nomor</label>
      <p class="text-gray-700 font-semibold text-2xl pt-2">#16</p>
      <div class="mb-6 pt-2">
    <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Nama</label>
    <input type="text" id="default-input" class="bg-red-50 border-none text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
    <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Types</label>
    <select id="default" class="bg-red-50 border-none text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
  <option selected></option>
  
</select>
    <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Classfication</label>
    <select id="default" class="bg-red-50 border-none text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
  <option selected></option>
  
</select>
    <label for="default-input" class="block mb-2 text-lg font-medium text-gray-500 dark:text-white">Resistant</label>
    <select id="default" class="bg-red-50 border-none text-sm focus:ring-red-600 focus:border-red-600 block w-full p-2.5">
  <option selected></option>
  
</select>
</div>
     </div>
    </div>
    <div class="max-w-full max-h-full p-8 mt-5 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700"> 
      <span class="text-red-600 text-2xl font-semibold">Evolution</span>
      <div>
        <button type="button" class="mt-3 w-full h-12 focus:outline-none text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
        <span class="">+</span> Tambah  
        </button>
      </div>
  </div>
  </div>
</div>
</section>
</div>
</template>