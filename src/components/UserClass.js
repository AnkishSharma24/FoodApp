
import React from "react";
import UserContext from "../../utils/UserContext";

class UserClass extends React.Component {

    constructor(props){
        super(props);
        this.state={   
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "http://knsfdfnsd",
            }       ,
        }         
    }

    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/ankishsharma24")
        const json = await data.json();
      //  console.log(json)

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
       // console.log("Component did update")
    }

    componentWillUnmount(){
      //  console.log("component is Gone!")
    }

    render(){        
        const {name, location} = this.props;
        return(
            <div className="border-solid  border-black p-4 border-2 m-2 bg-blue-300 rounded-md">
              <img className="w-[200px] h-[150px] rounded-xl" src={this.state.userInfo.avatar_url}></img>
            <h2 className="font-semibold">Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h3>Contact: 123321123Class</h3>
            <div>
                Logged In User:
                <UserContext.Consumer>
                    {({loggedInUser}) => <h3>{loggedInUser}</h3>}
                </UserContext.Consumer>
            </div>
        </div>
        )
    }

}

export default UserClass;