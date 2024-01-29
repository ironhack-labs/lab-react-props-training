import './GreetingCard.css'

export const GreetingCard = ({ lang, greet, children }) => {
  return (
    <div className='greeting-container'>
       {children} 
    </div>
  )
}
