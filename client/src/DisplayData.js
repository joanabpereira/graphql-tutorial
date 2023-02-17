import React from 'react';
import { useQuery, gql } from '@apollo/client'

const QUERY_ALL_USERS = gql`
    query GetAllUsers{
        users {
            id
            name
            age
            username
        }
    }
`;

function DisplayData() {
    const {data, loading, error } = useQuery(QUERY_ALL_USERS);

    if(loading){
        return <h2>data is loading</h2>
    }

    if(error){
        console.log(error)
    }

    if(data){
        console.log(data);
    }

    return (
        <div>
            {data && data.users.map((user) => {
                return (
                    <div key={user.id}>
                        <h1>Name: {user.name}</h1> 
                        <h1>Username: {user.username}</h1> 
                        <h1>Age: {user.age}</h1> 
                    </div>)
            })}
        </div>
    )
}

export default DisplayData;