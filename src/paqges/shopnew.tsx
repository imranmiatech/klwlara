import Featured from "../components/Home/Featured";
import ShopByCollections from "../components/Home/shopByCollectios";
import Shop from "../components/shopNew/shop";

const Shopnew = () => {
  return (
    <div>
      <ShopByCollections />
      <Featured />
        <Shop />
    </div>
  );
};

export default Shopnew;