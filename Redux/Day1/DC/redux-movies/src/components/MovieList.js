import {connect} from 'react-redux'
import { showDetail } from '../redux/actions'

const MovieList = props => {
    return(
        <div>
            <h1>Movie List</h1>
            {
                props.list.map((item, i)=>{
                    return(
                        <div key={i}>
                            {item.title}
                            <button onClick={()=>props.details(item)}>Detail</button>
                        </div>
                    )
                })
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        list:state.movieList
    }
}
const mapDispatchToProps = (disptach) => {
    return{
        details: (movie) => disptach(showDetail(movie))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MovieList)