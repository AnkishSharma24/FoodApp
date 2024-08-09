
const User = (props)=>{
    return(
        <div className="user-card">
            <h2>Name: {props.name}</h2>
            <h3>Location: Kanpur</h3>
            <h3>Contact: 123321123</h3>
        </div>
    )
}

export default User;