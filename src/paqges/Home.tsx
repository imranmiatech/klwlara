import Hero from "../assets/Images/Hero.jpg";
import ShopByCollectios from "../components/Home/shopByCollectios";
import Community from "../components/Home/Community";
import Stunning from "../components/Home/Stunning";
import Featured from "../components/Home/Featured";
import Recent from "../components/Home/Recent";
import Cta from "../components/Home/Cta";

const Home = () => {
    return (
        <div>

        
        <div
            className=" flex flex-col items-center justify-center text-center px-4 py-20 bg-cover bg-center gap-y-6 md:gap-y-12 lg:gap-y-12 pt-30 md:pt-42.5 pb-36 md:pb-52.5 lg:pb-52.5"
            style={{ backgroundImage: `url(${Hero})` }}
        >
            <div className="max-w-190 gap-y-6">
                <h1 className="text-[#FEFEFE] font-medium text-3xl md:text-[64px] lg:text-[64px] leading-[1.2]">Community Exchange</h1>
                <p className="text-lg text-[#FDFCFC] leading-[1.4]">
                   A moderated marketplace for Oak Ridge residents to buy, sell, and exchange quality home goods with trusted neighbors.
                </p>
                <p className="text-lg text-[#FDFCFC] leading-[1.4]">
                  Our community-supported model ($5/month after a free trial) ensures a spam-free, intentional space where every member is invested in keeping our exchange meaningful.
                </p>
            </div>
            <div className="flex flex-col md:flex-row gap-x-6 gap-y-4">
                <button className="text-[#FEFEFE] hover:bg-[#FEFEFE] transition-colors duration-300 hover:text-black px-10 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#FEFEFE] cursor-pointer">
                    Login
                </button>
                <button className="text-[#FEFEFE] hover:bg-[#FEFEFE] transition-colors duration-300 hover:text-black px-6 rounded-[60px] py-2.5 font-normal text-lg font-sans border border-[#FEFEFE] cursor-pointer">
                    Join the Community
                </button>
            </div>
            
        </div>
          <ShopByCollectios />
          <Community />
          <Stunning />
          <Featured />
          <Recent/>
          <Cta />
        </div>
    );
};

export default Home;
