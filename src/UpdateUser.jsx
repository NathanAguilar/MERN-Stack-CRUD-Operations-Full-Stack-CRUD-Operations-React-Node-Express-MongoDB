import React from "react";

function UpdateUsers () {
    return (
        <div className='d-flex vs-100 bg-primary justify-conetent-center align-items-center'>
        <div className='w-50 bg-white round p-3'>
            <form>
                <h2>Update User</h2>
                <div className='mb-2'>
                    <label htnlFor="">Name</label>
                    <input type="text" placeholder='Enter Name' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htnlFor="">Email</label>
                    <input type="text" placeholder='Enter Email' className='form-control'/>
                </div>
                <div className='mb-2'>
                    <label htnlFor="">Age</label>
                    <input type="text" placeholder='Enter Age' className='form-control'/>
                </div>
                <button className='btn btn-success'>Update</button>
            </form>
        </div>
    </div>
    )
}

export default UpdateUsers;