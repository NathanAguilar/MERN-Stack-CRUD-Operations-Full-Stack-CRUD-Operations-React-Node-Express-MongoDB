import React, { useState } from "react";
import { Link } from "react-router-dom";

function Users () {
    const [users, setUsers] = useState([{
        Name:"yousaf", Email:"ysf@gmail.com", Age:20
    }])
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
                                    <td>{user.Name}</td>
                                    <td>{user.Email}</td>
                                    <td>{user.Age}</td>
                                    <td>
                                    <Link to="/update" className='btn-success'>Update</Link>
                                        <button>Delete</button>
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