import { useEffect } from "react"

export default function Products() {
  useEffect(() => {
        document.title = "المنتجات | معادن البركة";
    }, []);

  return (
    <div>
      Products Page
    </div>
  )
}
