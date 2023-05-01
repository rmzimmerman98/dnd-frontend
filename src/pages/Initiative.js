import {useState, useEffect} from 'react'
import axios from 'axios'
import AddInit from './components/AddInit'

const Initiative = () => {
let [init, setInit] = useState([])

const getInit = () => {
  axios.get('http://localhost:8000/api/initiative/')
  .then(
    (response) => setInit(response.data),
    (err) => console.log(err)
  )
  .catch((error) => console.error(error))
}
  
const handleCreate = (addInit) => {
  axios.post('http://localhost:8000/api/initiative/', addInit)
  .then((response) => {
    console.log(response);
    getInit()
  })
}

const handleDelete = (event) => {
  axios.delete('http://localhost:8000/api/initiative/' + event.target.value)
  .then((response) => {
    console.log(response)
    getInit()
  })
}

const handleUpdate = (editInit) => {
  console.log(editInit)
  axios.put('http://localhost:8000/api/initiative/' + editInit.id, editInit)
    .then((response) => {
      console.log(response)
      getInit()
    })
}

useEffect(() => {
  getInit()
}, [])

return (
<>
    <h1>Initiative</h1>
    <AddInit handleCreate={handleCreate}/>
    <table className='table'>
    <thead>
                <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>Initiative</th>
                    <th scope='col'>Notes</th>
                </tr>
            </thead>
    </table>
    {init.map((init) => {
        return (
        <table className='table'>
            <tbody>
                <tr className='row'>
                    <td className='col text-center'>{init.name}</td>
                    <td className='col text-center'>{init.initiative}</td>
                    <td className='col'>{init.notes}</td>
                    <button className='btn btn-danger' style={{width: 50 + 'px'}} onClick={handleDelete} value={init.id}>X</button>
                </tr>
            </tbody>
        </table>
        )
    })}
</>
)
}

export default Initiative