interface Colour {
  colour: string;
}

const Spacer = ({ colour }: Colour) => {
  return (
    <div
      className="min-h-[400px] w-full flex justify-center items-center"
      style={{ backgroundColor: colour }}
    >
      <h1 className="text-white text-7xl font-bold uppercase">Spacer</h1>
    </div>
  );
};

export default Spacer;
