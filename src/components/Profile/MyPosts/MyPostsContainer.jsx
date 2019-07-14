import { updatePost, addPost } from '../../../state/profile-reducer'
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText
  }
}

export default connect(mapStateToProps, { addPost, updatePost })(MyPosts);
