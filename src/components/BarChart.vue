<template>
  <div class="card w-full max-w-3xl bg-base-100 shadow-xl border border-gray-200 mx-auto">
    <div class="card-body">
      <h2 class="card-title mb-4 text-lg font-semibold text-gray-800">
        Statistiques des Pokémons 🎴
      </h2>

      <div class="h-200 relative">
        <Bar v-if="chartData" :data="chartData" :options="options" />
        <div v-else class="p-4 text-center text-gray-500">
          Chargement du graphique…
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref, onBeforeMount } from 'vue'
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = ref(null)
const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y',
  scales: {
    x: { 
        beginAtZero: true 
    },
    y:{
        barThickness: 140
    }
  },
}

let pokemons = ref([])

onBeforeMount(async () => {
  let pokemonsList = []

  async function retrievePokemons(){
    let res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
    let data = await res.json()
    return data
  }

  async function getEachPokemon(){

    let data = await retrievePokemons() // On récupère tous les 10 pokémon de l'API dans un tableau

    // Chaque fetch est une opération asynchrone, donc pour que ça marche, il faut le mettre dans une promesse et ensuite les exécuter en parallèle avec Promise.all... 
    //Pour chaque Pokémon, map lance une fonction asynchrone qui fait un fetch() et retourne une promesse
    // Du coup, promises devient un tableau de promesses (une par Pokémon)

    let promises = data.results.map(async ({ url, name }) => {

    const res = await fetch(url) //On va chercher les données de chaque pokémon à partir des url qui sont dans les datas

    const singlePokeData = await res.json()
    //Ici, on récupère chaque stat qui nous intéressse, avec find. Les clés correspondent à celles de l'API
    let hp = singlePokeData.stats.find(poke => poke.stat.name === 'hp').base_stat
    let attack = singlePokeData.stats.find(poke => poke.stat.name === 'attack').base_stat
    let defense = singlePokeData.stats.find(poke => poke.stat.name === 'defense').base_stat
    let baseExp = singlePokeData.base_experience
    //puis on retourne un objet contenant chaqune de ses valeurs
    return { 
            name, 
            hp, 
            attack, 
            defense, 
            baseExp 
        }
    })

    let allPromises = await Promise.all(promises)
    pokemonsList.push(...allPromises)
    pokemons.value = allPromises

  }

  function buildPokemonCharts() {

    const labels = pokemonsList.map(pokemon => pokemon.name)
    const hpData = pokemonsList.map(pokemon => pokemon.hp)
    const attackData = pokemonsList.map(pokemon => pokemon.attack)
    const defenseData = pokemonsList.map(pokemon => pokemon.defense)
    const expData = pokemonsList.map(pokemon => pokemon.baseExp)

    chartData.value = {
      labels,
      datasets: [
        { label: 'HP', data: hpData, backgroundColor: '#3B82F6', borderRadius: 10, borderSkipped: 'left' },
        { label: 'Attack', data: attackData, backgroundColor: '#10B981', borderRadius: 10, borderSkipped: 'left' },
        { label: 'Defense', data: defenseData, backgroundColor: '#F59E0B', borderRadius: 10, borderSkipped: 'left' },
        { label: 'Experience', data: expData, backgroundColor: '#94A3B8', borderRadius: 10, borderSkipped: 'left' }
      ]
    }
  }

  await getEachPokemon()
  buildPokemonCharts()
})
</script>

<style scoped>
.container {
  width: 100%;
  height: 360px;
  position: relative;
}
</style>