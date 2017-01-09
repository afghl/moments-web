export const SELECT_USER = 'SELECT_USER'

export const selectUser = (userId) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_USER,
      selectUserId: userId
    })

    return Promise.resolve()
  }
}
