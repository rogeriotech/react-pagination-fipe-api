import React from 'react'
import imgLoading from './../img/loading.gif'

const Brands = ({ itens, loading }) => {
    if(loading){
        return(
            <>
                <img src={imgLoading} alt="loading" />    
            </>
        )
    }

    return (
        <>
            <hr />
            <h2>List of Brands</h2>
            <ul className="list-group mt-5">
                {itens.map((item) => (
                    <a href="#" key={item.id} className="list-group-item">
                        {item.id} - {item.fipe_name}
                    </a>
                ))}
            </ul>
        </>
    )
}

export default Brands