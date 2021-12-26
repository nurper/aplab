<script setup>
import { computed } from 'vue'
import { useStore } from 'vuex'
import Level from '@/components/Level.vue'
import UserAvatar from '@/components/UserAvatar.vue'
import CardComponent from '@/components/CardComponent.vue'

const store = useStore()

const userName = computed(() => store.state.userName)

</script>

<template>
  <card-component rounded="">
    <level type="justify-around lg:justify-center">
      <user-avatar class="lg:mx-12" />
      <div class="space-y-3 text-center md:text-left lg:mx-12">
        <div class="flex justify-center md:block">
        </div>
        <h1 class="text-2xl">
          Hello, <b>{{ userName }}</b>!
        </h1>
      </div>
    </level>
  </card-component>
</template>
