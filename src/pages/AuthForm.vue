<template>
  <div class="min-h-screen flex items-center justify-center bg-base-200">
    <div class="card w-full max-w-sm shadow-xl bg-base-100">
      <div class="card-body">
        <h2 class="text-center text-2xl font-semibold mb-4">Connexion</h2>

        <form class="flex flex-col gap-4">
          <fieldset class="fieldset">
            <legend class="fieldset-legend text-sm font-medium mb-2 text-gray-600">
              Informations de connexion
            </legend>

            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input type="email" class="input input-bordered w-full" placeholder="exemple@mail.com" />

            <label class="label mt-3">
              <span class="label-text">Mot de passe</span>
            </label>
            <input type="password" class="input input-bordered w-full" placeholder="••••••••" />
          </fieldset>

          <button type="submit" class="btn btn-primary w-full mt-4">
            Se connecter
          </button>

          <p class="text-center text-sm mt-3 text-gray-500">
            <a href="#" class="link link-hover">Mot de passe oublié ?</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>


<script setup>
import { auth, database } from '../services/firebaseAuth.js'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'

console.log(auth)
</script>
