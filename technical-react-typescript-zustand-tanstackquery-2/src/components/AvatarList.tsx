import { motion } from "framer-motion";
import React from "react";
import { useAvatarStore } from "../store/useAvatarStore";
import { avatars } from "../constants/constants";

const AvatarList:React.FC = () => {
  const { selectedAvatar, selectAvatar } = useAvatarStore();

  return (
    <div className="flex flex-col items-center space-y-6">
      {/* Selected Avatar */}
      <motion.img
        key={selectedAvatar}
        src={selectedAvatar}
        alt="Selected Avatar"
        className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      />

      {/* Avatar Selection */}
      <div className="flex space-x-4">
        {avatars.map((avatar) => (
          <motion.img
            key={avatar.id}
            src={avatar.imageUrl}
            alt={avatar.name}
            className="w-16 h-16 rounded-full cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
            onClick={() => selectAvatar(avatar.imageUrl)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
};

export default AvatarList;
