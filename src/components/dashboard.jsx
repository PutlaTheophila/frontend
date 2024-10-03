export async function loader ({params}) {
    const res = fetch("https://terabyte-lvkey.onrender.com/api/v1/auth/google/callback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ res }),
        credentials: "include",
      })
    const data = await res.json();
    const tournaments = data;
    return tournaments;
}


export default function (){
    return (<h1>hello from dash board</h1>)
}