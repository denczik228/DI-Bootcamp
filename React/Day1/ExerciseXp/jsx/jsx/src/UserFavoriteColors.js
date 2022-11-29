const UserFavoriteColors = (props) => {

const {fav_animals} = props 

    return (
        <ul>
            <li>
                {fav_animals}
            </li>
        </ul>
    )
}

export default UserFavoriteColors