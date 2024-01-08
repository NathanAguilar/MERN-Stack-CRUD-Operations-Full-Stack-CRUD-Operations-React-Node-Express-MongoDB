import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';



function Users () {
    const [users, setUsers] = useState([])
   

    useEffect(()=> {
       axios.get('http://localhost:3001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err))
    }, [])
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white rounded p-3'>
                <Link to="/create" className='btn-success'>Add +</Link>
                <table className='table'>
                    <thread>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thread>
                    <tbody>
                        {
                            users.map((user) => {
                                return <tr>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>
                                    <Link to="/update" className='btn btn-success'>Update</Link>
                                        <button className='btn btn-danger'>Delete</button>
                                        </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Users;