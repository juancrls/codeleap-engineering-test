import { CREATE_POST, EDIT_POST, DELETE_POST } from "../actions/postActions";

const loadUsernameFromLocalStorage = () => {
  const storedUsername = localStorage.getItem("username");
  return storedUsername ? storedUsername : "";
};

const initialState = {
  username: loadUsernameFromLocalStorage(),
  posts: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length + 1,
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
          if(post.id === action.payload.id && post.author == state.username) {
            return {
              ...post,
              title: action.payload.title,
              content: action.payload.content
            }
          }
        })
      }
      case DELETE_POST:
        const postToDelete = state.posts.find((post) => post.id === action.payload.id);
        if (postToDelete.author === state.currentUser) {
          return {
            ...state,
            posts: state.posts.filter((post) => post.id !== action.payload.id)
          };
        } else {
          return state;
        }
    default:
      return state;
  }
};

export default postReducer;
