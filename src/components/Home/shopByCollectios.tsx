

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import one from "../../assets/Home/one.png";



const collections = [
  { id: 1, title: "New Furnishings", description: "Contemporary pieces designed for everyday living", image: one },
  { id: 2, title: "Vintage Finds", description: "Unique vintage pieces full of character", image: one },
  { id: 3, title: "Outdoor Collection", description: "Furniture and decor for your outdoor space", image: one },
  { id: 4, title: "Lighting", description: "Illuminate your home with style", image: one },
  { id: 5, title: "Decor", description: "Details that make your space feel complete", image: one },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: "easeOut" as any
    },
  },
};

const ShopByCollections = () => {
  return (
    <div className="bg-[#FAF8F5] w-full h-fit">
    <section className="py-16 md:py-32 px-4 md:px-16 lg:px-24  max-w-324 mx-auto">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center max-w-130 mx-auto"
      >
        <h2 className="text-[#3A0E1F] text-2xl md:text-5xl font-medium leading-[1.2]">
          Shop by Collections
        </h2>
        <p className="mt-4 text-[18px] text-gray-700 leading-[1.4]">
          Every piece is chosen for quality, character, and the ability to make your house feel like home.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
      >
        {collections.slice(0, 3).map((itemData) => (
          <motion.div
            key={itemData.id}
            variants={item}
            className="flex flex-col gap-4  transition-transform duration-500"
          >
            <div className="h-64 overflow-hidden rounded-lg">
              <img
                src={itemData.image}
                alt={itemData.title}
                className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-[20px] font-medium leading-[1.4]">
                {itemData.title}
              </p>
              <p className="text-base text-[#2F343A]">
                {itemData.description}
              </p>
              <Link
                to="/"
                className="text-[#3A0E1F] font-medium transition-all duration-300"
              >
                Explore Collection →
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
    </div>
  );
};

export default ShopByCollections;
