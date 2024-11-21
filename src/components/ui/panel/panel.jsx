function Panel({className ='', children}) {
    return(
        <div className={`${className} border border-black p-1 d-flex flex-wrap gap-2`}>{children}</div>
    );
}

export default Panel;