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
      <p className="text-white text-center text-sm">{description}</p>
      <button className="absolute bottom-3 left-12 text-white bg-gray-800 focus:ring-4 focus:ring-gray-900 font-medium rounded-lg text-sm px-5 py-3 mt-2 mb-2  min-w-[250px] hover:border-green-500  border-2">
        Make an appointment
      </button>
    </div>
  );
}
