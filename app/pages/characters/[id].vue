

<template>
  <div class="container mx-auto p-6 space-y-4">
    <NuxtLink to="/characters" class="btn btn-ghost">Retour</NuxtLink>

    <div v-if="!character" class="alert alert-error">Personnage introuvable</div>

    <div v-else class="card bg-base-100 border shadow-sm">
      <div class="card-body space-y-2">
        <h1 class="text-2xl font-semibold">{{ character.name }}</h1>
        <p class="opacity-70">{{ character.dc }} / {{ character.server }} / {{ character.job }}</p>
        <img :src="character.avatar" class="w-28 h-28 rounded-xl object-cover" alt="" />
        <button class="btn btn-primary" @click="sendLoadstone">Voir sur le loadstone</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import chars from '@/data/ffchars.json'

const route = useRoute()
const charId = Number(route.params.id)
const character = computed(() => chars.find(character => Number(character.id) === charId))

function sendLodestone(character) {
  window.location.href = character.lodestoneUrl
}

</script>