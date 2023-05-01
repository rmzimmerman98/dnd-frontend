import {useState, useEffect} from 'react'
import axios from 'axios'

// const App = () => {

// let [chars, setChars] = useState([])

// const getChars = () => {
//   axios.get('http://localhost:8000/api/chars')
//   .then(
//     (response) => setChars(response.data),
//     (err) => console.log(err)
//   )
//   .catch((error) => console.error(error))
// }
  
// const handleCreate = (addChar) => {
//   axios.post('http://localhost:8000/api/chars', addChar)
//   .then((respose) => {
//     console.log(respose);
//     getChars()
//   })
// }

// const handleDelete = (event) => {
//   axios.delete('http://localhost:8000/api/chars/' + event.target.value)
//   .then((response) => {
//     console.log(response)
//     getChars()
//   })
// }

// const handleUpdate = (editChar) => {
//   console.log(editChar)
//   axios.put('http://localhost:8000/api/chars/' + editChar.id, editChar)
//     .then((response) => {
//       console.log(response)
//       getChars()
//     })
// }

// useEffect(() => {
//   getChars()
// }, [])

//   return (
//     <>
//       Hello world
//     </>
//   )
// }

// export default App