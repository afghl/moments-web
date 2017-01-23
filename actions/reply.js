export const REPLY_MOMENT = 'REPLY_MOMENT'

export const replyMoment = (momentId) => {
  return (dispatch, getState) => {
    dispatch({
      type: REPLY_MOMENT,
      momentId
    })
    return Promise.resolve()
  }
}
