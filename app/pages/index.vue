
<template>
  <div class="min-h-screen bg-base-200 p-8 space-y-4">
    <h1 class="text-3xl font-bold mb-4">Personnages</h1>

    <ul class="menu bg-base-100 rounded-box p-4 w-full sm:w-96">
      <li v-for="char in chars" :key="char.id">
        <NuxtLink class="flex items-center gap-3" :to="`/characters/${char.id}`">
          <img
            :src="char.avatar"
            alt=""
            class="w-10 h-10 rounded-full object-cover"
          />
          <span>
            <strong>{{ char.name }}</strong>
            <span class="opacity-70 ml-1 text-sm">({{ char.server }})</span>
          </span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import chars from '@/data/ffchars.json'
</script>

