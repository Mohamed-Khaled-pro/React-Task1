import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { motion } from "framer-motion";

function App() {
  return (
    <>
      <motion.h1
        className="font-extrabold text-4xl mt-5 text-center p-5 "
        initial={{ y: 10, rotate: 2 }}
        animate={{ y: 0, rotate: -2 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        Hello, this is my first lab in React
      </motion.h1>
      <div className="mt-10 md:mt-20 p-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Home />
        <About />
      </div>
      <Contact />
      <h2 className="absolute bottom-0 mx-auto my-1 w-full text-center">
        © {new Date().getFullYear()} Mohamed Khaled. All rights reserved.
      </h2>{" "}
    </>
  );
}

export default App;
