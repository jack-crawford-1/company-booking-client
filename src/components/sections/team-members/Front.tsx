export default function Front({
  handleClick,
  imgSrc,
}: {
  handleClick: () => void;
  imgSrc: string;
}) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-2 rounded-lg opacity-70 hover:opacity-100 transition ease-in-out delay-40 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5"
    >
      <img
        src={imgSrc}
        alt="dentist"
        className="object-contain w-full h-full"
      />
    </div>
  );
}
