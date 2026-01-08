import { motion } from "framer-motion";
import one from "../../assets/Home/one.png";

const Community = () => {
    return (
        <div className="w-full h-fit ">
        <section className="py-16 md:py-32 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:gap-x-10 gap-y-5 max-w-324 mx-auto">

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="text-center  mx-auto gap-y-5 md:gap-y-10 flex flex-col md:items-start md:text-left items-center"
            >
                <div className="items-start flex flex-col justify-start gap-y-6">
                    <h2 className="text-[#3A0E1F] text-2xl md:text-5xl font-medium leading-[1.2] text-left">
                        Community Exchange
                    </h2>
                    <p className="mt-4 text-[18px] text-gray-700 leading-[1.4] text-left">
                        A moderated marketplace for Oak Ridge residents to buy, sell, and exchange quality home goods with trusted neighbors.
                    </p>
                    <p className="mt-4 text-[18px] text-gray-700 leading-[1.4] text-left">
                        Our community-supported model ($5/month after a free trial) ensures a spam-free, intentional space where every member is invested in keeping our exchange meaningful.
                    </p>
                </div>
                <div>
                    <button className="text-[#FEFEFE] bg-[#3A0E1F] hover:bg-[#FEFEFE] transition-colors duration-300 hover:text-black px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#FEFEFE] cursor-pointer">
                        Join the Community
                    </button>
                </div>

            </motion.div>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="h-90 md:h-130 w-full max-w-137.5 overflow-hidden rounded-lg">
                <img
                    src={one}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                />
            </motion.div>

        </section>
        </div>
    );
};

export default Community;

