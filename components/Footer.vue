<template>
  <footer>
    <Section padding="small" color="primary">
      <div class="relative flex items-center justify-between">
        <div class="flex items-center">
          <Logo size="xl" />
          <div class="flex text-lg gap-2 items-center">
            <div>©</div>
            <div>2013 – {{ new Date().getFullYear() }}</div>
          </div>
        </div>
        <div class="flex items-center gap-x-1">
          <NuxtLink class="flex" to="https://www.instagram.com/greenpenza" target="_blank">
            <i class="i-mdi-instagram text-3xl hover:text-green-300"></i>
          </NuxtLink>
          <NuxtLink class="flex" to="https://vk.com/clubleshozsura" target="_blank">
            <i class="i-mdi-vk text-3xl hover:text-green-300"></i>
          </NuxtLink>
        </div>
      </div>
    </Section>
  </footer>
</template>

<script setup></script>
