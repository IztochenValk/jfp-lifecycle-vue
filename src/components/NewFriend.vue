<template>
        <div class="flex justify-center items-center w-full  min-h-screen bg-white px-5 py-5">
      <div class="xl:max-w-7xl bg-white drop-shadow-xl border border-black/20 w-full rounded-md flex justify-center items-stretch px-5 xl:px-5 py-5">
        <div class="sm:w-[60%] lg:w-[50%] bg-cover bg-center items-center justify-center hidden md:flex ">

        </div>
        <div class="mx-auto w-full lg:w-1/2 md:p-10 py-5 md:py-0 ">
          <h1 class="text-center text-2xl sm:text-3xl font-semibold text-[#4A07DA]">
            Create Friend
          </h1>
          <div class="w-full mt-5 sm:mt-8">
            <div class="mx-auto w-full sm:max-w-md md:max-w-lg flex flex-col gap-5">
              <div class="flex flex-col sm:flex-row gap-3">
                <div>
                    <input
                    type="text"
                    placeholder="Entrez le nom du nouvel ami"
                    class="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                        @blur="validateName"
                    />
                    <span v-show="errorFields.name" class="text-red-500">La valeur du nom doit être comprise entre 3 et 20 caractères</span>
                </div>

                <input
                  type="text"
                  placeholder="Entrez l'ID du nouvel ami"
                  class="input input-bordered input-primary w-full max-w-xs text-black placeholder:text-black/70"
                    @blur="validateId"
                  />
                    <span v-show="errorFields.id" class="text-red-500">La valeur de l'ID doit être comprise entre 3 et 20 caractères</span>

              </div>

              <div>
              <input
                type="text"
                placeholder="Entrez l'email du nouvel ami"
                class="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                @blur="validateEmail"
                />
                <span v-show="errorFields.email" class="text-red-500">La valeur de l'email est incorrecte</span>
              </div>
              
              
                <div>
              <input
                type="text"
                placeholder="Entrez le numéro de téléphone du nouvel ami"
                class="input input-bordered input-primary w-full text-black placeholder:text-black/70"
                @blur="validatePhone"
                />
                <span v-show="errorFields.phone" class="text-red-500">La valeur du numéro de téléphone est incorrecte</span>
              </div>


              <div class="flex flex-col md:flex-row gap-2 md:gap-4 justify-center items-center">
                <button @click="createAmi" class="btn btn-active btn-primary btn-block max-w-[200px]">
                  Créer le nouvel ami
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script setup>

import {ref} from 'vue';


let nouvelAmi = ref({
    name: '',
    id: '',
    email: '',
    phone: '',
    premium: true
})

const errorFields = ref({
    email: false,
    phone: false,
    name: false, 
    id: false
})

function validatePhone ($event){
    const regexPhone = /^\+?[0-9()\s.-]{7,20}$/
    if(!regexPhone.test($event.currentTarget.value)){
        errorFields.value.phone = true
    }
    else{
        nouvelAmi.value.phone = $event.currentTarget.value
        errorFields.value.phone = false
    }
}

function validateEmail ($event){
    const regexEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!regexEmail.test($event.currentTarget.value)){
        errorFields.value.email = true
    }
    else{
        nouvelAmi.value.email = $event.currentTarget.value
        errorFields.value.email = false
    }
}

function validateName ($event){
    if($event.currentTarget.value.length < 3 ||
        $event.currentTarget.value.length > 20
    ){
        errorFields.value.name = true
  
    }
    else{
        nouvelAmi.value.name = $event.currentTarget.value
        errorFields.value.name = false
    }
}

function validateId ($event){
    if($event.currentTarget.value.length < 3 ||
        $event.currentTarget.value.length > 20
    ){
        errorFields.value.id = true
  
    }
    else{
        nouvelAmi.value.id = $event.currentTarget.value
        errorFields.value.id = false
    }
}

    function createAmi(){
        if(!Object.values(errorFields.value).some(v => v)){
            addFriend()
        }
    }


const emit = defineEmits(['add-friend'])
function addFriend() {
  emit('add-friend', nouvelAmi.value)
}
</script>
