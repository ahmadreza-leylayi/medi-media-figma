import BestInStore from "@/components/sections/BestInStore";
import CategorySection from "@/components/sections/CategorySection";
import Gallery from "@/components/sections/Gallery";
import HeroSection from "@/components/sections/HeroSection";
import MostWanted from "@/components/sections/MostWanted";
import ProductDetail from "@/components/sections/ProductDetail";
import Swiper from "@/components/sections/Slider";


export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategorySection />
      <BestInStore />
      <MostWanted />
      <ProductDetail />
      <Gallery />
      <Swiper />
      <BestInStore />


    </div>
  )
}
