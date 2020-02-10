import React from 'react'

// const Pagination = ({itens, total}) => {
const Pagination = ({ itensPerPage, totalItens, paginate }) => {
    const itemNumbers = []

    let i
    for ( i = 1; i < Math.ceil(totalItens / itensPerPage) + 1; i++) {
        itemNumbers.push(i)
    }
    

    return (
        <>
            <nav className="page pagination mt-5">
                <ul className="pagination">
                    {itemNumbers.map( (number) =>(
                        <li onClick={() =>paginate(number)} key={number} className="page-item">
                            <a href="#" className="page-link">{number}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Pagination 