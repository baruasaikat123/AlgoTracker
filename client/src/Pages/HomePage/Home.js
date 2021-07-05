import React from 'react';
import { homeObjOne} from './Data';
import InfoSection from '../../Components/InfoSection/InfoSection';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      {/* <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjTwo} />
      <Pricing />
      <InfoSection {...homeObjFour} /> */}
    </>
  );
}

export default Home;