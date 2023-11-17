import { useSelector } from "react-redux"

export const Profile = () => {
  const username = useSelector(state => state.user.value.username);

    return (
         <div>
          <h1>Profile page of: {username} </h1>
         </div>
    )
}