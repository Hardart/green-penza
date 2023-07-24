<script setup></script>

<template>
  <div>
    <form>
      <select v-model="locale">
        <option value="fr">fr</option>
        <option value="en">en</option>
      </select>
      <p>{{ $t('welcome') }}</p>
    </form>
  </div>
</template>
