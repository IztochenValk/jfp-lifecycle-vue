<template>
    <div class="card w-96 bg-base-100 card-md shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Connexion/Inscription</h2>
            <div class="justify-center card-actions flex flex-col">
            <button class="btn btn-primary" @click="$router.push({name: 'login'})">Go To Login</button>
            <button class="btn btn-primary" @click="$router.push({name: 'register'})">Go To Register</button>
            </div>
        </div>
    </div>

</template>

