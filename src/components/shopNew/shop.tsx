

const Shop = () => {
  return (
    <div className="w-full bg-[#F5F9EF] flex flex-col justify-center items-center">
      <div className="w-full flex flex-col items-center max-w-324 px-4 gap-y-5 md:gap-y-15 py-10 md:py-30">
        <h2 className="text-secondary text-2xl md:text-5xl font-medium leading-[1.2] text-left">
          How Shopping Works
        </h2>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex flex-col items-center gap-5 md:gap-8 p-[40px_32px] flex-[1_0_0] self-stretch raunded-[12px] border border-neutral-500 rounded-xl">
            <div className="bg-primary1 w-18 h-18 rounded-full items-center text-center"><p className="text-center font-lora text-[48px] font-medium leading-[120%] text-white">1</p></div>
            <h4 className="text-center font-lora text-[32px] font-medium leading-[140%]">Browse & Inquire</h4>
            <p className="text-neutral-700 text-center font-body text-base font-normal leading-[140%]">Explore our collections online. When something catches your eye, reach out to reserve or ask questions.</p>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-8 p-[40px_32px] flex-[1_0_0] self-stretch raunded-[12px] border border-neutral-500 rounded-xl">
            <div className="bg-primary1 w-18 h-18 rounded-full items-center text-center"><p className="text-center font-lora text-[48px] font-medium leading-[120%] text-white">1</p></div>
            <h4 className="text-center font-lora text-[32px] font-medium leading-[140%]">Browse & Inquire</h4>
            <p className="text-neutral-700 text-center font-body text-base font-normal leading-[140%]">Explore our collections online. When something catches your eye, reach out to reserve or ask questions.</p>
          </div>
          <div className="flex flex-col items-center gap-5 md:gap-8 p-[40px_32px] flex-[1_0_0] self-stretch raunded-[12px] border border-neutral-500 rounded-xl">
            <div className="bg-primary1 w-18 h-18 rounded-full items-center text-center"><p className="text-center font-lora text-[48px] font-medium leading-[120%] text-white">1</p></div>
            <h4 className="text-center font-lora text-[32px] font-medium leading-[140%]">Browse & Inquire</h4>
            <p className="text-neutral-700 text-center font-body text-base font-normal leading-[140%]">Explore our collections online. When something catches your eye, reach out to reserve or ask questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;