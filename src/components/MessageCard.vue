<template>
  <div class="card w-full max-w-lg shadow-xl">
    <div class="card-body">
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
  </div>
</template>

<script setup>
defineProps({
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
</script>
