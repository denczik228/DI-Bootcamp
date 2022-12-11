import { connect } from 'react-redux'

const movieDetail = props => {
    return (
        <div style={{display:'inline-block',width:'600px'}}>
            <h1>movieDetail</h1>
            <h2>Title:{props.details.title}</h2>
            <h2>Release Date:{props.details.releaseDate}</h2>
        </div>
    )
}

export default connect() (movieDetail)