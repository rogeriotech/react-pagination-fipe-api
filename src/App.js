import React, { useEffect, useState } from 'react'
import api from './services/api'
import Brands from './components/Brands'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'

function App() {
  const [itens, setItens] = useState([])
  const [loading, setLoading] = useState(false) 
  const [currentPage, setCurrentPage] = useState(1) 
  const [itensPerPage, setItensPerPage] = useState(10) 

  //Loads the API data 
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true) 
      const res = await api.get('/')
      setItens(res.data)
      setLoading(false) 
    }
    fetchData() 

  }, [])

  //Calculations 
  const indexOfLastItem = currentPage * itensPerPage
  const indexOfFirstItem = indexOfLastItem - itensPerPage 
  const currentItens = itens.slice(indexOfFirstItem, indexOfLastItem)

  const paginate = (number) =>{
    setCurrentPage(number)
  }

  return (
    <>
      <div className="main">
        <Navbar />
        <h1>React Fipe Api Pagination</h1>
        <Brands itens={currentItens} loading={loading} />
        <Pagination paginate={paginate} itensPerPage={itensPerPage} totalItens={itens.length} />
      </div>
    </>
  )
}

export default App;
