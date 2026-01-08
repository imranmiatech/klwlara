import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";


import one from "../../assets/Home/one.png";

const collections = [
    { id: 1, title: "Vintage & Sourced", description: "Mid-Century Lounge Chair", price: "120", image: one },
    { id: 2, title: "New Decores", description: "Wood sofa set", price: "80", image: one },
    { id: 3, title: "New Furnishings", description: "Mid-Century Lounge Chair", price: "455", image: one },
    { id: 4, title: "Interior Design", description: "Mid-Century Lounge Chair", image: one },
    { id: 5, title: "Decor", description: "Details that make your space feel complete", image: one },
];

// Define motion variants correctly
const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: "easeOut", // ✅ use string for easing
        },
    },
};

const Recent = () => {
    return (
        <div className="bg-[#FEFEFE] w-full">
            <section className="py-16 md:py-32 px-4 md:px-16 lg:px-24 max-w-[1300px] mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} // ✅ string
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex flex-col gap-4 md:gap-6"
                >
                    <h2 className="text-[#3A0E1F] text-2xl md:text-5xl font-medium leading-[1.2] text-left">
                        Featured From Our Shop
                    </h2>
                    <div className="flex justify-between items-center">
                        <p className="text-[18px] text-gray-700 leading-[25.2px]">
                            Newly arrived and ready for pickup
                        </p>
                        <Link
                            to="/"
                            className="text-[#3A0E1F] font-medium transition-all duration-300 hover:text-gray-800"
                        >
                            View all →
                        </Link>
                    </div>
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16"
                >
                    {collections.slice(0, 3).map((itemData) => (
                        <motion.div
                            key={itemData.id}
                            variants={item}
                            className="flex flex-col gap-4 transition-transform duration-500 border border-neutral-300 rounded-[10px] "
                        >
                            <div className="h-60 md:h-80 overflow-hidden rounded-lg">
                                <img
                                    src={itemData.image}
                                    alt={itemData.title}
                                    className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                                />
                            </div>

                            <div className="flex flex-col gap-2 pt-5 pb-6 px-2.5">
                                <div className="flex justify-between items-center">
                                    <p className="text-[20px] text-[#3A0E1F] font-medium leading-[28px]">
                                        {itemData.description}
                                    </p>
                                    <p className="text-[18px] font-medium leading-[25.2px] tracking-[0.27px] text-[#3A0E1F]">
                                        ${itemData.price}
                                    </p>
                                </div>
                                <p className="text-[14px] font-medium leading-5 tracking-[0.016em] text-neutral-600">{itemData.title}</p>

                                <p className="font-sans text-sm font-normal leading-[20px] tracking-[0.224px] flex justify-between
">
                                    <p>
                                        6 hours ago Interior
                                    </p>
                                    <p>
                                        Interior design </p>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
};

export default Recent;
