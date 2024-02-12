import { create } from "zustand";
import axios from "axios";

export const userStore = create((set) => ({
    users: [],
    currentUser: [],
    query: "",

    setQuery: (e) => {
        set({ query: e.target.value })
    },

    checkUser: (e) => {
        e.preventDefault();
        const { query, users } = userStore.getState(); 
        const user = users.find((item) => item.email === query);
        if (user)
            return set({ currentUser: user });
        console.log("can't find")

    },

    
    fetchUserData: async () => {
        try {
            const result = await axios.get(
              "https://jsonplaceholder.typicode.com/users"
            );
            set({ users: result.data })
        } catch (err) {
            console.log(err);
        }
    },
}));
