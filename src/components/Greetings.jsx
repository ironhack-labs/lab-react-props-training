import React from 'react'

import App from '../App';

const Greetings = ({lang, children}) => {

    switch(lang){
        case 'en':
            return <h1 className='greet'>Greetings {children} </h1>;
        case 'de':
            return <h1 className='greet'>Hallo {children} </h1>;
        case 'es':
            return <h1 className='greet'>Alo {children} </h1>;
            case 'fr':
                return <h1 className='greet'>Bonjour {children} </h1>;
        default:
            return <h1 className='greet'>Problem...</h1>
    }

}

export default Greetings