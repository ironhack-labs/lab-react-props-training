function BoxColor ({r, g, b}) {
    const backgroundColor = `rgb(${r}, ${g}, ${b})`
    return (
        <section>
            <div style={{height:"200px", border:"1px solid black", backgroundColor:backgroundColor}}></div>
            <div style={{height:"200px", border:"1px solid black"}}>
                <p>rgb({r},{g},{b})   </p>
            </div>
        </section>
    )

}

export default BoxColor