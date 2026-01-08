// import { motion } from "framer-motion";
// import Stun from "../../assets/Home/stun.png";

// const Stunning = () => {
//     return (
//         <section className="py-16 md:py-32 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row items-center md:gap-x-10 gap-y-5 bg-[#F5F9EF] justify-center items-center ">

//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                     duration: 0.8,
//                     ease: [0.22, 1, 0.36, 1],
//                 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className="h-90 md:h-154.5 max-w-132.5 overflow-hidden rounded-lg">
//                 <img
//                     src={Stun}
//                     className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
//                 />
//             </motion.div>
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{
//                     duration: 0.8,
//                     ease: [0.22, 1, 0.36, 1],
//                 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 className="text-center  mx-auto gap-y-5 md:gap-y-10 flex flex-col md:items-start md:text-left items-center"
//             >
//                 <div className="items-start flex flex-col justify-start gap-y-6">
//                     <h2 className="text-[#3A0E1F] text-2xl md:text-5xl font-medium leading-[1.2] text-left w-full max-w-183">
//                         Stunning Interiors That Tell Your Story
//                     </h2>
//                     <p className="mt-4 text-[18px] text-gray-700 leading-[1.4] text-left max-w-182">
//                         Our community-supported model ($5/month after a free trial) ensures a spam-free, intentional space where every member is invested in keeping
//                         our exchange meaningful.
//                     </p>
//                     <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
//                         <div className="bg-[#E2E5E9] px-7.25 py-6 gap-x-2 rounded-[10px] flex flex-col items-center justify-center w-full">
//                             <p className="text-[48px] leading-[1.2] text-neutral-800 font-[var(--font-lora)] font-medium">
//                                 90+
//                             </p>
//                             <p className="text-base leading-[1.5] text-neutral-700 font-[var(--font-lora)] font-medium">
//                                 Project Completed
//                             </p>
//                         </div>
//                         <div className="bg-[#E2E5E9] px-7.25 py-6 gap-x-2 rounded-[10px] flex flex-col items-center justify-center w-full">
//                             <p className="text-[48px] leading-[1.2] text-neutral-800 font-[var(--font-lora)] font-medium">
//                                 12+
//                             </p>
//                             <p className="text-base leading-[1.5] text-neutral-700 font-[var(--font-lora)] font-medium">
//                                 Year’s Experience
//                             </p>
//                         </div>
//                         <div className="bg-[#E2E5E9] px-7.25 py-6 gap-x-2 rounded-[10px] flex flex-col items-center justify-center w-full">
//                             <p className="text-[48px] leading-[1.2] text-neutral-800 font-[var(--font-lora)] font-medium">
//                                 32+
//                             </p>
//                             <p className="text-base leading-[1.5] text-neutral-700 font-[var(--font-lora)] font-medium">
//                                 Happy Client
//                             </p>
//                         </div>
//                         <div className="bg-[#E2E5E9] px-7.25 py-6 gap-x-2 rounded-[10px] flex flex-col items-center justify-center w-full">
//                             <p className="text-[48px] leading-[1.2] text-neutral-800 font-[var(--font-lora)] font-medium">
//                                 1200+
//                             </p>
//                             <p className="text-base leading-[1.5] text-neutral-700 font-[var(--font-lora)] font-medium">
//                                 Community Member
//                             </p>
//                         </div>
//                     </div>

//                 </div>
//                 <div>
//                     <button className="text-[#FEFEFE] bg-[#636B2F] hover:bg-[#FEFEFE] transition-colors duration-300 hover:text-black px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#FEFEFE] cursor-pointer">
//                         Contact us
//                     </button>
//                 </div>

//             </motion.div>


//         </section>
//     );
// };

// export default Stunning;

import { motion } from "framer-motion";
import Stun from "../../assets/Home/stun.png";


const Stunning = () => {
    return (
        <div className="bg-[#F5F9EF] w-full h-fit">
        <section className="py-16 md:py-32 px-4 md:px-16 lg:px-24 flex flex-col md:flex-row gap-y-5 md:gap-x-10  justify-center items-center max-w-324 mx-auto">

            {/* Image */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="h-[360px] md:h-[618px] max-w-[530px] overflow-hidden rounded-lg"
            >
                <img
                    src={Stun}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                    alt="Stunning Interior"
                />
            </motion.div>

            {/* Text Content */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center md:items-start text-center md:text-left gap-5 md:gap-10 mx-auto"
            >
                <div className="flex flex-col gap-6 max-w-[730px]">
                    <h2 className="text-[#3A0E1F] text-2xl md:text-5xl font-medium leading-[1.2]">
                        Stunning Interiors That Tell Your Story
                    </h2>
                    <p className="text-[18px] text-gray-700 leading-[1.4]">
                        Our community-supported model ($5/month after a free trial) ensures a spam-free, intentional space where every member is invested in keeping our exchange meaningful.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
                        {[
                            { value: "90+", label: "Project Completed" },
                            { value: "12+", label: "Year’s Experience" },
                            { value: "32+", label: "Happy Client" },
                            { value: "1200+", label: "Community Member" },
                        ].map((stat, idx) => (
                            <div key={idx} className="bg-[#E2E5E9] px-[29px] py-6 rounded-[10px] flex flex-col items-center justify-center">
                                <p className="text-[48px] leading-[1.2] text-neutral-800 font-medium">
                                    {stat.value}
                                </p>
                                <p className="text-base leading-[1.5] text-neutral-700 font-medium">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Button */}
                <button className="text-white bg-[#636B2F] hover:bg-white hover:text-black transition-colors duration-300 px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-white cursor-pointer mt-6 md:mt-0">
                    Contact us
                </button>
            </motion.div>

        </section>
        </div>
    );
};

export default Stunning;


