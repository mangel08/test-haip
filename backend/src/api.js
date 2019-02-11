'use strict'

/* Global imports */
import express from 'express'
import bodyParser from 'body-parser'
import cors from './config/cors'
import fs from 'fs'
import morgan from 'morgan'
import path from 'path'
import dotenv from 'dotenv'

/* Routes Imports */
import { influencer } from './routes'

/* Config vars */
dotenv.config()
const api = express()
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

/* Config middlewares, plugins */
api.use(morgan('combined', { stream: accessLogStream }))
api.use(bodyParser.urlencoded({ extended: false }))
api.use(bodyParser.json())
api.use(cors)

// Config Routes
api.use('/api/v1', influencer)

export default api
