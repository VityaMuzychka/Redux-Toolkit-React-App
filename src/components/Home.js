import { useSelector } from "react-redux";

export const Home = () => {
  const username = useSelector(state => state.user.value.username);

    return (
    <div>
      <h1>Home page of: {username} </h1>
    </div>
    );
}