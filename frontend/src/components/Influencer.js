import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Route, Link } from "react-router-dom";

/* Semantic */
import { Button, Card, Image, Grid } from 'semantic-ui-react'


export class Influencer extends Component {

  render () {
    const { _id, username,  fullname, profilePicUrl } = this.props.influencer    
    return (

      
      <Grid centered padded>

        <Grid.Column mobile={16} tablet={6} computer={4}>
          <Card.Group>
            <Card>
              <Card.Content>
                <Image style={profilePicture} floated='left' size="mini" src={profilePicUrl} />
                <Card.Header>{ username }</Card.Header>
                <Card.Meta><b>{ fullname }</b></Card.Meta>
              </Card.Content>
              <Card.Content extra>
              <div className='ui one'>
                      <Button basic color='green'>
                        <Link to={'/profile/' + _id} style={ textBtnStyle }>Ver Perfil</Link>
                      </Button>
                    </div>
              </Card.Content>
            </Card>
          </Card.Group>
        </Grid.Column>
        
      </Grid>
    )
  }
}
const textBtnStyle = {
  color: "#21ba45"
}

const profilePicture = {
  borderRadius: '50%'
}

const card = {
  width: '100%'
}
// PropTypes
Influencer.propTypes = {
  influencer: PropTypes.object.isRequired,
}

export default Influencer
