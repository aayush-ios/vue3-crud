<template>
    <UserCreate />
    <UserList />
  </template>
  
  <script>
  import UserCreate from '@/components/userCreate.vue'
  import UserList from '@/components/userList.vue'
  
  export default {
    name: 'Home',
    components: { UserCreate, UserList }
  }
  </script>