# Step 1 

-Create a boiler plate in index.html
-<body>
    <div id="root">
        <h1>Hi There!</h1>
    </div>

<body>

-<script>
        const heading = document.createElement("h1")
        heading.innerHTML="Hi There"

        const root = document.getElementById("root")
        root.appendChild(heading)
</script>


# Step 2 

-Adding react cia CDN links

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

-craeting App.js and linking it via <script src="./App.js" type="module"></script> through index.html right above <body>


const heading = React.createElement("h1",{class:"heading"},"Hi All!")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)


# Step 3 
-Creating index.css and linking it thorugh index.html -> right below title <link rel="stylesheet" href="./index.css">

check for functionality

.heading{
    color: purple;
}

    
# Step 4 

- npm init
- npm i -D parcel (node_modules are created & package-lock.json is created)
- difference between caret and tilde -> https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

- difference between package-json & package-lock.json is
package.json -> approx version i.e. it has caret or tilde in it, whereas
package-lock.json has exact version of parcel

# Step 5 

- Use .gitignore to not upload the files on out git account (unnecessary files like node_modules, parcel-cache, dist)
- Add file i .gitignore like /node_modules, /parcel-cacke.
- NOTE: if we have package.json and package-lock.json we can recreate node-modules using npm i.

# Step 6 

- npx parcel index.html --> parcel created a server to run our app. --> Server running at http://localhost:1234
- npx means execute and mpm means to install
- mpm i react (no need of CDN links) --> Remove CDN
- npm i react-dom  (no need of CDN links) --> Remove CDN
- Now we require the below two lines in App.js
import React from "react";
import ReactDOM from "react-dom";

- <script src="./App.js" type="module"></script> make sure to have type: "module" in this script

- What is parcel doing ?
Dev Biuld
Local Server
HMR (Hot Module Replacement)
Caching - Faster Build
Image Optimization
Minification of files (bundling)
Compress files
Differential Bundling -> to support older browsers
Diagnostics
Error Handling

# Step 7 

PRODUCTION READY

- npx parcel build index.html (this will gives three files html,css and javascript files in the most optimized way)

# Step 8 

JSX (This is not HTML, its syntax is HTML like but it is different)

crating a heading using JSX

const heading = <h1> I am JSX</h1>   [Note: This code is transpiled(code that browser understand) before it reaches JS engine by parcel(Babel)]

Process  =  JSX--> React.createElement--> JS object--> HTML element

NOTE: If jsx is in single line the there is not issue but if it has to be written in more than one line the we need to 
wrap it in () brackets so as to make babel understand where it starts and where it ends.

EXAMPLE --> const heading = (<h1 className="Heading"> 
I am JSX</h1>) <-- here we can see it is wrapped in () as to make sure babel understands it.


# Step 9 

Two types of components in React
1) Class Based componenet (used earlier)
2) Functional components (used now mostly)  ---> It is just a normal javascript function (initialize with capital letter(comp name))

Example of functional component (Note: jsx in wrapped inside())

const HeadingComponent = () => (
    <h1 className="heading">I am a functional component</h1>
)

OR (NOTE: both the examples are exactly same one has return and other doesn't)

const HeadingComponent = () => {  
     return <h1 className="heading">I am a functional component</h1>
}

NOTE: To use it --> root.render(<HeadingComponent />)

3) React Element

const heading = (<h1>I am just a normal react element</h1>);

NOTE: In jsx using {} we can write any piece of javascript code inside it. 
EXAMPLE:
const num= 1000;
const HeadingComponent = () => (
    <div id="container">
    <h2>{num}</h2>
    <h1 className="heading">I am a functional component</h1>
    </div>
)

EXAMPLE: Inserting component inside a component and element inside a component 

import React from "react";
import ReactDOM from "react-dom/client";

const Elem = <h4>Element inside a component</h4>;

const Title = () => (
  <div>
    {Elem}
    <h1 className="heading">I am a Title component</h1>
  </div>
);

const HeadingComponent = () => (
  <div id="container">
    <Title />
    <h1 className="heading">I am a functional component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);

Three types on how to insert
1) {Title}
2) <Title />
3) <Title></Title>


# Step 10 
A component is a normal javascript fucnction that returns a js element
Creating header component

const Header = ()=>{
    return( 
    <div className="header">

        <div className="logo-contaniner">
            <img className="logo" src="https://img.freepik.com/premium-photo/anime-girl-eating-bowl-noodles-with-chopsticks-generative-ai_958124-30479.jpg?w=1380"></img>
        </div>
        
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)}

const RestaurantCard = ()=> {
    return(
        <div className="res-card">
            <h3>Chinese Wok</h3> 
            <img className="res-image" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
        
        <h5>Paneer Roll, Coke, Fries</h5>
        <h5>5 stars</h5>
        <h5>Delivery Time: 25 min</h5>
        
        </div>

        )
}


