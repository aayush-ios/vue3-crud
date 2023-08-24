import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { ref, onUnmounted } from "vue";

const config = {
  apiKey: "AIzaSyBpViE9Y8mqOzfNt5JsXFbpvkUCaa_Atk4",
  authDomain: "vue3-crud-dd2eb.firebaseapp.com",
  projectId: "vue3-crud-dd2eb",
  storageBucket: "vue3-crud-dd2eb.appspot.com",
  messagingSenderId: "661167900268",
  appId: "1:661167900268:web:5bce4f08ea07a194f0fa49",
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const usersCollection = db.collection("users");

export const createUser = (user) => {
  return usersCollection.add(user);
};

export const getUsers = async (id) => {
  const user = await usersCollection.doc(id).get();
  return user.exists ? user.data() : null;
};

export const updateUser = (id, user) => {
  return usersCollection.doc(id).set(user);
};

export const deleteUser = (id) => {
  return usersCollection.doc(id).delete();
};

export const useLoadUsers = () => {
  const users = ref([]);
  const close = usersCollection.onSnapshot((snapshot) => {
    users.value = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });
  onUnmounted(() => {
    close();
  });
  return users;
};
