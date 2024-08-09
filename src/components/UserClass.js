
import React from "react";

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
        console.log(json)

        this.setState({
            userInfo: json
        })
    }

    componentDidUpdate(){
        console.log("Component did update")
    }

    componentWillUnmount(){
        console.log("component is Gone!")
    }

    render(){        
        const {name, location} = this.props;
        return(
            <div className="user-card">
              <img className="avatar-image" src={this.state.userInfo.avatar_url}></img>
            <h2>Name: {this.state.userInfo.name}</h2>
            <h3>Location: {this.state.userInfo.location}</h3>
            <h3>Contact: 123321123Class</h3>
        </div>
        )
    }

}

export default UserClass;