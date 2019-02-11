'use strict'

/* Global Imports */
import express from 'express'
import { InfluencerCtrl } from '../controllers'

/* Config Vars */
// const guard = require('express-jwt-permissions')()
const api = express.Router()

/* * * * * * * Config Routes of User with Express Router * * + * * * * * * * * * * * * */
/* 1: Route string
*  2: Called of function of controller for this route
*/
api.get('/influencers', InfluencerCtrl.getInfluencers)
api.get('/influencer/:_id', InfluencerCtrl.getInfluencer)

export default api
