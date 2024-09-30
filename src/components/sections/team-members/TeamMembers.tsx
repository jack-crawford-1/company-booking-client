import { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import Front from './Front';
import Back from './Back';
import teamMembers from '../../../data/teamMembers';

const TeamMembers = () => {
  const [isFlipped, setIsFlipped] = useState<boolean[]>([false]);

  const handleClick = (index: number) => {
    const newFlippedState = [...isFlipped];
    newFlippedState[index] = !newFlippedState[index];
    setIsFlipped(newFlippedState);
  };

  return (
    <div
      id="about"
      className="bg-black w-full min-h-[calc(100vh-5rem)] pt-10 lg:pt-5 text-gray-300 flex flex-col items-center md:pb-40"
    >
      <div className="md:w-2/3 flex lg:flex-row flex-col items-center justify-center mx-auto">
        <h1 className="min-w-fit lg:pr-20 text-5xl xl:text-6xl 2xl:text-7xl font-bold text-center lg:p-10 text-gray-300 pb-5">
          Meet Our Team
        </h1>

        <p className="leading-7 text-center text-gray-300 pl-10 pr-10 pb-10 md:pb-0 md:p-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga illum
          esse sunt ex est voluptates eos quos numquam eius error asperiores
          quae!
        </p>
      </div>

      <div className="min-h-fit w-4/5 mx-auto  grid grid-cols-1 lg:grid-cols-3 gap-2 p-6 md:pl-20 md:pr-20 text-white text-3xl font-bold rounded-lg">
        {teamMembers.map((member, index) => (
          <ReactCardFlip
            key={index}
            isFlipped={isFlipped[index]}
            flipDirection="horizontal"
            infinite
          >
            <Front
              imgSrc={member.imgSrc}
              handleClick={() => handleClick(index)}
            />
            <Back
              description={member.description}
              handleClick={() => handleClick(index)}
            />
          </ReactCardFlip>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
