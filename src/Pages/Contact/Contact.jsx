import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "تواصل معنا | معادن البركة";
  }, []);

  return <div>Contact Page</div>;
}
