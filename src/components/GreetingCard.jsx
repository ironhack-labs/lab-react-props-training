import './GreetingCard.css'

export const GreetingCard = ({ lang, children }) => {
  return (
    <div className='greeting-container'>
       { lang === 'de' && <p>Hallo {children}</p> } 
       { lang === 'fr' && <p>Bonjour {children}</p> } 
       { lang === 'en' && <p>Hello {children}</p> } 
       { lang === 'es' && <p>Hola {children}</p>}
    </div>
  )
}
