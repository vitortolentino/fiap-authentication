import { useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState({
    username: "",
    userId: null,
  });

  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/rota-autenticada", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access_token")}`,
      },
    });

    const data = await response.json();
    console.log({ data });

    setUserData(data);
  };

  return (
    <div className="container">
      <span>Logged in</span>
      <br />
      <button onClick={handleClick}>Faz algo</button>
      <br />
      {userData.username && <span>username: {userData.username}</span>}
      <br />
      {userData.userId && <span>userId: {userData.userId}</span>}
    </div>
  );
}
