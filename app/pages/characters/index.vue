
<template>
  <div class="min-h-screen bg-base-200 p-8">
    <h1 class="text-3xl font-bold mb-8 text-center">Personnages de Final Fantasy</h1>

    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <NuxtLink
        v-for="char in chars"
        :key="char.id"
        :to="`/characters/${char.id}`"
        class="card bg-base-100 shadow-sm hover:shadow-md border border-base-300 transition hover:scale-[1.02] duration-200"
      >
        <div class="card-body flex items-center gap-4 p-4">
          <div class="avatar">
            <div class="w-16 h-16 rounded-xl ring ring-primary ring-offset-base-100 ring-offset-2 overflow-hidden">
              <img :src="char.avatar" :alt="`Avatar de ${char.name}`" />
            </div>
          </div>

          <div class="flex-1">
            <h2 class="card-title text-lg mb-1">{{ char.name }}</h2>
            <p class="text-sm opacity-70">{{ char.server }} — {{ char.dc }}</p>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import chars from '@/data/ffchars.json'
</script>
