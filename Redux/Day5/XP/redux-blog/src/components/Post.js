import React, { Component } from 'react'
import { connect } from 'react-redux';


class Post extends Component {
  render() {
    return (
    <>
        <h1>Post Title</h1>
        <p>Morbi sed interdum ligula. Mauris eget porta elit. Nulla interdum velit et rhoncus rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in ultrices felis. Maecenas ipsum elit, sodales non augue non, lacinia commodo arcu. Mauris at libero viverra justo consectetur ornare. Cras vitae urna ante. In porta, sem et mattis sagittis, justo ligula interdum risus, sed convallis nulla arcu ac metus. Curabitur ac cursus enim, vel maximus sem.</p>
    </>
    )
  }
}
export default connect()(Post)