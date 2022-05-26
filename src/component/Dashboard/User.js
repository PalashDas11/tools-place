import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Loading/Loading';
import UserRow from './UserRow';

const User = () => {
    const {data:users , isLoading, refetch} = useQuery('users', ()=> fetch(`https://salty-scrubland-12544.herokuapp.com/user`, {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=> res.json()))
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <h2 className="text-2xl font-bold text-left uppercase py-4">All Users : {users.length}</h2>
        <div class="overflow-x-auto">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       users.map(user=><UserRow
                       key={user._id}
                       user={user}
                       refetch={refetch}
                       ></UserRow>)
                   }
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default User;