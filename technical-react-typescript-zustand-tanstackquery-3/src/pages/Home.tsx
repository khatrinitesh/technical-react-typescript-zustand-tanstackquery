import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useCardStore } from "../store/cardStore";
import { fetchPosts } from "./../services/api";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

console.log(posts)

  const { setSelectedCard } = useCardStore();
  return (
    <>
      <div>
        <h2 className="text-xl font-bold mb-4">Home</h2>
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">Error loading data</p>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts?.map((post) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                key={post.id}
                className="p-4 bg-white rounded shadow cursor-pointer"
                onClick={() => setSelectedCard(post)}
              >
                <h3 className="font-semibold">{post.id} - {post.title}</h3>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                  {post.body}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
