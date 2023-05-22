import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Quote({ title, imgURL, name }) {
  const mockData = [
    {
      title: "A breathtaking experience from Just-Fit",
      imgURL:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      name: "Veronica Smith",
    },
    {
      title: "My life has changed because of Just-Fit",
      imgURL:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
      name: "Jonathan Shaun",
    },
    {
      title: "Fantastic platform with great trainers",
      imgURL:
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
      name: "Tanya Burner",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % mockData.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const quote = mockData[index];

  return (
    <div className="bg-main-dark-purple flex justify-center items-center">
      <div className="container text-white bg-main-dark-purple rounded-lg  p-8 mt-6">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 1 }}
        >
          <h1 className="title-quote text-3xl italic text-center font-extralight mb-4">
            {`"${quote.title}"`}
          </h1>
          <div className="grouped-img flex items-center justify-center gap-x-10 gap-y-2">
            <img
              className="img-author w-32 h-32 object-cover rounded-full"
              src={quote.imgURL}
              alt="user review image"
            />
            <p className="text-2xl">{quote.name}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Quote;
