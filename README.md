# Step 1 ---------------------------------------------------------------------------------------------------------------------->

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


# Step 2 ---------------------------------------------------------------------------------------------------------------------->

-Adding react cia CDN links

<script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>

-craeting App.js and linking it via <script src="./App.js" type="module"></script> through index.html right above <body>


const heading = React.createElement("h1",{class:"heading"},"Hi All!")
        const root = ReactDOM.createRoot(document.getElementById("root"))
        root.render(heading)


# Step 3 ---------------------------------------------------------------------------------------------------------------------->
-Creating index.css and linking it thorugh index.html -> right below title <link rel="stylesheet" href="./index.css">

check for functionality

.heading{
    color: purple;
}

    
# Step 4 ---------------------------------------------------------------------------------------------------------------------->

- npm init
- npm i -D parcel (node_modules are created & package-lock.json is created)
- difference between caret and tilde -> https://stackoverflow.com/questions/22343224/whats-the-difference-between-tilde-and-caret-in-package-json

- difference between package-json & package-lock.json is
package.json -> approx version i.e. it has caret or tilde in it, whereas
package-lock.json has exact version of parcel

# Step 5 ---------------------------------------------------------------------------------------------------------------------->

- Use .gitignore to not upload the files on out git account (unnecessary files like node_modules, parcel-cache, dist)
- Add file i .gitignore like /node_modules, /parcel-cacke.
- NOTE: if we have package.json and package-lock.json we can recreate node-modules using npm i.

# Step 6 ---------------------------------------------------------------------------------------------------------------------->

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

# Step 7 ---------------------------------------------------------------------------------------------------------------------->

PRODUCTION READY

- npx parcel build index.html (this will gives three files html,css and javascript files in the most optimized way)

# Step 8 ---------------------------------------------------------------------------------------------------------------------->

JSX (This is not HTML, its syntax is HTML like but it is different)

crating a heading using JSX

const heading = <h1> I am JSX</h1>   [Note: This code is transpiled(code that browser understand) before it reaches JS engine by parcel(Babel)]

Process  =  JSX--> React.createElement--> JS object--> HTML element

NOTE: If jsx is in single line the there is not issue but if it has to be written in more than one line the we need to 
wrap it in () brackets so as to make babel understand where it starts and where it ends.

EXAMPLE --> const heading = (<h1 className="Heading"> 
I am JSX</h1>) <-- here we can see it is wrapped in () as to make sure babel understands it.


# Step 9 ---------------------------------------------------------------------------------------------------------------------->

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


# Step 10 --------------------------------------------------------------------------------------------------------------------->
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
            <img className="res-image" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
        
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

# Step 11 --------------------------------------------------------------------------------------------------------------------->

Passing data using API object locally


const resObj = {
    "info": {
      "id": "686198",
      "name": "Chinese Wok",
      "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
      "locality": "Metro Station",
      "areaName": "Moti Jheel",
      "costForTwo": "₹250 for two",
      "cuisines": [
        "Chinese",
        "Asian",
        "Tibetan",
        "Desserts"
      ],
      "avgRating": 4.3,
      "parentId": "61955",
      "avgRatingString": "4.3",
      "totalRatingsString": "500+",
      "sla": {
        "deliveryTime": 26,
        "lastMileTravel": 2.3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "2.3 km",
        "iconType": "ICON_TYPE_EMPTY"
      },
      "availability": {
        "nextCloseTime": "2024-07-21 01:00:00",
        "opened": true
      },
      "badges": {
        "imageBadges": [
          {
            "imageId": "Rxawards/_CATEGORY-Chinese.png",
            "description": "Delivery!"
          }
        ]
      },
      "isOpen": true,
      "type": "F",
      "badgesV2": {
        "entityBadges": {
          "imageBased": {
            "badgeObject": [
              {
                "attributes": {
                  "description": "Delivery!",
                  "imageId": "Rxawards/_CATEGORY-Chinese.png"
                }
              }
            ]
          },
          "textBased": {
            
          },
          "textExtendedBadges": {
            
          }
        }
      },
      "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
      },
      "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
          "mediaType": "ADS_MEDIA_ENUM_IMAGE",
          "lottie": {
            
          },
          "video": {
            
          }
        }
      },
      "reviewsSummary": {
        
      },
      "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      "restaurantOfferPresentationInfo": {
        
      },
      "externalRatings": {
        "aggregatedRating": {
          "rating": "--"
        }
      },
      "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
      
    },
    "cta": {
      "link": "https://www.swiggy.com/restaurants/chinese-wok-metro-station-moti-jheel-kanpur-686198",
      "type": "WEBLINK"
    }
  }

const RestaurantCard = (props)=> {

    const {resData} = props;

    return(
        <div className="res-card">
            <h3>{resData.info.name}</h3> 
            <img className="res-image" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"></img>
        
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

