export const SET_USERNAME = "SET_USERNAME"
export const UNSET_USERNAME = "UNSET_USERNAME"

export const setUsername = (username) => {
  return {
    type: SET_USERNAME,
    payload: username
  }
}

export const unsetUsername = () => {
  return {
    type: UNSET_USERNAME,
    payload: ""
  }
}