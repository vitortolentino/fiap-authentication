import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

const GITHUB_CLIENT_ID = "Ov23liO6KPtqHbtP3r38";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const queryString = window.location?.search;
    const urlParam = new URLSearchParams(queryString);
    const code = urlParam.get("code");
    console.log({ code });
    getAccessToken(code);
  }, []);

  const loginWithGithub = () => {
    window.location.assign(
      `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}`
    );
  };

  const getAccessToken = async (code) => {
    if (code && !localStorage.getItem("access_token")) {
      const response = await fetch(
        `http://localhost:4000/getAuthToken?code=${code}`
      );

      const data = await response.json();
      console.log({ data });
      if (data.access_token) {
        localStorage.setItem("access_token", data.access_token);
      }
    }
    const token = localStorage.getItem("access_token");
    if (token) {
      navigate("/home");
    }
  };

  return (
    <div>
      <button onClick={loginWithGithub}>Login with Github</button>
    </div>
  );
}

export default Login;
