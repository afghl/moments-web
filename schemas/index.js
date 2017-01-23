import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('users', { idAttribute: 'id' })
const momentSchema = new Schema('moments', { idAttribute: 'id' })
const commentSchema = new Schema('comments', { idAttribute: 'id' })

momentSchema.define({
  user: arrayOf(userSchema),
  comments: arrayOf(commentSchema)
})

// Schemas for Moments API responses.
export default {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  MOMENT: momentSchema,
  MOMENT_ARRAY: arrayOf(momentSchema),
  COMMENT: commentSchema,
  COMMENT_ARRAY: arrayOf(commentSchema)
}
