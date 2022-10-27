import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  // Radio,
  Select,
  TextArea,
  // Segment
} from 'semantic-ui-react'

const options = [
  { key: 'y', text: 'Yes', value: 'yes' },
  { key: 'n', text: 'No', value: 'no' },
//   { key: 'm', text: 'Other', value: 'other' },
]

class RSVP extends Component {
  constructor(props) {
    super(props);
  this.state = {
    kidValue: '0',
    adultValue: '1'
  }
}

  handleAdultChange = (e, data) => {this.setState({ adultValue: data.value })}
  handleKidChange = (e, data) => {this.setState({ kidValue: data.value})}

  render() {
    // const { value } = this.state
    return (
    <div>
      {/* ui loading form */}
      <Form id='rsvp' className='rsvpForm '>
      <h1 className='rsvpHeading'>RSVP</h1>
        {/* Name input */}
        <Form.Group>
          <Form.Field
            control={Input}
            label='First name (As appears on invitation)'
            placeholder='First name'
          />
          <Form.Field
            control={Input}
            label='Last name (As appears on invitation)'
            placeholder='Last name'
          />
        </Form.Group>
        <Form.Group>
        <Form.Field
          className='twelve wide'
            control={Select}
            label='Attending'
            options={options}
            placeholder='Y/N'
          />
        </Form.Group>
        {/* Extra info */}
        <Form.Group>
        <Form.Field
          control={TextArea}
          label='Anything else the Bride and Groom need to know to accomodate your party?'
          placeholder='Tell us more...'
        />
        </Form.Group>
        <Form.Group>
          <Form.Field
            control={Input}
            label='Song Request #1 (Title and Artist)'
            placeholder='Song Request #1'
          />
          <Form.Field
            control={Input}
            label='Song Request #2 (Title and Artist)'
            placeholder='Song Request #2'
          />
        </Form.Group>
        <Form.Field control={Button}>Submit</Form.Field>
      </Form>
  
      </div>
    )
  }
}

export default RSVP