'use strict'
/* Global imports */
import mongoose, { Schema } from 'mongoose'

// mongoose.set('debug', true)
// Schema del modelo Usuario con Moongose
const InfluencerSchema = new Schema({
  username: { type: String, required: true, unique: true, index: true },
  fullname: { type: String, required: true },
  profilePicUrl: { type: String, required: true },
  followerCount: { type: Number, required: true },
  followingCount: { type: Number, required: true },
  followerShort: { type: String },
  biography: { type: String },
  externalUrl: { type: String }
})

export default mongoose.model('Influencer', InfluencerSchema, 'influencer')
