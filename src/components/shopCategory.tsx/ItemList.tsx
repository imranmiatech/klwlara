
import { useState } from "react";
import { data, type Item } from "./items";
import ItemCard from "./ItemCard";
import { HiOutlineChevronDown, HiOutlineChevronUp, HiOutlineMenu, HiOutlineX } from "react-icons/hi";

const ITEMS_PER_PAGE = 9;
type PriceFilter = "All Price" | "Under $200" | "$200 - $500" | "Over $500";

const ItemList = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedPrice, setSelectedPrice] = useState<PriceFilter>("All Price");
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false); // Mobile toggle
  const [isShopServiceOpen, setIsShopServiceOpen] = useState<boolean>(true); // Dropdown toggle
  const [isPriceOpen, setIsPriceOpen] = useState<boolean>(true);
  const categories = ["All", "Vintage & Sourced", "New Decor", "New Furnishings"];

  // Filter items
  let filteredItems: Item[] =
    selectedCategory === "All"
      ? data
      : data.filter((item: Item) => item.category === selectedCategory);

  filteredItems = filteredItems.filter((item: Item) => {
    if (selectedPrice === "Under $200") return item.price < 200;
    if (selectedPrice === "$200 - $500") return item.price >= 200 && item.price <= 500;
    if (selectedPrice === "Over $500") return item.price > 500;
    return true;
  });

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="max-w-[1296px] mx-auto px-4 flex flex-col lg:flex-row gap-6">

      {/* Left Filter */}
      <div className="lg:w-[298px] flex-shrink-0">

        {/* Mobile filter toggle */}
        <div className="lg:hidden flex justify-between items-center mb-4">
          <h2 className="text-[#3A0E1F] font-title text-[20px] font-medium leading-[28px] border border-gray-200">Filters</h2>
          <button onClick={() => setIsFilterOpen(!isFilterOpen)}>
            {isFilterOpen ? (
              <HiOutlineX className="w-6 h-6 text-[#3A0E1F]" />
            ) : (
              <HiOutlineMenu className="w-6 h-6 text-[#3A0E1F]" />
            )}
          </button>
        </div>

        {/* Filters */}
        <div className={`flex flex-col gap-y-4 gap-6 lg:block ${isFilterOpen ? "block" : "hidden lg:block"}`}>

          {/* Shop Service Dropdown */}
          <div className="border rounded p-2">
            <button
              className="w-full flex justify-between items-center text-[#3A0E1F] font-title text-[18px] font-medium leading-[28px] px-4 py-2"
              onClick={() => setIsShopServiceOpen(!isShopServiceOpen)}
            >
              Shop Service
              {isShopServiceOpen ? (
                <HiOutlineChevronUp className="w-5 h-5" />
              ) : (
                <HiOutlineChevronDown className="w-5 h-5" />
              )}
            </button>

            {isShopServiceOpen && (
              <div className="flex flex-col mt-2 gap-1 pl-4">
                {categories.map((cat) => {
                  const count =
                    cat === "All" ? filteredItems.length : filteredItems.filter((i) => i.category === cat).length;
                  return (
                    <button
                      key={cat}
                      onClick={() => { setSelectedCategory(cat); setCurrentPage(1); }}
                      className={`text-left px-2 py-1 rounded ${selectedCategory === cat
                          ? " text-gray-400"
                          : "bg-white  border border-neutral-300"
                        } font-body text-[18px] font-normal leading-[25.2px] tracking-[0.27px]`}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Price Filter */}
          {/* <div className="flex flex-col gap-2 border rounded p-2">
            <h3 className="text-[#3A0E1F] font-title text-[20px] font-medium leading-[28px] px-4 py-2">
              Price Range
            </h3>
            {["All Price", "Under $200", "$200 - $500", "Over $500"].map((price) => (
              <button
                key={price}
                onClick={() => { setSelectedPrice(price as PriceFilter); setCurrentPage(1); }}
                className={`text-left px-4 py-2 rounded border ${
                  selectedPrice === price ? "bg-[#3A0E1F] text-white" : "bg-white text-[#121417] border-neutral-300"
                } font-body text-[18px] font-medium leading-[25.2px] tracking-[0.27px]`}
              >
                {price}
              </button>
            ))}
          </div> */}
          <div className="  border rounded p-2">
            <button
              className="w-full flex justify-between items-center text-[#3A0E1F] font-title text-[20px] font-medium leading-[28px] px-4 py-2"
              onClick={() => setIsPriceOpen(!isPriceOpen)}
            >
              Price Range
              {isPriceOpen ? (
                <HiOutlineChevronUp className="w-5 h-5" />
              ) : (
                <HiOutlineChevronDown className="w-5 h-5" />
              )}
            </button>

            {isPriceOpen && (
              <div className="flex flex-col mt-2 gap-1 pl-4">
                {["All Price", "Under $200", "$200 - $500", "Over $500"].map((price) => (
                  <button
                    key={price}
                    onClick={() => { setSelectedPrice(price as PriceFilter); setCurrentPage(1); }}
                    className={`text-left px-2 py-1 rounded ${selectedPrice === price
                        ? "bg-[#3A0E1F] text-white"
                        : "bg-white text-[#121417] border border-neutral-300"
                      } font-body text-[18px] font-medium leading-[25.2px] tracking-[0.27px]`}
                  >
                    {price}
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>

      {/* Items + Pagination */}
      <div className="flex-1 flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {currentItems.map((item: Item) => (
            <ItemCard
              key={item.id}
              image={item.image}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 mt-6">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 border rounded ${currentPage === i + 1 ? "font-bold bg-gray-200" : ""}`}
            >
              {i + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            →
          </button>
        </div>
      </div>

    </div>
  );
};

export default ItemList;
