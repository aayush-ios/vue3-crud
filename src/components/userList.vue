<template>
    <div class="flex flex-col pt-10">
        <div class="overflow-x-auto">
            <div class="p-1.5 w-full inline-block align-middle">
                <div class="overflow-hidden border rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    ID
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase">
                                    Email
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Edit
                                </th>
                                <th scope="col" class="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase">
                                    Delete
                                </th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-gray-200">
                            <tr v-for="{ id, name, email } in users" :key="id">
                                <td class="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                    {{ id }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ name }}
                                </td>
                                <td class="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                    {{ email }}
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap"><router-link
                                        :to="`/edit/${id}`">
                                        <button class="text-green-500 hover:text-green-700">
                                            Edit
                                        </button>
                                    </router-link>
                                </td>
                                <td class="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                    <button class="text-red-500 hover:text-red-700" @click="deleteUser(id)">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { useLoadUsers, deleteUser } from '@/firebase'

export default {
    setup() {
        const users = useLoadUsers()
        return { users, deleteUser }
    }
}
</script>