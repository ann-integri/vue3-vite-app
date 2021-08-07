<template>
  <div>Home</div>
  <p>{{ name }}</p>
  <input
    v-model="newName"
    type="text"
  >  <button @click="saveName">
    保存
  </button>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()

const name = computed(() => {
  return store.state.user.name
})

const newName = ref('')

function saveName () {
  store.dispatch('saveName', newName.value)
  newName.value = ''
  router.push('/about')
}
</script>

<style scoped>

</style>
