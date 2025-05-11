import { useState } from "react";
import SearchInput from "../../atoms/SearchInput";
import BoxProfile from "../../atoms/BoxProfile";

const Navbar = () => {
  const [search, setSearch] = useState<string>("");
  return (
    <header className="absolute top-4 z-50 mt-2 h-12 w-(--my-width-nav) flex items-center justify-between bg-transparent px-4">
      <section className="flex items-center justify-center gap-2">
        <div className="flex items-center gap-6 rounded-full bg-(--bg-primary-cray)">
          <p className="font-barlow ml-3 text-sm font-semibold text-(--text-color-black)">
            Menu
          </p>
          <button className="flex justify-center items-center cursor-pointer w-10 h-10 rounded-full bg-(--bg-secondary-cray) opacity-85 hover:opacity-100">
            <i className="fa-solid fa-bars text-(--text-color-black)"></i>
          </button>
        </div>
      </section>
      <section className="flex items-center gap-x-5">
        <SearchInput
          value={search}
          onChange={(e) => setSearch(e)}
          onSearch={() => console.log(search)}
        />
        <BoxProfile
          picture="/images/dea-afrizal-about.png"
          name="Nazal Gusti Prastya"
          onClick={() => console.log("test click...")}
        />
      </section>
    </header>
  );
};

export default Navbar;
