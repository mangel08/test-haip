'use strict'

/* Global Imports */
import Debug from 'debug'
import { Influencer } from '../models'

/* Config vars */
const debug = new Debug('api-test-haip:db-api:influencer')

export default {

  findAll: () => {
    debug('findAll influencer')
    const influencers = Influencer.find()
    return influencers
  },

  findById: (_id) => {
    debug('findByID influencer')
    const influencer = Influencer.findById(_id)
    return influencer
  },

  create: (objectinfluencer) => {
    debug('Create influencer')
    const influencer = new Influencer(objectinfluencer)
    return influencer.save()
  }
}
