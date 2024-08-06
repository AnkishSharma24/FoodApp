import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opps, looks like something went wrong...</h1>
            <h3>{err.status}:{err.statusText}</h3>
            <img src="https://media1.tenor.com/m/i9UkjLlNlt4AAAAC/anime-sorry.gif"></img>
        </div>
    )
}

export default Error;