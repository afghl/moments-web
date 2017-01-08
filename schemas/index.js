import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('users', { idAttribute: 'id' })

// userSchema.define({ shots: arrayOf(shotSchema)})

// Schemas for Dribble API responses.
export default {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema)
}
