import { motion } from "framer-motion";
import cyberpunksamurai from "../assets/cyberpunksamurai.jpeg";
import "../index.css";

export default function MainBodyBgArt() {
  return (
    <main className="w-full max-w-full px-2 sm:px-4 md:px-6 lg:px-8 relative bg-black text-white min-h-screen flex items-center justify-center p-2 sm:p-4 overflow-hidden">
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
        className="absolute w-auto h-auto max-w-[70%] sm:max-w-[60%] md:max-w-[50%] lg:max-w-[40%] max-h-[60vh] clipped-image z-0 opacity-50"
      />

      {/* Foreground H1 */}
      <h1
        className="w-full absolute z-10 text-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-['Varino'] px-2 sm:px-4"
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
