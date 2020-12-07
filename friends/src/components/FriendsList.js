import React, { useEffect, useState } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
import List from './List';

function FriendsList (props) {
    const [friends, setFriends] = useState([]);
    const [deleteFriend, setDeleteFriend] = useState(false);
    const [loading, setLoading] = useState(false);
     
    useEffect(() => {
        fetchFriends();
    }, [props.addFriend, deleteFriend])

    const fetchFriends = () => {
        setLoading(true);
        axiosWithAuth()
        .get('/api/friends')
        .then(res => {
            setFriends(res.data)
            setLoading(false)
            setDeleteFriend(false)
        })
        .catch(err => {
            console.log('err: ', err)
        })
    }

    return (
        <div>
            <h4>Friends List</h4>
            <div className='friends'>
                {loading ? 'Please wait...':
                    friends.map(item => {
                        return <List key={item.id} item={item} setDeleteFriend={setDeleteFriend} />
                    })
                }
            </div>
        </div>
    )
}

export default FriendsList;