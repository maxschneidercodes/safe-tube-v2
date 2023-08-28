import "../../public/css/style.css";
import "../../public/css/additional-styles/range-slider.css";
import "../../public/css/additional-styles/theme.css";
import "../../public/css/additional-styles/toggle-switch.css";
import "../../public/css/additional-styles/utility-patterns.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />
      <main className="container mx-auto">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
