import User from "./User";
import UserClass from "./UserClass";
import React from "react";


class About extends React.Component{

    constructor(props){
        super(props);
       
    }

    render(){
        return( 
                <div className=" ">
                  <h1 className="text-2xl mt-3 mb-3">We are the best food app here! t</h1>

                        <div className="text-black border-solid border-black flex">
                           <UserClass name={"Ankish (class)"} location={"Kanpur using props"}/>
                        </div>
                        <hr></hr>

                <h2 className="mt-5 font-bold text-2xl">Our history</h2>
                <p className="ml-3">✒️Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elementum vestibulum magna ut lacinia. Mauris ultrices nisl risus, id vestibulum magna porta nec. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam convallis non justo sit amet dictum. Mauris consequat faucibus egestas. Vivamus non ante magna. Curabitur eros purus, efficitur et imperdiet vitae, tincidunt ut metus. Vivamus posuere augue ac malesuada egestas. Proin non libero et ex posuere hendrerit ac sed orci. Proin blandit sed nisi a sollicitudin. Fusce in arcu id magna blandit sollicitudin. Proin at turpis ut metus aliquam pulvinar at ac quam.</p>
                <p className="ml-3">✒️Pellentesque a eros egestas, suscipit sapien ac, mattis mi. Aenean ac est a nisl placerat mollis. Fusce rhoncus commodo venenatis. Sed nunc orci, blandit non venenatis sit amet, gravida nec risus. Donec tincidunt ultrices maximus. Vivamus urna sapien, consequat aliquam odio in, commodo ornare dolor. Praesent id nisi nec elit facilisis consectetur. Aliquam lectus nisl, auctor sollicitudin elit ac, commodo blandit enim. Donec id leo at arcu faucibus iaculis. Proin vel nisi non odio posuere faucibus id eu sapien.</p>
                <p className="ml-3">✒️Nulla aliquet odio id arcu iaculis semper quis non metus. In urna velit, porttitor sit amet finibus cursus, ornare id arcu. Suspendisse magna ipsum, fringilla et dui eu, malesuada tempor arcu. Duis ac est auctor ex bibendum feugiat. Quisque neque ligula, varius eget est vel, tincidunt varius erat. Integer vestibulum nulla eu lacinia dapibus. Sed tempor erat at enim tincidunt, vel elementum neque mattis. Aenean ac mi eu elit dapibus commodo vitae quis mi. Nulla varius leo et arcu eleifend, in pulvinar dolor sagittis. Nam non purus ac tortor mattis scelerisque id et lacus. Vivamus ac facilisis augue. Sed egestas posuere odio, in posuere justo euismod ac. Proin vel rutrum libero, vel feugiat ex. Phasellus facilisis congue vestibulum. Aenean commodo dapibus nisl ornare placerat.</p>
                <p className="ml-3">✒️Etiam interdum semper enim sed ullamcorper. Donec volutpat leo id iaculis aliquam. Praesent ultricies eget libero id eleifend. Donec quam erat, gravida sit amet venenatis et, aliquam eu nibh. Nunc faucibus consequat purus, ac ultricies risus bibendum in. Sed sodales lorem non quam egestas, sed sollicitudin sem mollis. Fusce aliquet felis magna, vel egestas odio feugiat sit amet. Duis fringilla porttitor fermentum. Etiam quis ultricies justo. Vivamus nec orci lorem. Mauris interdum magna ut sapien dignissim dapibus.</p>
                
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