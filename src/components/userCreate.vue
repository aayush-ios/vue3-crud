<template>
  <div class="pl-2 max-w-sm rounded overflow-hidden shadow-lg">
    <form @submit.prevent="onSubmit">
      <div class="form-group p-10 rounded-md shadow-md bg-white">
        <label>Name</label>
        <input type="text" class="border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider" v-model="form.name" />
      </div>
      <div class="form-group p-10 rounded-md shadow-md bg-white">
        <label>Email</label>
        <input v-model="form.email" class="form-control border border-gray-500 rounded-md inline-block py-2 px-3 w-full text-gray-600 tracking-wider" type="email" required />
      </div>
      <button type="submit" class="w-full text-ceenter px-4 py-3 bg-blue-500 rounded-md shadow-md text-white font-semibold">Create User</button>
    </form>
  </div>
</template>

<script>
import { createUser } from "@/firebase";
import { reactive } from "vue";

export default {
  setup() {

    const form = reactive({
      name: "",
      email: "",
    });

    const onSubmit = async () => {
      await createUser({ ...form });
      form.name = "";
      form.email = "";
    };

    return {
      form,
      onSubmit,
    };
  }
}
</script>