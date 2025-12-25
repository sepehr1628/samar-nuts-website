import HeroSection from "@/app/_components/page_sections/landing/HeroSection";
import ProductsCategory from "./_components/page_sections/landing/ProductsCategory";
import ProductsSlider from "./_components/page_sections/landing/ProductsSlider";
import CommonQuestions from "./_components/page_sections/landing/Q&A";
import OrganizationGifts from "./_components/page_sections/landing/OrganizationGifts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductsCategory />
      <ProductsSlider />
      <OrganizationGifts />
      <CommonQuestions />
    </>
  );
}
