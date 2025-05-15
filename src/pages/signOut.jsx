import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";
import { questionFeedback } from "../helpers/feedback";

function SignOut() {
  const navigate = useNavigate();
  const { logOut } = useAuth();

  useEffect(() => {
    const handleLogOut = async () => {
      const confirm = await questionFeedback(
        "You have successfully logged out!"
      );

      if (confirm) {
        await logOut();
        navigate("/");
      } else {
        navigate(-1);
      }
    };

    handleLogOut();
  }, []);

  return null;
}

export default SignOut;
