import React from 'react'

const Greetings = ({ lang, children }) => {
  const currentLangHello = {
    de: 'Hallo',
    fr: 'Bonjour',
    es: 'Hola',
    en: 'Hello'
  }

  return (
    <div className='box'>
      <p>{currentLangHello[lang]} <span>{children}</span></p>
    </div>
  )
}

export default Greetings