import { useState } from "react";

const AddInit = (props) => {
    let emptyInit = {name: '', initiative: '', notes: ''}
    const [init, setInit] = useState(emptyInit)

    const handleChange = (event) => {
    setInit({ ...init, [event.target.name]: event.target.value})
}
    const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(init)
}

return (
    <div className=".container">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col">
                    <input className="form-control" type="text" placeholder="Name" name="name" value={init.name} onChange={handleChange}/>
                </div>
                <div className="col">
                    <input className="form-control" type="number" placeholder="Initiative" name="initiative" value={init.initiative} onChange={handleChange}/>
                </div>
                <div className="col">
                    <input className="form-control" type="text" placeholder="Notes" name="notes" value={init.notes} onChange={handleChange}/>
                </div>
            </div>
            <input className="btn btn-success" type="submit" value="Add Character"/>
        </form>
    </div>
)
}

export default AddInit