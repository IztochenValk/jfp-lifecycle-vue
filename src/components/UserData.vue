<template>
        <div class="card w-full max-w-md bg-white text-gray-800 shadow-lg border border-gray-200">
      <div class="card-body">
        <h2 class="card-title text-lg mb-4">
          Composant Formulaire d'édition ✏️
        </h2>

        <form class="flex flex-col gap-4" @submit.prevent="updateUser">
          <label class="form-control w-full">
            <span class="label-text">Votre nom</span>
            <input
              v-model="user.name"
              type="text"
              placeholder="Entrez votre nom"
              class="input input-bordered w-full"
            />
          </label>

          <label class="form-control w-full">
            <span class="label-text">Votre âge</span>
            <input
              v-model.number="user.age"
              type="number"
              min="0"
              class="input input-bordered w-full"
            />
          </label>
          <button class="btn btn-primary mt-2">Mettre à jour</button>
          <br>
          <span v-show="error" class="text-red-500">Le formulaire comporte une erreur</span>
         </form>
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    
    const emit = defineEmits(['update-user'])

    const { error } = defineProps({ 
        error: Boolean 
    })

 
    const user = ref({
        name: '',
        age: '', 
        error: false
    })

    function updateUser() {
        emit('update-user', (() => {
            let nameLength = user.value.name.length 
            if (nameLength > 0 && nameLength <30 && user.value.age > 0){
                return { name: user.value.name, age: user.value.age }
            }
            return null
        })()
    )}

</script>
