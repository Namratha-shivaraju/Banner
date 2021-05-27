import React from 'react'

import {homeObjOne} from './Data'
import Banner from '../../components/Banner'


function Home ()  {
    return (
        <>
           <Banner {...homeObjOne} /> 
        </>
    )
}

export default Home
