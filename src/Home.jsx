import React, { useEffect, useState } from 'react'
import CreateUser from './components/CreateUser';
import { TableSelection } from './components/TableSelection'
import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Home() {
  const [UserData, setUserData] = useState(null)
  useEffect(()=>{
    fetch('https://63c57732f80fabd877e93ed1.mockapi.io/api/v1/users')
    .then(res => res.json())
    .then(data => setUserData(data));
  },[])
  return (
    <>
      {!UserData && <h1>Loading ...</h1>}
      {UserData &&
      <div>
        <Link to={'/createUser'}>
          <Button style={{marginBottom: '30px'}}>Create User</Button>
        </Link> 
        <TableSelection data={UserData}/>
      </div>}
    </>
  )
}
