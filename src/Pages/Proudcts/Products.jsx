import ProductTable from "./Components/ProductTable";

const productTitles = [
  "20 × 20",
  "20 × 20",
  "20 × 20",
  "20 × 20",
  "20 × 20",
  "20 × 20",
];

const headers = ["الخاصية", "القيمة", "الوحدة"];

const data = [
  ["الطول", "6", "متر"],
  ["السماكة", "2", "مم"],
  ["الوزن", "1.25", "كغ"],
  ["السماكة", "2.5", "مم"],
  ["الوزن", "1.35", "كغ"],
  ["السماكة", "3", "مم"],
  ["الوزن", "-", "كغ"],
];

import { useEffect } from "react";

export default function Products() {
  useEffect(() => {
    document.title = "المنتجات | معادن البركة";
  }, []);

  return (
    <div className="bg-backGroundColor pb-20">
      <div className="container mx-auto px-10">
        <div className="grid pt-14 gap-10 place-items-center grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(350px,1fr))]">
          {productTitles.map((title, index) => (
            <ProductTable
              key={index}
              title={title}
              headers={headers}
              data={data}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
