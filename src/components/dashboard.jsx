export async function loader() {
    try {
        const res = await fetch("https://terabyte-lvkey.onrender.com/api/v1/auth/details", {
            method: "GET",
            credentials: 'include', // Include credentials for cookies or auth
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Parse the JSON data
        const data = await res.json();

        // Return the fetched data
        return data;
        

    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        // Optionally, return an error response or throw the error
        throw redirect('/login'); // or return { error: error.message };
        

    }
};


export default function (){
    return (<h1>hello from dash board</h1>)
}