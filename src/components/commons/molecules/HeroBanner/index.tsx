import CardMedium from "../../atoms/CardMedium";
import CurvedText from "../../atoms/CurvedText";

export default function HeroBanner() {
  const viewText = (type: "top" | "bottom") => {
    return (
      <div className="absolute left-0 right-0 flex items-center justify-center">
        <CurvedText type={type} />
      </div>
    );
  };
  return (
    <section className="relative h-[460px] w-full rounded-b-4xl">
      <img
        src="/images/bg-1.jpg"
        alt="herobanner"
        className="h-full w-full rounded-4xl object-cover"
      />
      <div className="absolute bg-(--bg-primary-cray) h-32 w-32 rounded-full -bottom-18 -translate-x-1/2 transform left-1/2"></div>
      <div className="absolute -bottom-16 left-1/2 flex flex-col items-center justify-center gap-2 rounded-full h-28 w-28 -translate-x-1/2 transform cursor-pointer bg-(--bg-secondary-cray) shadow-xl transition-transform duration-300 ease-in-out hover:scale-105">
        {viewText("top")}
        <i className="fa fa-arrow-up mb-2 rotate-45 text-xl text-white"></i>
        {viewText("bottom")}
      </div>

      <div className="absolute right-4 bottom-4 flex flex-col gap-4 max-md:bottom-14">
        <CardMedium
          title={"About"}
          bgImg={"/images/dea-afrizal-about.png"}
          onClick={() => console.log("test click...")}
        />

        <CardMedium
          title={"Skills"}
          bgImg={"/images/dea-afrizal-skills.png"}
          onClick={() => console.log("test click...")}
        />
      </div>
    </section>
  );
}
