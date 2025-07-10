import { motion } from "framer-motion";
import cyberpunksamurai from "../assets/cyberpunksamurai.jpeg";
import "../index.css";

export default function MainBodyBgArt() {
  return (
    <main className="relative bg-black text-white min-h-screen flex items-center justify-center p-4 overflow-hidden">
      {/* Background Animated Image */}
      <motion.img
        src={cyberpunksamurai}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -5, 0, 5, 0],
          rotate: [0, 2, 0, -2, 0],
        }}
        transition={{
          opacity: { duration: 1.2, ease: "easeOut" },
          scale: { duration: 1.2, ease: "easeOut" },
          y: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
          rotate: {
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        className="absolute w-4/5 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg clipped-image z-0 opacity-50"
      />

      {/* Foreground H1 */}
      <h1
        className="absolute z-10 text-4xl sm:text-5xl md:text-6xl font-bold font-['Varino']"
        style={{
          color: "white",
          textShadow:
            "-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000",
        }}
        data-text="WELCOME TO THE GRID"
      >
        WELCOME TO THE GRID
      </h1>
    </main>
  );
}
