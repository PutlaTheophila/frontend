import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      // Send the code to your backend
      fetch("https://terabyte-lvkey.onrender.com/api/v1/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the token or user data response
          console.log("User data:", data);
        });
    }
  }, [code]);

  return <div>Logging in...</div>;
};

export default OAuthCallback;
