import React, { Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import MenuOfRestaurants from "./components/MenuOfRestaurants";
//import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import UserContext from "../utils/UserContext";

const Grocery = lazy(()=> import("./components/Grocery"))

const AppLayout = () => {
    const [userName, setUserName] = useState();
    // Authentication
    useEffect(()=>{
        // Make API call for username and passsword
        const data ={
            name: "Ankish",

        }
        setUserName(data.name)
    },[])


    return(
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <div>
            <Header/>
            <Outlet />
        </div>
        </UserContext.Provider>
    )
}


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
            path: "/about",
            element: <About/>
        },
        {
            path: "/contact",
            element: <Contact/>
        },

        {
            path: "/restaurants/:resId",
            element: <MenuOfRestaurants/>
        },

        {
            path: "/grocery",
            element: <Suspense fallback={<h1>Loading..</h1>}><Grocery/></Suspense>
        },


    ],
        errorElement:<Error/>        
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
