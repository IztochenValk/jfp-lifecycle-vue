<template>
  <div class="card w-full max-w-lg shadow-xl">
    <div class="card-body info" v-show="showInfo">
      <h5 class="card-title text-base-content">👤 {{ name }}</h5>
      <div class="text-base-content opacity-80">🆔 {{ id }}</div>
      <div class="text-base-content opacity-80">📧 {{ email }}</div>
      <div class="text-base-content opacity-80">📱 {{ phone }}</div>
      <div class="text-base-content opacity-80">
        <div v-if="premium == true">
            un ami en or 💎ᴠɪᴘ
            <div class="badge badge-warning">premium</div>
        </div>
        <div v-else>
            Un ami en Plomb 😞
            <div class="badge">standard</div>
        </div>
      </div>
    </div>
      <div>
        <button class="btn btn-accent" @click="updatePremium">Update Premiums</button>
        <button class="btn btn-success" @click="hideInfo">{{showInfo == true? 'Hide Info' : 'Show Info'}}</button>
      </div>

  </div>
</template>

<script setup>

import { ref, computed } from 'vue'

const showInfo = ref(true);


const props = defineProps({
  name:  { type: String, required: true },
  id:    { type: String, required: true },

  email: {
    type: String,
    required: true,
    validator: v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(v)
  },

  phone: {
    type: String,
    required: true,
    validator: v => /^((\+33\s?(?:\(0\)\s?)?)|0)[1-9](?:[ .-]?\d{2}){4}$/.test(v)
  },

  premium: { type: Boolean, default: false }
})

const emit = defineEmits(['update-premium'])

function updatePremium() {
  emit('update-premium', { id: props.id })
}

function hideInfo(){
  showInfo.value = !showInfo.value
}
</script>
