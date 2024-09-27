export default function Back({
  handleClick,
  description,
}: {
  handleClick: () => void;
  description: string;
}) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-2 rounded-lg opacity-50 hover:opacity-80 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5 transition ease-in-out delay-40"
    >
      <p className="text-white text-center text-lg">{description}</p>
    </div>
  );
}
