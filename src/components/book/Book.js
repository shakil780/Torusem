import React, { useEffect, useState } from 'react';


const Book = () => {
    // const {user}=useAuth()
    const [users, setUsers] = useState([])
    console.log(users);
    useEffect(() => {
        fetch('https://possessed-barrow-50941.herokuapp.com/user')
            .then(res => res.json())
            .then(data => setUsers(data))

    }, [])
    const handelDeleate = id => {
        fetch(`https://possessed-barrow-50941.herokuapp.com/user/${id}`, { method: 'DELETE' })

            .then(res => res.json())
            .then(
                data => {
                  if(data.deletedCount===1){
                    const remaining =users.filter((user) => user._id !== id);
                     setUsers(remaining);
                  }
                }
            )
    }
    return (
        <div>
            {
                users.map(user => <div>
                    <h1>{user.travel}</h1>
                    <p>{user._id} </p>
                    <img src={user.images} alt="" />
                    <br />
                    <button onClick={() => handelDeleate(user._id)}>cancel</button>
                </div>)
            }




        </div>
    );
};

export default Book;