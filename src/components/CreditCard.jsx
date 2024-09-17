
function CreditCard(props) {

    let styleCard = {
        backgroundColor: `${props.bgColor}`,
    }
  return (
    <div style={styleCard}>
        <img src="" alt="" />
        <p>numero de la tarjeta</p>
        <p>fecha de expiracion</p>
        <p>bank</p>
        <p>owner</p>
    </div>
  )
}

export default CreditCard