const User = (props) =>{

    const {
    first_name,
    last_name,
    fav_animals} = props;

    return(
        <div>
            <h3>{first_name}{last_name}</h3>
        </div>
    )
}
export default User

