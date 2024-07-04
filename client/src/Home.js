export default function Home() {
  const handleClick = async () => {
    const response = await fetch("http://localhost:4000/rota-autenticada", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("client_secret")}`,
      },
    });

    console.log(response);
  };
  return (
    <div>
      Logged in
      <button onClick={handleClick}>Faz algo</button>
    </div>
  );
}
