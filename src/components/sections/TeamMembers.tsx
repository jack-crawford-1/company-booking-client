import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';

function Front({
  handleClick,
  imgSrc,
}: {
  handleClick: () => void;
  imgSrc: string;
}) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-4 rounded-lg opacity-50 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5"
    >
      <img
        src={imgSrc}
        alt="dentist"
        className="object-contain w-full h-full"
      />
    </div>
  );
}

function Back({
  handleClick,
  description,
}: {
  handleClick: () => void;
  description: string;
}) {
  return (
    <div
      onClick={handleClick}
      className="cursor-pointer border border-4 rounded-lg opacity-50 bg-gray-800 h-[280px] max-w-[600px] w-full mx-auto p-5"
    >
      <p className="text-white text-center text-lg">{description}</p>
    </div>
  );
}

const TeamMembers = () => {
  const [flippedState, setFlippedState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleFlip = (index: number) => {
    const newFlippedState = [...flippedState];
    newFlippedState[index] = !newFlippedState[index];
    setFlippedState(newFlippedState);
  };

  return (
    <div className="bg-slate-700 w-full min-h-[calc(100vh-5rem)] pt-10 lg:pt-5 text-gray-300 flex flex-col items-center">
      <div className="md:w-2/3 flex lg:flex-row flex-col items-center justify-center mx-auto">
        <h1 className="min-w-fit lg:pr-20 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center lg:p-10  text-gray-300 pb-5">
          Meet Our Team
        </h1>
        <p className="leading-7 text-center text-gray-300 pl-10 pr-10 pb-10 md:pb-0 md:p-0">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga illum
          esse sunt ex est voluptates eos quos numquam eius error asperiores
          quae!
        </p>
      </div>

      <div className="min-h-fit w-4/5 mx-auto bg-slate-500 w-full grid grid-cols-1 lg:grid-cols-3 gap-2 p-6 md:pl-20 md:pr-20 text-white text-3xl font-bold">
        <ReactCardFlip isFlipped={flippedState[0]} flipDirection="horizontal">
          <Front
            key="front1"
            imgSrc="/assets/images/dentist1.png"
            handleClick={() => handleFlip(0)}
          />
          <Back
            key="back1"
            description="Meet Dr. Smith, passionate about your oral health!"
            handleClick={() => handleFlip(0)}
          />
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flippedState[1]} flipDirection="horizontal">
          <Front
            key="front2"
            imgSrc="/assets/images/dentist1.png"
            handleClick={() => handleFlip(1)}
          />
          <Back
            key="back2"
            description="Meet Dr. Johnson, specialised in pediatric dentistry."
            handleClick={() => handleFlip(1)}
          />
        </ReactCardFlip>

        <ReactCardFlip isFlipped={flippedState[2]} flipDirection="horizontal">
          <Front
            key="front3"
            imgSrc="/assets/images/dentist1.png"
            handleClick={() => handleFlip(2)}
          />
          <Back
            key="back3"
            description="Meet Dr. Williams, expert in cosmetic dentistry."
            handleClick={() => handleFlip(2)}
          />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flippedState[4]} flipDirection="horizontal">
          <Front
            key="front4"
            imgSrc="/assets/images/dentist1.png"
            handleClick={() => handleFlip(4)}
          />
          <Back
            key="back4"
            description="Meet Dr. Smith, passionate about your oral health!"
            handleClick={() => handleFlip(4)}
          />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flippedState[5]} flipDirection="horizontal">
          <Front
            key="front5"
            imgSrc="/assets/images/dentist1.png"
            handleClick={() => handleFlip(5)}
          />
          <Back
            key="back5"
            description="Meet Dr. Smith, passionate about your oral health!"
            handleClick={() => handleFlip(5)}
          />
        </ReactCardFlip>
        <ReactCardFlip isFlipped={flippedState[6]} flipDirection="horizontal">
          <Front
            key="front6"
            imgSrc="/assets/images/dentist1.png"
            handleClick={() => handleFlip(6)}
          />
          <Back
            key="back6"
            description="Meet Dr. Smith, passionate about your oral health!"
            handleClick={() => handleFlip(6)}
          />
        </ReactCardFlip>
      </div>
    </div>
  );
};

export default TeamMembers;
