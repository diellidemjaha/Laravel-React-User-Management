import React, { Component, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


function Edituser() {
    const navigate = useNavigate('');
    const { id } = useParams()
    // console.log("parametri", id)
    const [userData, setUserData] = useState({
        name: '',
        profession: '',
        email: '',
        phone: '',
    })
    const [users, setUsers] = useState([])

    const getUsers = () => {
        axios.get('http://localhost:8000/api/users').then(
            data => {
                console.log("api", data?.data?.users)
                setUsers(data?.data?.users.filter(el => el.id == id))
            }
        ).catch(err => {
            console.log(err)
        })
    }
    const EditUser = (e) => {
        e.preventDefault()
        let body ={
            name:e.target.name.value,
            profession:e.target.profession.value,
            email:e.target.email.value,
            phone:e.target.phone.value,
        }
        axios.put(`http://localhost:8000/api/edit-user/${id}`,body).then(
            data => {
                // console.log("api", data?.data?.users)
                // console.log(data.message);
                // alert(data.data.message)

                swal({
                    title: "Successfully updated!",
                    text: data.data.message,
                    icon: "success",
                    button: "OK",
                  });
                navigate('/');
            }
        ).catch(err => {
            console.log(err)
        })
    }
    const handleInput = (e) => {
        const { name, value } = e.target;
        // Update the corresponding field in the state
        setUserData((prevUserData) => ({
            ...prevUserData,
            [name]: value,
        }));
    }

    useEffect(() => {
        getUsers()
        // const user_id = this.props.match.params.id;
        // console.log(user_id);
    }, [])

    //    const editUser = async (e) => {
    //         e.preventDefault();
    //         const res = await axios.post('http://localhost:8000/api/add-user/', userData).then(navigate('/'));

    //     if(res.data.status === 200) 
    //     {
    //         console.log(res.data.message); 
    //     }



    //     // console.log("add user" , userData)
    //     }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Edit User
                                <Link to={'/'} className='btn btn-primary btn-sm float-end'>BACK</Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={(e) => EditUser(e)}>
                                {users.map(el => {
                                    return (
                                        <>

                                            <div className='form-group mb-3'>
                                                <label>Name</label>
                                                <input type='text' name='name' id="name" defaultValue={el.name} onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label>Proffesion Field</label>
                                                <input type='text' name='profession' id='profession' defaultValue={el?.profession}  onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label>Email</label>
                                                <input type='email' name='email' id='email' defaultValue={el?.email}onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='form-group mb-3'>
                                                <label>Phone</label>
                                                <input type='text' name='phone' id='phone' defaultValue={el?.phone} onChange={handleInput} className='form-control' />
                                            </div>
                                            <div className='form-group mb-3'>
                                                <button type='submit' name='' value='' className='btn btn-primary float-end'>Update User</button>
                                            </div>
                                        </>
                                    )
                                })}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Edituser;