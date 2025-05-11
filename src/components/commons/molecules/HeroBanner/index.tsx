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
      <div className="absolute w-36 h-36 bg-(--bg-secondary-cray) -bottom-20 mx-auto left-0 right-0 rounded-full border-8 border-(--bg-primary-cray) cursor-pointer hover:scale-110 duration-300 transition-transform ease-in-out hover:font-medium flex flex-col items-center justify-center">
        <div className="relative w-full h-full">
          <div className="absolute top-2 inset-x-0">{viewText("top")}</div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <i className="fa-solid fa-arrow-right text-white text-center -rotate-45"></i>
          </div>
          <div className="absolute  inset-x-0">{viewText("bottom")}</div>
        </div>
      </div>
    </section>
  );
}
