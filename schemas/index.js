import { Schema, arrayOf, normalize } from 'normalizr'

const userSchema = new Schema('users', { idAttribute: 'id' })
const momentSchema = new Schema('moments', { idAttribute: 'id' })

// userSchema.define({ shots: arrayOf(shotSchema)})

// Schemas for Moments API responses.
export default {
  USER: userSchema,
  USER_ARRAY: arrayOf(userSchema),
  MOMENT: momentSchema,
  MOMENT_ARRAY: arrayOf(momentSchema)
}
