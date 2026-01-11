
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ItemList from "../components/shopCategory.tsx/ItemList";

/* =======================
   API TYPES
======================= */
type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

type TotalItems = {
  totalItems: number;
};


const Shop = () => {
  const [query, setQuery] = useState<string>("");
  const [totalItems, setTotalItems] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const item = "New Furnishings";


  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (item.toLowerCase().includes(query.toLowerCase())) {
      alert(`"${query}" is found in "${item}"`);
    } else {
      alert(`"${query}" not found`);
    }
  };


  useEffect(() => {
    const fetchTotalItems = async () => {
      try {
        const response = await fetch("/api/cart/total");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result: ApiResponse<TotalItems> = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Failed to fetch total items");
        }

        setTotalItems(result.data.totalItems);
      } catch (error) {
        console.error("getTotalItems error:", error);
        setTotalItems(0); // safe fallback
      } finally {
        setLoading(false);
      }
    };

    fetchTotalItems();
  }, []);



  return (
    <div className="w-full flex flex-col justify-center items-center py-10 px-5 md:px-10 gap-y-6 md:gap-y-15 ">
      <div className="w-full flex flex-col justify-center items-center gap-y-4 md:gap-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col md:flex-row md:justify-between md:items-center w-full max-w-324 gap-6"
        >
          {/* Title */}
          <h2 className="text-[#3A0E1F] text-2xl md:text-5xl font-medium leading-[1.2] text-center md:text-left flex-1">
            New Furnishings
          </h2>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="flex items-center w-full md:w-auto bg-white rounded-lg border border-[#B6BDC4] shadow-md overflow-hidden"
          >
            <input
              type="text"
              placeholder="Search Product by Name, SKU"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 px-4 py-2 text-gray-700 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-primary  p-2 text-gray-700"
              aria-label="Search"
            >
              <FiSearch className="w-5 h-5" />
            </button>
          </form>
        </motion.div>

        {/* TOTAL ITEMS */}
        < div className="text-neutral700  text-body-lg font-normal flex justify-start items-start gap-x-4 text-left w-full max-w-324">

          <p className="flex justify-center items-center gap-x-2.5"> <div className="w-1 h-1 bg-neutral-700 rounded-full"></div> {loading ? "Loading..." : ` ${totalItems} Items`} </p>
          <p className="flex justify-center items-center gap-x-2.5"> <div className="w-1 h-1 bg-neutral-700 rounded-full"></div>
            All available for local pickup
          </p>
        </div>


      </div>
      <div>
        <ItemList />
      </div>

    </div>
  );
};

export default Shop;
