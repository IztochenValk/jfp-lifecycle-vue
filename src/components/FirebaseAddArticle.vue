<template>
  <div class="mx-auto max-w-xl p-4 md:p-8">
    <h1 class="text-3xl font-bold text-center mb-6 text-primary">Ajouter un Nouvel Article</h1>

    <div class="card bg-base-100 shadow-xl border border-base-200">
      <div class="card-body">
        <form @submit.prevent="addArticle" class="space-y-4">
          <div class="form-control">
            <label class="label" for="article-title">
              <span class="label-text">Titre de l'article</span>
            </label>
            <input
              id="article-title"
              v-model="title"
              type="text"
              class="input input-bordered w-full"
              placeholder="Ex: Les bases de Vue 3"
              required
            />
          </div>

          <div class="form-control">
            <label class="label" for="article-content">
              <span class="label-text">Contenu de l'article</span>
            </label>
            <textarea
              id="article-content"
              v-model="content"
              class="textarea textarea-bordered h-32 w-full"
              rows="5"
              placeholder="Rédigez le contenu ici…"
              required
            ></textarea>
          </div>

          <div class="card-actions justify-end pt-4">
            <button :disabled="sending" type="submit" class="btn btn-primary w-full md:w-auto">
              {{ sending ? 'Ajout…' : "Ajouter l'Article" }}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ArticleDataService from '../services/ArticleDataService'

const title = ref('')
const content = ref('')
const sending = ref(false)

const addArticle = async () => {
  sending.value = true
  try {
    const article = {
      title: title.value.trim(),
      content: content.value.trim(),
      timestamp: Date.now(),
    }
    console.log('addArticle() →', article)
    const res = await ArticleDataService.create(article)
    console.log('push OK? res =', res)
    alert('Article ajouté avec succès !')
    title.value = ''
    content.value = ''
  } catch (e) {
    console.error('Erreur lors de l’ajout de l’article :', e)
    alert('Une erreur est survenue. Regarde la console et les Rules.')
  } finally {
    sending.value = false
  }
}
</script>

<style scoped>
</style>
