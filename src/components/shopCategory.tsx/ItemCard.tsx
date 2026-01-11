
import { motion } from "framer-motion";

type ItemProps = {
  image: string;
  title: string;
  description: string;
  price: number;
};

const ItemCard = ({ image, title, description, price }: ItemProps) => {
  // Optional: motion variants
  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
    >
      {/* Image */}
      <div className="h-60 md:h-80 overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Text */}
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-medium leading-5 tracking-[0.016em] text-neutral-600">
          {title}
        </p>
        <p className="text-[20px] text-[#3A0E1F] font-medium leading-[28px]">
          {description}
        </p>
        <p className="text-[18px] font-medium leading-[25.2px] tracking-[0.27px] text-[#3A0E1F]">
          ${price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
};

export default ItemCard;
