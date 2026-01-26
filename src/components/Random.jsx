function Random ({min, max}) {
let randomNumber = Math.ceil((Math.random() * (`${max}`- `${min}`)) + `${min}`);

return (
    <h2>Random value between {`${min}`} and {`${max}`} =&gt; {`${randomNumber}`}</h2>
)


}




export default Random;