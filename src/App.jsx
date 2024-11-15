import BoxColor from './assets/components/box-color/box-color';
import CreditCard from './assets/components/credit-card/credit-card';
import Greetings from './assets/components/greetings/greetings';
import IdCard from './assets/components/id-card/id-card';
import Random from './assets/components/random/random';
import Rating from './assets/components/rating/rating';
import DriverCard from './assets/components/driverCard/driverCard';


function App() {
  return (
    <>
      <div className="container py-5">

        <IdCard
          className="mb-2"
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <IdCard
          className="mb-2"
          lastName='Doe'
          firstName='John'
          gender='male'
          height={178}
          birth={new Date("1992-07-14")}
          picture="https://randomuser.me/api/portraits/men/44.jpg"
        />

        <Greetings className="mb-1">Carlos</Greetings>
        <Greetings className="mb-1" lang="fr">Juli</Greetings>

        <Random className="mb-1" min={0} max={50} />
        <Random className="mb-1" min={5} max={6} />
        <Random className="mb-1" min={3} max={10} />

        <BoxColor className="mb-1" r={255} g={0} b={0} />
        <BoxColor className="mb-1" r={0} g={0} b={255} />
        <BoxColor className="mb-1" r={0} g={255} b={0} />

        <CreditCard 
          className="mb-1"
          card={{
            type: "Visa",
            number: "0123456789016984",
            expirationMonth: 12,
            expirationYear: 2019,
            bank: "Name of the Bank",
            owner: "Firstname Lastname",
          }}
          bgColor="#ddbb55"
          color="white" 
        />
        <CreditCard
          className="mb-1"
          card={{
            type: "Master Card",
            number: "0123456789010995",
            expirationMonth: 3,
            expirationYear: 2021,
            bank: "N26",
            owner: "Maxence Bouret",
          }}
          bgColor="#eeeeee"
          color="#222222"
        />

        <Rating>0</Rating>
        <Rating>1.49</Rating>
        <Rating>1.5</Rating>
        <Rating>3</Rating>
        <Rating>4</Rating>
        <Rating>5</Rating>
   
      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
          model: "Audi A3",
          licensePlate: "BE33ER"
        }}/>
      </div>
      
      

    </>
  );
}

export default App;