import React, { Component } from 'react'
// import Blog from '../public.blog.png';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';


class Home extends Component {
  render() {
    console.log(this.props);
    const { posts } = this.props

    const postList = posts.length > 0 ? (
        posts.map(post =>{
            return(
                <div key={post.id}>
                    <img src={'../public.blog.png'} alt='Blog'/>
                    <div>
                        <Link to={'/'+post.id}>{post.title}</Link>
                        <p>{post.body}</p>
                    </div>
                </div>
            )   
        }) 
    ) : 'No post to show'


    return (
    <div>
      <h4>Home</h4>  
      {postList}
    </div>
    )
  }
}

const mapStateToProps = (state) => {
    return{
        posts: state.posts
    }
}

 export default connect(mapStateToProps)(Home)
