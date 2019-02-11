var Client = require('instagram-private-api').V1
var device = new Client.Device('ayhg7004')
var storage = new Client.CookieFileStorage(__dirname + '/cookies/ayhg7004.json')

const influenciers = ['javierhalamadrid', 'markomusica', 'mariamobregon']

for (let influencier of influenciers) {
  // Login in instagram
  Client.Session.create(device, storage, 'ayhg7004', 'ayhg7004.')
    .then(async function (session) {
      // Now you have a session, we can follow / unfollow, anything...
      // And we want to follow Instagram official profile
      const accountInfluencier = await Client.Account.searchForUser(session, influencier)
      const profile = await Client.Account.getById(session, accountInfluencier.params.id)
      console.log(profile.params)
    })
}

// .spread(function (session, account) {
//   // console.log('account-------------------')
//   // console.log(account)
//   return Client.Relationship.create(session, account.id);
// })
// .then(function (relationship) {
//   console.log(relationship.params)
//   // {followedBy: ... , following: ... }
//   // Yey, you just followed @instagram
// })

Client.Account.getById = function (session, id) {
  return new Client.Request(session)
    .setMethod('GET')
    .setResource('userInfo', {
      id: id
    })
    .send()
    .then(function (data) {
      // data variable is a pure JSON object which will be parsed
      // by Account.prototype.parse and set as the top level property params
      return new Client.Account(session, data.user)
    })
}
