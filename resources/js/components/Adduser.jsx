import React, { Component } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import swal from 'sweetalert';


function Adduser() {
const navigate = useNavigate('');

    const [userData, setUserData] = useState({
        name: '',
        profession: '',
        email: '',
        phone: '',
    })

    const handleInput = (e) => {
        const { name, value } = e.target;
        // Update the corresponding field in the state
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        })); }

   const saveUser = async (e) => {
        e.preventDefault();
        const res = await axios.post('http://localhost:8000/api/add-user/', userData).then(navigate('/'));

    if(res.data.status === 200) 
    {
        // console.log(res.data.message); 
        swal({
            title: "Success!",
            text: res.data.message,
            icon: "success",
            button: "OK",
          });
    }


         
    // console.log("add user" , userData)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Add User
                                <Link to={'/'} className='btn btn-primary btn-sm float-end'>BACK</Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => saveUser(e)}>
                                <div className='form-group mb-3'>
                                    <label>Name</label>
                                    <input type='text' name='name' value={userData?.name} onChange={handleInput} className='form-control' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Proffesion Field</label>
                                    <input type='text' name='profession' value={userData?.profession} onChange={handleInput} className='form-control' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Email</label>
                                    <input type='email' name='email' value={userData?.email} onChange={handleInput} className='form-control' />
                                </div>
                                <div className='form-group mb-3'>
                                    <label>Phone</label>
                                    <input type='text' name='phone' value={userData?.phone} onChange={handleInput} className='form-control' />
                                </div>
                                <div className='form-group mb-3'>
                                    <button type='submit' name='' value='' className='btn btn-primary float-end'>Save User</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Adduser;