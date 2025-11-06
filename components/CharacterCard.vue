<template>
  <div class="card bg-base-100 border shadow-sm">
    <figure class="p-4">
      <img :src="char.avatar" alt="" class="rounded-xl max-h-40 object-cover" />
    </figure>
    <div class="card-body p-4">
      <h2 class="card-title text-lg">
        {{ char.name }}
        <span class="badge badge-ghost ml-2">{{ char.server }}</span>
      </h2>
      <p class="opacity-70">{{ char.dc }} • {{ char.job }}</p>
      <div class="card-actions justify-end">
        <NuxtLink class="btn btn-primary btn-sm" :to="`/characters/${char.id}`">Voir le perso</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(
  { char: { type: Object, required: true }}
)
</script>
