import React,{useEffect,useState} from 'react'
import MyForm from './MyForm'

function App() {

//   const [backendData, setBackendData] = useState([{}])
//   useEffect(() => {
//     fetch("/api/hello")
//       .then(response => response.json())
//       .then(data => setBackendData(data))
// }, [])
  
  return (
    <>
      <div className="form">
        <MyForm />
      </div>  
      {/* <div>
        {(typeof backendData.message === 'undefined') ? (<p>loading...</p>) : (<header>(message)</header>)}
      </div> */}
    </>
  )
}

export default App
