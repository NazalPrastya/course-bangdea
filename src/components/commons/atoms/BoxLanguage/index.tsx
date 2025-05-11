const langueges = [
  { id: "en", name: "EN" },
  { id: "id", name: "ID" },
  { id: "fr", name: "FR" },
  { id: "DL", name: "DL" },
];

const BoxLanguege = ({
  traslete,
  setTraslate,
}: {
  traslete: string;
  setTraslate: (id: string) => void;
}) => {
  return (
    <div className="flex h-10 w-auto items-center justify-center gap-1 text-sm">
      <i className="fa-solid fa-globe"></i>
      {langueges.map((languege) => (
        <p
          key={languege.id}
          id={languege.id}
          className={`cursor-pointer ${
            traslete === languege.id
              ? "opacity-100"
              : "opacity-75 hover:opacity-100"
          }`}
          onClick={() => setTraslate(languege.id)}
        >
          {languege.name}
        </p>
      ))}
    </div>
  );
};

export default BoxLanguege;
