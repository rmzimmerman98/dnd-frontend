import { useState } from "react";

const AddChar = (props) => {
    let emptyChar = { name: '', class: '', level: '', str: '', dex: '', con: '', int: '', wis: '', cha: ''}
    const [char, setChar] = useState(emptyChar)

    const handleChange = (event) => {
    setChar({ ...char, [event.target.name]: event.target.value})
}
    const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(char)
   
}
return (
    <div className=".container">
    <form onSubmit={handleSubmit}>
        <div className='row'>
        <div className='col'>
        <input className="form-control" type="text" placeholder="Name" name="name" value={char.name} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="text" placeholder="Class" name="type" value={char.type} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Level" name="level" value={char.level} onChange={handleChange}/><br/>
        </div>
        </div>
        <div className='row'>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Strength" name="str" value={char.str} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Dexterity" name="dex" value={char.dex} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Constitution" name="con" value={char.con} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Intelligence" name="int"  value={char.int} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Wisdom" name="wis" value={char.wis} onChange={handleChange}/><br/>
        </div>
        <div className='col'>
        <input className="form-control" type="number" placeholder="Charisma" name="cha" value={char.cha} onChange={handleChange}/><br/>
        </div>
        </div>
        <input className="btn btn-success" type="submit" value="Add Character"/>
    </form>
</div>
)
}

export default AddChar