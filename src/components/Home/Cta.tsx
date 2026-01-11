// import cta from "../../assets/Home/cta.jpg";

// const Cta = () => {
//     return (
//         <div className="w-full flex justify-center items-center max-w-324 px-5 md:px-15 py-8 md:py-18 bg-cover bg-center bg-neutral-100">
//             <div
//                 className="flex flex-col gap-y-6 items-center justify-center py-32 bg-cover bg-center w-full  text-center rounded-2xl px-4 md:px-16 lg:px-24 relative"
//                 style={{ backgroundImage: `url(${cta})` }}
//             >
//                 <h2 className="font-[Lora] text-[48px] font-medium leading-[57.6px] text-neutral-100">
//                     Ready to join our community?
//                 </h2>

//                 <p className="font-[Manrope] text-[18px] font-normal leading-[25.2px] tracking-[0.09px] max-w-xl mt-4 text-neutral-100">
//                     Start with a free trial. No credit card required. Cancel anytime.
//                 </p>
//                 <button className="text-[#000000] bg-white transition-colors duration-300 hover:text-black px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#FEFEFE] cursor-pointer">
//                     Contact us
//                 </button>
//             </div>
//             <div className="bg-[linear-gradient(159deg,rgba(0,0,0,0.52)_56.3%,rgba(0,0,0,0.69)_86.15%,rgba(0,0,0,0.8)_111.47%),url('/path-to-image.jpg')] bg-cover bg-center bg-no-repeat">

//             </div>

//         </div>
//     );
// };

// export default Cta;
import cta from "../../assets/Home/cta.jpg";

const Cta = () => {
  return (
    <div className="w-full flex justify-center px-5 md:px-15 py-8 md:py-18">
      <div
        className="relative flex flex-col items-center justify-center text-center gap-y-6 w-full max-w-6xl py-32 px-4 md:px-16 lg:px-24 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: `url(${cta})` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(159deg,rgba(0,0,0,0.52)_56.3%,rgba(0,0,0,0.69)_86.15%,rgba(0,0,0,0.8)_111.47%)]" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-y-6">
          <h2 className="font-[Lora] text-[48px] font-medium leading-[57.6px] text-neutral-100">
            Ready to join our community?
          </h2>

          <p className="font-[Manrope] text-[18px] leading-[25.2px] max-w-xl text-neutral-100">
            Start with a free trial. No credit card required. Cancel anytime.
          </p>

          <button className="bg-white text-black px-6 py-2.5 rounded-[60px] text-lg border border-white transition hover:bg-transparent hover:text-white">
            Contact us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cta;

