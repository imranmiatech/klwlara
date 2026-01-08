import cta from "../../assets/Home/cta.jpg";

const Cta = () => {
    return (
        <div className="w-full flex justify-center px-15 py-18 bg-cover bg-center">
            <div
                className="flex flex-col gap-y-6 items-center justify-center py-32 bg-cover bg-center w-full max-w-[1296px] text-center rounded-2xl px-4 md:px-16 lg:px-24"
                style={{ backgroundImage: `url(${cta})` }}
            >
                <h2 className="font-[Lora] text-[48px] font-medium leading-[57.6px] text-neutral-100">
                    Ready to join our community?
                </h2>

                <p className="font-[Manrope] text-[18px] font-normal leading-[25.2px] tracking-[0.09px] max-w-xl mt-4 text-neutral-100">
                    Start with a free trial. No credit card required. Cancel anytime.
                </p>
                <button className="text-[#000000] bg-white transition-colors duration-300 hover:text-black px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#FEFEFE] cursor-pointer">
                    Contact us
                </button>
            </div>

        </div>
    );
};

export default Cta;

