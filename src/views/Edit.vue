<template>
    <div class="pl-2 max-w-sm rounded overflow-hidden shadow-lg ">
      <label class="mt-10 px-4 py-3 rounded-md shadow-md bg-blue-500" >Edit users</label>
      <form @submit.prevent="update">
        <div class="form-group p-10 rounded-md shadow-md bg-white">
          <label>Name</label>
          <input v-model="form.name" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider" required />
        </div>
  
        <div class="form-group p-10 rounded-md shadow-md bg-white">
          <label>Email</label>
          <input
            v-model="form.email"
            class="form-control border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider"
            type="email"
            required
          />
        </div>
  
        <button type="submit" class="w-full mt-10 text-center px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold">
          Update
        </button>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive, computed, onMounted } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { getUsers, updateUser } from '@/firebase'
  
  export default {
    setup() {
      const router = useRouter()
      const route = useRoute()
      const userId = computed(() => route.params.id)
  
      const form = reactive({ name: '', email: '' })
      onMounted(async () => {
        const user = await getUsers(userId.value)
        console.log(user, userId.value)
        form.name = user.name
        form.email = user.email
      })
  
      const update = async () => {
        await updateUser(userId.value, { ...form })
        router.push('/')
        form.name = ''
        form.email = ''
      }
  
      return { form, update }
    }
  }
  </script>