import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {login, logout} from '../store';

export const Login = () => {
 const [newUsername, setNewUsername] = useState('');

 const dispatch = useDispatch();
 const username = useSelector(state => state.user.value.username);

 return (
    <div>
      <h1>{username}</h1>
      <input onChange={(event) => setNewUsername(event.target.value)}/>
      <button onClick={() => dispatch(login({username: newUsername}))}>Submit Login</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
 )
}