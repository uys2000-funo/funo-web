<template>
  <div>
    <NuxtLayout :name="mainStore.getLayout">
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script>

export default defineComponent({
  data() {
    return {
      mainStore: useMainStore()
    }
  }
})
</script>