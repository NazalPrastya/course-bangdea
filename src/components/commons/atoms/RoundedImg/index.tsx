const RoundedImg = ({
  src,
  index,
  text,
}: {
  src: string;
  index: number;
  text?: string;
}) => {
  return (
    <div
      key={index}
      className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-(--bg-secondary-cray) bg-(--bg-secondary-cray) ${
        index > 0 ? "-ml-3" : ""
      } ${index > 1 ? "max-xl:hidden" : ""}`}
    >
      {text ? (
        <p className="text-xs">MORE</p>
      ) : (
        <img
          src={src}
          alt={text}
          className="h-full w-full rounded-full object-cover"
        />
      )}
    </div>
  );
};

export default RoundedImg;
