import React, { useEffect, useState } from 'react'
import api from './services/api'
import Brands from './components/Brands'
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import InputPageItens from './components/InputPageItens'

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

  console.log('itens', itens)

  return (
    <>
      <div className="main container">
        <Navbar />
        <h1>React Fipe Api Pagination</h1> 
        <InputPageItens itensPerPage={itensPerPage} setItensPerPage={setItensPerPage} />
        <Brands itens={currentItens} loading={loading} />
        <Pagination itensPerPage={itensPerPage} totalItens={itens.length} paginate={paginate}  />
      </div>
    </>
  )
}

export default App;
