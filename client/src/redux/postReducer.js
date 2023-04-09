import { CREATE_POST, EDIT_POST, DELETE_POST } from "../actions/postActions";
import { generateGUID } from "../../../client/src/components/utils/getId"

const loadUsernameFromLocalStorage = () => {
  const storedUsername = localStorage.getItem("username");
  return storedUsername ? storedUsername : "";
};

const loadPostsFromLocalStorage = () => {
  const storedPosts = JSON.parse(localStorage.getItem("posts"));
  return storedPosts ? storedPosts : [];
};

const initialState = {
  username: loadUsernameFromLocalStorage(),
  posts: loadPostsFromLocalStorage()
};


const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: generateGUID(),
            title: action.payload.title,
            content: action.payload.content,
            author: action.payload.author,
            timestamp: Date.now()
          }
        ]
      }
    case EDIT_POST:
      return {
        ...state,
        posts: state.posts.map(post => {
          if(post.id === action.payload.id) {
            return {
              ...post,
              title: action.payload.title,
              content: action.payload.content
            }
          } else {
            return post
          }
        })
      }
      
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter((post) => post.id !== action.payload.id)
        };
    default:
      return state;
  }
};

export default postReducer;
