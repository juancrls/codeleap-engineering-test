export const CREATE_POST = "CREATE_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";

export const createPost = (title, content, author) => {
  return {
    type: CREATE_POST,
    payload: {
      title,
      content,
      author
    }
  }
}

export const editPost = (id, title, content) => {
  return {
    type: EDIT_POST,
    payload: {
      id,
      title,
      content
    }
  }
}

export const deletePost = (id) => {
  return {
    type: DELETE_POST,
    payload: {
      id
    }
  }
}
