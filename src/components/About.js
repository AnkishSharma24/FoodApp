import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);
       
    }

    render(){
        
        return(
            <div>
            <h1 className="statement">We are the best food app here! About class component</h1>
           
           <UserClass name={"Ankish (class)"} location={"Kanpur using props"}/>
            <img className="about-image"  src="https://img.freepik.com/free-photo/view-person-enjoying-delicious-food-reunion-dinner-anime-style_23-2151022568.jpg?t=st=1722145822~exp=1722149422~hmac=81341fedd01abf1ef513e4802975f637c43b507e840e9b3090622dfc49444221&w=1060"></img>
        </div>

        )
    }
}




// const About = ()=>{

//     return(
//         <div>
//             <h1 className="statement">We are the best food app here!</h1>
           
//            <UserClass name={"Ankish (class)"} location={"Kanpur using props"}/>
//             <img className="about-image"  src="https://img.freepik.com/free-photo/view-person-enjoying-delicious-food-reunion-dinner-anime-style_23-2151022568.jpg?t=st=1722145822~exp=1722149422~hmac=81341fedd01abf1ef513e4802975f637c43b507e840e9b3090622dfc49444221&w=1060"></img>
//         </div>
//     )
// }

export default About;