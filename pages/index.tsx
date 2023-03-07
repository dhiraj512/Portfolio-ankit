import Loader from "../Components/Loader";
import Hero from "../Components/Hero";
import Techstack from "../Components/Techstack";
import Project from "../Components/Project";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: -200 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
}

export default function Home() {
  const [showAnimation, setShowAnimation] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setShowAnimation(false);
    }, 2500);
  }, []);

  if (showAnimation) {
    return (
      <Loader />
    );
  } else {
    return (
      <>
        <Head>
          <title>Ankit&apos;s Portfolio</title>
        </Head>
        <motion.div
          className="max-w-screen-sm mx-auto p-6 sm:p-2 scrollbar scrollbar-thumb"
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: 'linear' }}
        >
          <motion.div
            className=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Hero />
          </motion.div>
          <motion.div
            className=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Techstack />
          </motion.div>
          <motion.div
            className=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Project />
          </motion.div>
          <motion.div
            className=""
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Experience />
          </motion.div>
          <Footer />
        </motion.div>
      </>
    )
  }
}