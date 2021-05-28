import React from 'react'
import Title from './Title'
import Visualization from './Visualization'

const Home = ({mode}) => {
    return (
        <div className="App">
          <Title mode = {mode}/>
          <Visualization mode = {mode}/>
        </div>
      );
}

export default Home
