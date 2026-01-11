// import logo from "../assets/Images/logo.png";
// import facebook from "../assets/Home/facebook.svg"
// import instragram from "../assets/Home/instagram.svg"
// import linkedin from "../assets/Home/linkedin.svg"
// import { useState } from "react";
// import { FiArrowRight } from "react-icons/fi"; 
// const Footer = () => {
//  const SubscribeForm = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Subscribed Email:", email);
//     // এখানে API call বা subscription logic যোগ করুন
//   };
//     return (
//         <div className="bg-[#230813] w-full flex justify-center items-center">
//             <div className="w-full max-w-324  px-5 py-5">
//                 <div className="flex flex-col gap-8">
//                     <div className="flex flex-col gap-y-4">
//                         <img className="w-14.5 h-14 cursor-pointer" src={logo} alt="Logo" />
//                         <p className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%] max-w-62">Modular sofas for a sustainable, design-forward life.</p>
//                     </div>

//                     <div className="flex flex-row gap-x-3">
//                         <img className="h-6 w-6 md:h-8.5 md:w-8.5 hover:opacity-50 transition-opacity duration-500" src={facebook} alt="" />
//                         <img className="h-6 w-6 md:h-8.5 md:w-8.5 hover:opacity-50 transition-opacity duration-500" src={instragram} alt="" />
//                         <img className="h-6 w-6 md:h-8.5 md:w-8.5 hover:opacity-50 transition-opacity duration-500" src={linkedin} alt="" />
//                     </div>
//                 </div>
//                 <div className="w-full flex flex-col gap-y-6">
//                   <div>
//                     <p className="text-(--Neutral-100,#FEFEFE) font-[Manrope] text-[18px] font-medium leading-[140%] tracking-[0.27px]">
//                           Company
//                     </p>
//                   </div>
//                   <ul className="w-full flex flex-col gap-y-3">
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Home</li>
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Service</li>
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Service</li>

//                   </ul>
//                 </div>


//                 <div className="w-full flex flex-col gap-y-6">
//                   <div>
//                     <p className="text-(--Neutral-100,#FEFEFE) font-[Manrope] text-[18px] font-medium leading-[140%] tracking-[0.27px]">
//                           Support
//                     </p>
//                   </div>
//                   <ul className="w-full flex flex-col gap-y-3">
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">About</li>
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Contact Us</li>
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Contact Us</li>
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Privacy Policy</li>
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%]">Terms & Conditions</li>

//                   </ul>
//                 </div>




//                 <div className="w-full flex flex-col gap-y-6">
//                   <div>
//                     <p className="text-(--Neutral-100,#FEFEFE) font-[Manrope] text-[18px] font-medium leading-[140%] tracking-[0.27px]">
//                      Join our community
//                     </p>
//                   </div>
//                   <ul className="w-full flex flex-col gap-y-3">
//                     <li className="text-(--Neutral-500,#B6BDC4) font-[Manrope] text-[16px] font-normal leading-[140%] max-w-[276px]">Receive exclusive offers and a look behind the scenes.</li>

//                   <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-md mx-auto flex"
//     >
//       {/* Email Input */}
//       <input
//         type="email"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//         className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
//       />

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="bg-[var(--color-primary)] hover:bg-blue-600 transition-colors text-white px-4 rounded-r-lg flex items-center justify-center"
//       >
//         <FiArrowRight className="w-5 h-5" />
//       </button>
//     </form>

//                   </ul>
//                 </div>

//             </div>
//         </div>
//     );
// };

// export default Footer;
import logo from "../assets/Images/logo.png";
import facebook from "../assets/Home/facebook.svg";
import instragram from "../assets/Home/instagram.svg";
import linkedin from "../assets/Home/linkedin.svg";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const Footer = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("Subscribed Email:", email);
        // API call or subscription logic here
    };

    return (
        <footer className="bg-[#230813] w-full flex flex-col justify-center items-center px-5 py-10 md:py-20 gap-y-10">
            <div className="w-full max-w-324  flex flex-col md:flex-row gap-10">

                {/* Logo & Description */}
                <div className="flex flex-col gap-4 md:w-1/4">
                    <img className="w-14 h-14 cursor-pointer" src={logo} alt="Logo" />
                    <p className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] w-full max-w-[250px]">
                        Modular sofas for a sustainable, design-forward life.
                    </p>
                    <div className="flex gap-3 mt-2">
                        <img className="h-6 w-6 md:h-8 md:w-8 hover:opacity-50 transition-opacity duration-500" src={facebook} alt="Facebook" />
                        <img className="h-6 w-6 md:h-8 md:w-8 hover:opacity-50 transition-opacity duration-500" src={instragram} alt="Instagram" />
                        <img className="h-6 w-6 md:h-8 md:w-8 hover:opacity-50 transition-opacity duration-500" src={linkedin} alt="LinkedIn" />
                    </div>
                </div>

                {/* Company Links */}
                <div className="flex flex-col gap-3 md:w-1/6">
                    <p className="text-[var(--Neutral-100,#FEFEFE)] font-[Manrope] text-[18px] font-medium leading-[140%] tracking-[0.27px]">
                        Company
                    </p>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">Home</li>
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">Service</li>
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">About</li>
                    </ul>
                </div>

                {/* Support Links */}
                <div className="flex flex-col gap-3 md:w-1/6">
                    <p className="text-[var(--Neutral-100,#FEFEFE)] font-[Manrope] text-[18px] font-medium leading-[140%] tracking-[0.27px]">
                        Support
                    </p>
                    <ul className="flex flex-col gap-2">
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">About</li>
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">Contact Us</li>
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">Privacy Policy</li>
                        <li className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] cursor-pointer hover:text-white">Terms & Conditions</li>
                    </ul>
                </div>

                {/* Subscribe Form */}
                <div className="flex flex-col gap-3 md:w-1/3">
                    <p className="text-[var(--Neutral-100,#FEFEFE)] font-[Manrope] text-[18px] font-medium leading-[140%] tracking-[0.27px]">
                        Join our community
                    </p>
                    <p className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-normal leading-[140%] max-w-[276px]">
                        Receive exclusive offers and a look behind the scenes.
                    </p>

                    <form onSubmit={handleSubmit} className="w-full flex mt-2 max-w-md">
                        {/* Email Input */}
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="flex-1 px-4 py-3 rounded-l-[30px] border border-gray-300 bg-transparent text-white
                placeholder:font-[Montserrat] placeholder:text-[14px] placeholder:font-normal placeholder:leading-[156%] placeholder:text-gray-400
                focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
                        />

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-[var(--color-primary)] hover:opacity-80 transition-opacity text-white px-4 rounded-r-[30px] flex items-center justify-center border border-gray-300"
                        >
                            <FiArrowRight className="w-5 h-5" />
                        </button>
                    </form>
                </div>

            </div>

            {/* Copyright */}
            <div className="pt-4 md:pt-6 border-t border-[#98B4D6] w-full max-w-324 flex justify-start">
                <p className="text-[var(--Neutral-500,#B6BDC4)] font-[Manrope] text-[16px] font-medium leading-[140%] tracking-[0.27px] text-center md:text-left">
                    Copyright © 2025 by{" "}
                    <span className="text-[#9CA2C2]">Oak Ridge Exchange</span>
                </p>
            </div>

        </footer>
    );
};

export default Footer;

