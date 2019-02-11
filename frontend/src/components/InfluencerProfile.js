import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

/* Semantic */
import { Button, Card, Image, Grid } from 'semantic-ui-react'

class InfluencerProfile extends Component {

  state = {
    influencer: {}
  }

  componentDidMount () {
    axios.get(process.env.REACT_APP_API_URL + `/influencer/${this.props.match.params._id}`)
      .then(res =>{
        this.setState({
          influencer: res.data.influencer
        })
      }) 
      .catch(err => console.log(err))
  }

  render () {
    const { _id, username, fullname, profilePicUrl, followerShort, followingCount, biography, externalUrl } = this.state.influencer
    return (
      <div>
       <Grid centered padded>
          <Grid.Column mobile={14} tablet={6} computer={4}>
            <Card>
              <Card.Content>
                <Image style={profilePicture} size="medium" centered src={profilePicUrl} />
                <Card.Header>{ username }</Card.Header>
                <Card.Meta style={text}>{ fullname }</Card.Meta>
                <Card.Meta style={text}>{ biography }</Card.Meta>
                <Card.Meta style={text}><a>{ externalUrl }</a></Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <Card.Meta><b style={text} >{ followerShort } Followers</b>  <b style={text}>{ followingCount } Following</b></Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
      </Grid>
      </div>
    ) 
    }
  }
  const profilePicture = {
    borderRadius: '50%',
    paddingBottom: '5px'
  }

  const text = {
    color: '#111'
  }
  


export default InfluencerProfile
