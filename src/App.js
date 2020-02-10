import React, { useEffect, useState } from 'react'
import api from './services/api'
import Carros from './components/Carros'

function App() {
  const [itens, setItens] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get('')
      setItens(res.data)
    }
    fetchData() 
    
  }, [])
  return (
    <>
      <div className="main">
        <h1>React Fipe Api Pagination</h1>
        <Carros carros={itens} />
      </div>
    </>
  )
}

export default App;
