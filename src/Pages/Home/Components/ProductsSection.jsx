import Tittle from "./Tittle";

import product1 from "../../../images/product1.png";
import product2 from "../../../images/product2.png";
import product3 from "../../../images/product3.png";
import product4 from "../../../images/product4.png";

const productsImages = [product1, product2, product3, product4]

export default function ProductsSection() {
  return (
    <div className="bg-backGroundColor pt-12 pb-20">
      <div className="container mx-auto px-10">
        <Tittle text="صور من المنتجات"/>
        <div className="grid place-items-center sm:grid-cols-2 sm:gap-5 md:gap-3 lg:gap-0 md:grid-cols-[repeat(auto-fit,minmax(290px,1fr))] ">
            {productsImages.map((product, index) => <img src={product} key={index} className="sm:w-[200px] sm:h-[200px] md:w-[280px] md:h-[280px]"/>)}
        </div>
      </div>
    </div>
  );
}
