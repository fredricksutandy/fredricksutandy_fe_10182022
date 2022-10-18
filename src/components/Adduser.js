import React from 'react'

const Adduser = () => {

    const handleAddUser = () =>{
        fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }
  return (
    <div className="login">
        <div className="login-input">
            <h1>Add user</h1>
            <div className="d-flex">
            <input type="text" placeholder="Enter your First name"/>
            <input type="text" placeholder="Enter your Last name"/>
            </div>
            <input type="text" placeholder="Enter your username"/>
            <input type="password"  placeholder="Enter your password"/>
            <textarea  placeholder="Enter your address"></textarea>
       
            <button className="login-button" onClick={() => handleAddUser()}>Submit</button>
            <a href="/" >back</a>
        </div>
    </div>
  )
}

export default Adduser