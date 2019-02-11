import Client from 'instagram-private-api'
import dotenv from 'dotenv'

/* Config Vars */
dotenv.config()

/* Instagram Configuration */
const device = new Client.V1.Device('ayhg7004')
const storage = new Client.V1.CookieFileStorage(__dirname + '/ayhg7004.json')

export default {
// Method for login in instagram and return the session
  login: () => {
    const session = Client.V1.Session.create(device, storage, process.env.USER_INSTAGRAM, process.env.PASS_INSTAGRAM)
    return session
  },

  /* Method to find info account instagram */
  getInfoUser: async (session, username) => {
    const account = await Client.V1.Account.searchForUser(session, username)
    const profile = await Client.V1.Account.getById(session, account.params.id)
    return profile.params
  }
}
