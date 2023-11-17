import { useSelector } from "react-redux";

export const Contact = () => {
  const username = useSelector(state => state.user.value.username);


    return <h1>Contact page of: {username} </h1>;
}