const Body = ()=> {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           <RestaurantCard/>
           </div>
        </div>
    )
}

const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

-----------> Now the challenge is how to create separate cards

Usings props --> they are just arguments to a function

const RestaurantCard = (props)=> {
    return(
        <div className="res-card">
            <h3>{props.name}</h3> 
            <img className="res-image" alt="res-logo" src=""></img>
        
        <h5>{props.menu}</h5>
        <h5>{props.stars}</h5>
        <h5>Delivery Time: {props.time}</h5>
        
        </div>

        )
}


const Body = ()=> {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
           <RestaurantCard name="Chinese Wok"  menu="Chowmin, momo" stars="4 stars" time="25min"/>
           <RestaurantCard name="Meghna Foods" menu="Roti, Sabji" stars="3.5 stars" time="30min"/>
           <RestaurantCard name="Burger King" menu="Burger, Coke" stars="4.2 stars" time="25min"/>
           <RestaurantCard name="Manoj Fast Foods" menu ="Dosa, roll" stars="5 stars" time="15min"/>
           <RestaurantCard name="Bikaerwala" menu="chola bhatura, tikki" stars="4.5 stars" time="20min"/>
           <RestaurantCard name="Thaggu K Ladoo" menu="ladoo" stars="4 stars" time="35min"/>
           <RestaurantCard name="Anil Shake" menu="mango, apple, badam" stars="4.9 stars" time="15min"/>
          
           </div>
        </div>
    )
}

# Step 11 

Passing data using API object locally


const resObj = {}

const RestaurantCard = (props)=> {

    const {resData} = props;

    return(
        <div className="res-card">
            <h3>{resData.info.name}</h3> 
            <img className="res-image" alt="res-logo" src=""></img>
        
        <h5>{resData.info.cuisines.join(", ")}</h5>
        <h5>{resData.info.avgRating}</h5>
        <h5>Delivery Time: {resData.info.sla.deliveryTime}min</h5>
        
        </div>

        )
}


Using the whole API data as object const resList{data}

onst Body = ()=> {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
           <RestaurantCard resData={resList[0]}/>
           <RestaurantCard resData={resList[1]}/>
           <RestaurantCard resData={resList[2]}/>
           <RestaurantCard resData={resList[3]}/>
           <RestaurantCard resData={resList[4]}/>
           <RestaurantCard resData={resList[5]}/>
           <RestaurantCard resData={resList[6]}/>
           <RestaurantCard resData={resList[7]}/>
           <RestaurantCard resData={resList[8]}/>
           <RestaurantCard resData={resList[9]}/>
           <RestaurantCard resData={resList[10]}/>
           <RestaurantCard resData={resList[11]}/>
           <RestaurantCard resData={resList[12]}/>
           <RestaurantCard resData={resList[13]}/>
           <RestaurantCard resData={resList[14]}/>
           <RestaurantCard resData={resList[15]}/>
           <RestaurantCard resData={resList[16]}/>
           <RestaurantCard resData={resList[17]}/>
           <RestaurantCard resData={resList[18]}/>
           <RestaurantCard resData={resList[19]}/>
           
          
           </div>
        </div>
    )
}

NOTE: We have to optimize the above code using destructuring using optional chaining?

const RestaurantCard = (props)=> {

    const {resData} = props;
    const {name,cuisines,avgRating}= resData?.info;

    return(
        <div className="res-card">
            <h3>{name}</h3> 
            <img className="res-image" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img>
        
        <h5>{cuisines.join(", ")}</h5>
        <h5>Rating:{avgRating}</h5>
        <h5>Delivery Time: {resData.info.sla.deliveryTime}min</h5>
        
        </div>

        )
}


NOW WE NEED TO MAKE IT MORE OPTIMIZED BY CREATING A LOOP OF RESTAURANT CARDS

const Body = ()=> {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                {resList.map((res)=> <RestaurantCard resData={res}></RestaurantCard>)}
           </div>
        </div>
    )
}

KEY IS VERY IMPORTANT TO USE WHILE USING MAP FUNCTION

const Body = ()=> {
    return (
        <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                {resList.map((res)=> <RestaurantCard key={res.info.id} resData={res}></RestaurantCard>)}
           </div>
        </div>
    )
}

TO OPTIMIZE AND MAKE CODE MORE READABLE WE CAN DO THE FOLLOWING

- Create seperate components files.[import and export components accordingly]
- Remove constants from code and create a seperate file for components.
- Two types of import and export -> default(only used when there is single thing) and named{}(usually used when multiple things are to be imported).

# Step 12 

REACT HOOKS - normal javascript functions that are pre-built in react

React uses reconciliation algorithm
- react creates a virtual dom (actual dom are the tags lets say div inside a div with img and h1)
In our case a better eg is if we console.log(<Body />) in Applayout we get a object that is virtual DOM

