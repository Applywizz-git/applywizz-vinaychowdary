import { motion } from "framer-motion";
import profile from "@/assets/profile.png";

const ProfileImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative mx-auto rounded-[2rem] overflow-hidden shadow-2xl 
                 border-4 border-accent hover:shadow-[0_0_25px_8px_rgba(16,185,129,0.6)] 
                 transition-all duration-500"
    >
      <img
        src={profile}
        alt="Vinay Dhulipalla"
        className="w-[320px] h-[420px] object-cover"
      />
      <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/10 rounded-full blur-3xl"></div>
    </motion.div>
  );
};

export default ProfileImage;
