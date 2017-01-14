export const SELECT_USER = 'SELECT_USER'
export const UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE'

export const selectUser = (userId) => {
  return (dispatch, getState) => {
    dispatch({
      type: SELECT_USER,
      selectUserId: userId
    })
    return Promise.resolve()
  }
}

export const updateCurrentPage = (current) => {
  return (dispatch, getState) => {
    dispatch({
      type: UPDATE_CURRENT_PAGE,
      current
    })
    return Promise.resolve()
  }
}
