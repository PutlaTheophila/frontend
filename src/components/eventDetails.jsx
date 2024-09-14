import {
    useParams, 
    useLoaderData
} from "react-router-dom"


export async function loader({params}) {
    console.log(params);
    return null;
}

export default function NewsDetails(){
    const loadData = async() =>{
        const res = await fetch(`${window.location.origin}/api/v1/news`, {
            method: 'GET',
            credentials: 'include', // Include cookies with the request
        });
    const data = await res.json();
    console.log(data);
    }
    loadData();
    return(
        <div>welcome to news details page</div>
    )
}