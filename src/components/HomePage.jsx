import React from 'react'
import PopularPlaces from './PopularPlaces'
import CommunitiesMini from './CommunitiesMini';
import HeadAndSearch from './Head&Search';
// import Footer from './Footer';

export const Home = () => {
  return (
    <div>
      <HeadAndSearch/>
      <PopularPlaces/>
      <CommunitiesMini/>
      {/* <Footer/> */}
    </div>
  )
}
export default Home;
