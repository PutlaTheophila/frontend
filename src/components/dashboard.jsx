export async function loader () {
    const response = fetch("https://terabyte-lvkey.onrender.com/api/v1/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ response }),
        credentials: "include",
      })
    const data = await response.json();
  return data;
}


export default function (){
    return (<h1>hello from dash board</h1>)
}