Diff Algorithm --> basically finds out the difference between two virtual DOMs (updated version and previous version)

React Fiber --> read about it (https://github.com/acdlite/react-fiber-architecture)

1) useState()    -->  const [listOfRestaurant, setlistOfRestaurant]= useState([]) --> inside is default array null which is default value of listofRestaurant

NOTE: whenever a state variable updates react re-renders its component

EXAMPLE of useState()

 <button className="filter-btn" onClick={()=>
                {const filteredList = listOfRestaurant.filter(
                    (res)=> res.info.avgRating >4.3)

                    setlistOfRestaurant(filteredList);
                 }
      }>Top Rated Restaurant</button>

2) useEffect(()=>{}, [])  --> takes two arguments first is call back function second is dependancy array

The callback function in useEffect() will be called after the components renders.


--> our purpose is to when we click on filter button we should get only top rated restaurant, that means
we have to provide map function a filtered list of top rated restaurants.

There are two approaches than can be followed using the API data

1) Loads -> API call -> render on UI
2) Loads -> render UI -> API call -> re-render wit API data  (better user experience)


# Step 13 

FETCHING DATA

 
      useEffect(()=>{
       fetchData();
      },[])

      const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    
        const json = await data.json();

        console.log(json);
    
        setlistOfRestaurant(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    }

# Step 14 

Using Shimmer for better user experience

just below useEffect()

 if(listOfRestaurant.length === 0){
      return  <h1>Loading...</h1>
    }

---> Now we try to skeleton using a fake page

// Below concept is also known as conditional rendering
if(listOfRestaurant.length === 0){
      return  <Shimmer/>
    }

Another way of writing using ternary operator is

 return listOfRestaurant.length === 0 ?(<-- IF) <Shimmer/>
     (ELSE -->)  :  (
        <div className="body">
            <button className="filter-btn" onClick={()=>
                {const filteredList = listOfRestaurant.filter(
                    (res)=> res.info.avgRating >4.3)

                    setlistOfRestaurant(filteredList);
                 })

# Step 15 

Login button functionality 

 const [login, setLogin] = useState("Login");

 <button className="login-button" onClick={()=>{
                    if(login==="Login") setLogin("Logout") 
                        else{setLogin("Login")}
                }}>{login}</button>

NOTE---> On click of the button React will re-render the header component again i.e. every time we click on 
button it re-renders Header  ******** VERY  IMPORTANT

diff algorithm here plays a major role in the above process and only the button gets updated

# Step 16

SEARCH functionality


NOTE: We can simply create search functionality using the below code but one thing to make sure is that 
we have created another state variable, so that while filtering we have to filter among n number of restaurants and
not the restaurants thats already been filtered.

const handleSearch = () => {
    const filteredRestaurant = listOfRestaurant.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilterRestaurant(filteredRestaurant);
  };

NOTE: We now also have to update our UI with filterRestaurant

 <div className="res-container">
        {filterRestaurant.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </div>

# Step 17

CREATING PATH

Points to remember
> If there is no dependency array useEffect will be called after every render of component.
> If there is dependency array then useEffect is called only on initial render.
> Lets say if we use some button as a dependency then useEffect will be called every time the button is updated.
> Never use Hooks outside components & try to call the at top.
> Never use useState inside if else or for loop NEVER.


using new library for routing --> npm i react-router-dom

// App.js
import { createBrowserRouter, routerProvider } from "react-router-dom";
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>
        
    },
    {
        path: "/about",
        element: <About/>
    },

    {
        path: "/contact",
        element: <Contact/>
    }


]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

NOTE: react-router-dom gives us an important Hook --> useRouterError

import { useRouteError } from "react-router-dom";

const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Opps looks like something went wrong...</h1>
            <h3>{err.status}:{err.statusText}</h3>
            <img src="https://media1.tenor.com/m/i9UkjLlNlt4AAAAC/anime-sorry.gif"></img>
        </div>
    )
}

# Step 18

CHILDREN ROUTE

Children is a list of paths

Note: this outlet will be filled according to the childred with the path on what page we are:

const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Outlet />
        </div>
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
        }
    ],
        errorElement:<Error/>        
    },
]);

NOTE: We do not use achor tag because it refreshes the whole page.
NOTE: We use <Link> to shuffel on different page because it does not reload page.


  <Link to="/"> <li className="nav-item">Home</li></Link> 
  <Link to="/about"> <li className="nav-item">About Us</li> </Link> 
   <Link to="/contact"> <li className="nav-item">Contact Us</li> </Link>

   --> 2 types of routing
   -client side rounting (components are already loaded )
   -server side routing

   # Step 19

   CREATING DYNAMIC ROUTING

    {  path: "/restaurants/:resId",    <------- dynamic ID
       element: <MenuOfRestaurants/>
    },

    NOTE: we use react-router-dom hook useParams in the above case




