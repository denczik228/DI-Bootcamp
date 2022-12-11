import { connect } from "react-redux";

const MovieDetail = props => {
    return(
        <div style={{display:'inline-block', width:'600'}}>
            <h1>Movie Detail</h1>
            <h2>Title: {props.details.title}</h2>
            <h2>Release Date: {props.details.releaseDate}</h2>
            <h2>Rating: {props.details.rating}</h2>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        details:state.movieDetail
    }
}

export default connect(mapStateToProps)(MovieDetail)