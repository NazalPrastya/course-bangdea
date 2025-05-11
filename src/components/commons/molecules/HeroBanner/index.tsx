import { Link } from "react-router-dom";

export default function HeroBanner() {
  return (
    <section className="relative h-[460px] w-full rounded-b-4xl">
      <img
        src="/images/bg-1.jpg"
        alt="herobanner"
        className="h-full w-full rounded-4xl object-cover"
      />
      <div className="absolute w-36 h-36 bg-(--bg-secondary-cray) -bottom-20 mx-auto left-0 right-0 rounded-full border-8 border-(--bg-primary-cray) cursor-pointer hover:scale-3d hover:scale-110 duration-300 transition-transform ease-in-out p-5 hover:font-medium">
        <div className="">
          <div>
            <Link
              to="#"
              className="text-xs rouned-full"
              style={{
                top: "10%",
                left: "50%",
                transform: "translateX(-50%) rotate(-15deg)",
                transformOrigin: "bottom center",
              }}
            >
              Get started with us
            </Link>
          </div>
          <div className="mx-auto">
            <i className="fa-solid fa-arrow-right text-white text-center -rotate-45"></i>
          </div>
          <div>
            <Link to="#" className="text-xs rouned-full">
              Discover more below
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
