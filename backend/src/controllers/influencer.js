'use strict'

/* Global Imports */
import { dbInfluencer } from '../db-api'
import { InstagramClient } from '../services'
import { Success, Error } from '../util'
import Debug from 'debug'
const debug = new Debug('api-test-haip:controllers:influencer')

const influencers = ['javierhalamadrid', 'markomusica', 'jenselter']
/* * * * * * * * * *  Controlller Methods * * * * * * * * * * * */

const getInfluencers = async (req, res) => {
  try {
    let users = await dbInfluencer.findAll()

    /* If not users in DB find in instagram and save */
    if (users.length === 0) {
      // Login in instagram
      const session = await InstagramClient.login()

      /* iterate de instagrams influencers */
      for (let influencer of influencers) {
        const profile = await InstagramClient.getInfoUser(session, influencer)
        console.log(profile)
        const user = {
          username: profile.username,
          fullname: profile.fullName,
          profilePicUrl: profile.profilePicUrl,
          followerCount: profile.followerCount,
          followingCount: profile.followingCount,
          biography: profile.biography || null,
          followerShort: profile.biography || null,
          externalUrl: profile.externalUrl || null
        }
        await dbInfluencer.create(user)
      }
      users = await dbInfluencer.findAll()
    }
    Success(res, { data: users, model: 'influencers' })
  } catch (error) {
    Error(error, res)
  }
}

const getInfluencer = async (req, res) => {
  try {
    const { _id } = req.params
    debug('getUser')
    const user = await dbInfluencer.findById(_id)
    if (!user) return Error({ message: 'User not found', status: 404 }, res)
    Success(res, { data: user, model: 'influencer' })
  } catch (error) {
    Error(error, res)
  }
}

export default {
  getInfluencers,
  getInfluencer
}
