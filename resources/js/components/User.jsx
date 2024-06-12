import axios from 'axios';
import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function User() {
const [users , setUsers] = useState([]);

const getUsers = () =>{
    axios.get('http://localhost:8000/api/users').then(
        data =>{
            console.log("api",data?.data?.users)
            setUsers(data?.data?.users)
        }
    ).catch(err =>{
        console.log(err)
    })
}
function getId(data){
    console.log("id e userit " , data)
}
useEffect(()=>{
    getUsers()
},[])

const deleteStudent = (id) => {
    axios.delete(`/api/delete-user/${id}`).then(
        data =>{
            swal({
                title: "Successfully deleted!",
                text: data.data.message,
                icon: "success",
                button: "OK",
              });
        }
    ).catch(err =>{
        console.log(err)
    })

    getUsers();
}

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='card'>
                        <div className='card-header'>
                            <h4>Users Data
                                <Link to={'/addUser'} className='btn btn-primary btn-sm float-end'>Add user</Link>
                            </h4>
                        </div>
                        <div className='card-body'>
                            <table className='table table-bordered table-striped'>
                                <thead>
                                    <tr>
                                        <th>Name Lastname</th>
                                        <th>Profession</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {users.map(el => {
                                        return(
                                            <>
                                            <tr>
                                            <th>{el?.name}</th>
                                            <th>{el?.profession}</th>
                                            <th>{el?.email}</th>
                                            <th>{el?.phone}</th>
                                            <th><Link to={`Edituser/${el?.id}`} className='btn btn-sm text-light bg-success'>Edit</Link>
                                                </th>
                                            <th>
                                                <button onClick={() => deleteStudent(el.id)} className='btn btn-sm text-light bg-danger'>delete</button></th>
                                    </tr>
                                            </>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default User;
