<template>
    <div
        class=" h-screen w-4xl gap-7 border-4 border-gray-300 bg-white shadow-2xl rounded-lg text-center space-y-6 flex items-center justify-center flex-col">
        <img class="border-4 border-gray-400 rounded-full w-76 h-76 shadow-lg mx-auto" src="../assets/logo.png"
            alt="Cafe Logo" />

        <h1 class="text-4xl font-extrabold text-gray-900">TürkoğluMado</h1>
        <h4 class="text-2xl text-gray-700 font-medium">HOŞGELDİNİZ</h4>
        <router-link to="/home">
            <button class="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
                Menüye Git
            </button>
        </router-link>
    </div>
</template>