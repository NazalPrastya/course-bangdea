import HeroBanner from "../components/commons/molecules/HeroBanner";
import HeroDetail from "../components/commons/molecules/HeroDetail";

export default function HomePage() {
  return (
    <div className="container mx-auto">
      <HeroBanner />
      <HeroDetail />
    </div>
  );
}
