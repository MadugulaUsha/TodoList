import React from 'react';
import Button from '../UI/Button';
//import Button from '../UI/Button';

import Card from '../UI/Card';
import classes from './UsersList.module.css';

const UsersList = ({users,setUsersList}) => {
  const clickme=(id)=>{
    console.log(users)
    let val=users.filter(keys=>keys.id !== id)
    setUsersList(val)
  }
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li key={user.id} >
            {user.name} 
            <button className={classes.btn} onClick={()=>clickme(user.id)}>Delete</button>
          </li>  
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
