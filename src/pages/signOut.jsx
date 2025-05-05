import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";

function SignOut() {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    logOut();
    navigate("/");
  }, []);

  return null;
}

export default SignOut;
