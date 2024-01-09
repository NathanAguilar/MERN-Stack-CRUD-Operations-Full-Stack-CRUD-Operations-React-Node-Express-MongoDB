import React, { useState } from "react"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function CreateUser () {
    const[name, setName] = useState()
    const[email, setEmail] = useState()
    const[age, setAge] = useState()
    const navigate = useNavigate()

const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", {name, email, age})
    .then(result => {
        console.log(result)
        navigate('/')
    })
    .catch(err => console.log(err))
}

return (
    <div className='d-flex vs-100 bg-primary justify-conetent-center align-items-center'>
        <div className='w-50 bg-white round p-3'>
            <form onSubmit={Submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htnlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'
                    onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htnlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' className='form-control'
                    onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='mb-2'>
                    <label htnlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control'
                    onChange={(e) => setAge(e.target.value)}/>
                </div>
                <button className='btn btn-success'>Submit</button>
            </form>
        </div>
    </div>
)}

export default CreateUser;