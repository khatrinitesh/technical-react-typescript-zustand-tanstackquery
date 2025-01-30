import { create } from "zustand";
import { Post, PostStore } from "../interface";

export const usePostsStore = create<PostStore>((set)) => ({
    posts:[],
    setPosts:(posts:Post[]?
})