
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Pagination from './Pagination'

const Products = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([])


    
 
    useEffect(() =>{
        setLoading(true)
        axios({
            method: 'GET',
            url: "https://fakestoreapi.com/users"
        }).then(res=> {
            console.log(res.data)
            setData(res.data)
        }).catch(e=>console.log(e))
        .finally(()=>setLoading(false))

    }, [])

    const deletehandler = (id, e) => {
  
        axios.delete(`https://fakestoreapi.com/users/${id}`)
        .then(res => {  
            console.log(res);  
            console.log(res.data);  
        })
      
    }

    const [posts, setPosts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage] = useState(6) 
    
    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
    const howManyPages = Math.ceil(posts.length/postPerPage)

  return (
    <>
   
           
            <div className="card-container">
                <a href="/Adduser" className="btn-primary">Add user</a>
            </div>
   
    <div className="card-container">
        
        {loading && <h1>loading...</h1>}

        {data.map((user) => (
            <div key={user.id} className="card">
                <div className="card-name">{user.name.firstname} {user.name.lastname}</div>
                <div>Email:  {user.email}</div>
                <div>Username:  {user.username}</div>            
                <div>Phone:  {user.phone}</div>            
                <div>City:  {user.address.city}</div>            
                <div className="d-flex justify-content-end">
                    <button className="delete-button" onClick={(e) => this.deletehandler(user.id, e)}>delete</button>             
                    <a href="/Adduser" className="update-button" onClick={() => deletehandler(user.id)}>update</a>
                </div>
            </div>
        ))}
    </div>

    <Pagination pages={howManyPages} setCurrentPage={setCurrentPage}/>
    </>
  )
}

export default Products