
import Visa from '../assets/images/visa.png';
import Master from '../assets/images/master-card.svg';

function logo (type) {
    let image = '';
    
    switch (type) {
        case 'Visa':
            image = Visa;
            break;
        case 'Master Card':
            image = Master;
            break;
    }

    return image;
}

function numCard (number) {
    return number.replace(/\d(?=\d{4})/g, '•')
                .replace(/(.{4})/g, '$1 ')
}


function CreditCard ({ type, number, expirationMonth, expirationYear, bank, owner, bgColor, color }) {
    return (
        <div className="card ms-2 mb-2" 
            style={{ 
                    width:`18rem`, 
                    height: `10rem`, 
                    backgroundColor: bgColor,
                    color }}>
            
            <div className='d-flex justify-content-end m-3'>
                <img src={logo(type)}
                    style={{ 
                        width:`43px`, 
                        height: `20px`
                    }}
                />
            </div>

            <div className='d-flex justify-content-center'>
                <span className={`text-${color} fs-2 fw-normal`}>{ numCard(number) }</span>
            </div>

            <div className='mt-3 ms-3 lh-1 fw-normal'
                style={{ fontSize: `14px`}}> 

                <div className='d-flex justify-content-start'>
                    <span> Expire { expirationMonth }/{expirationYear} </span> 
                    <span className='ms-3'> {bank} </span>                
                </div>

                <div className=''>
                    <span> {owner} </span>
                </div>
            </div>    
        </div>
    );
}

export default CreditCard;