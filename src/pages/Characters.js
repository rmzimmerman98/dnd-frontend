import {useState, useEffect} from 'react'
import axios from 'axios'
import AddChar from './components/AddChar'

const Characters = () => {
let [chars, setChars] = useState([])

const getChars = () => {
  axios.get('http://localhost:8000/api/characters/')
  .then(
    (response) => setChars(response.data),
    (err) => console.log(err)
  )
  .catch((error) => console.error(error))
}
  
const handleCreate = (addChar) => {
  axios.post('http://localhost:8000/api/characters/', addChar)
  .then((response) => {
    console.log(response);
    getChars()
  })
}

const handleDelete = (event) => {
  axios.delete('http://localhost:8000/api/characters/' + event.target.value)
  .then((response) => {
    console.log(response)
    getChars()
  })
}

const handleUpdate = (editChar) => {
  console.log(editChar)
  axios.put('http://localhost:8000/api/characters/' + editChar.id, editChar)
    .then((response) => {
      console.log(response)
      getChars()
    })
}

useEffect(() => {
  getChars()
}, [])

return (
    <>
    <h1>Characters</h1>
    <AddChar handleCreate={handleCreate} />
  <div className="row">
  {chars.map((char) => {
        return (
            <div className="card text-center" style={{width: 14 + "rem"}} key={char.id}>
              <div className="card-body">
                <h5 className="card-title">Name: {char.name}</h5>
                <h6 className="card-subtitle mb-2">Class: {char.type} {char.level}</h6>
                <p className="card-text">STR: {char.str} INT: {char.int}</p>
                <p className="card-text">DEX: {char.dex} WIS: {char.wis}</p>
                <p className="card-text">CON: {char.con} CHA: {char.cha}</p>
                <button className='btn btn-danger' onClick={handleDelete} value={char.id}>Delete</button>
              </div>
            </div>
        )
    })}
  </div>
    </>
) 
}

export default Characters