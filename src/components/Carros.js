import React from 'react'

const Carros = ({ carros }) => {
    return (
        <ul className="list-group">
            {carros.map((carro) => (
                <li key={carro.id} className="list-group-item">
                    {carro.fipe_name}
                </li>
            ))}
        </ul>
    )
}

export default Carros