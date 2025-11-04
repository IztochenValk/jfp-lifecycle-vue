<template>
  <div class="min-h-screen flex flex-col justify-center items-center bg-amber-400 p-6">
    <h1 class="text-xl font-semibold text-center mb-8 text-black">
      Composant Gestion de l'utilisateur
    </h1>

    <UserActive :name="user.name" :age="user.age" />
    <UserData @update-user="updateUser" :error="isError"/>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import UserActive from './components/UserActive.vue'
import UserData from './components/UserData.vue'

const user = ref({
  name: 'Maître Yoda',
  age: 900
})

const isError = ref(false)

function updateUser(newUser) {
  if(!newUser){
    isError.value = true
  }
  user.value = { ...newUser } 
  // ps : Je viens de découvrir qu'on pouvait mettre un spread opérator sur les objets aussi... Dnas ma tête c'était que pour les arrays
  // https://stackoverflow.com/questions/32925460/object-spread-vs-object-assign
}


</script>
