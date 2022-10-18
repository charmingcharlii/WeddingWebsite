import React, { Component } from 'react'
import {
  Button,
  Form,
  Input,
  Radio,
  Select,
  TextArea,
  Segment
} from 'semantic-ui-react'

const options = [
  { key: 'y', text: 'Yes', value: 'yes' },
  { key: 'n', text: 'No', value: 'no' },
//   { key: 'm', text: 'Other', value: 'other' },
]

class RSVP extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state
    return (
    <div>
        <h1 className='rsvpHeading'>RSVP</h1>
    <Segment inverted>
      <Form inverted id='rsvp'>
        {/* Name input */}
        <Form.Group widths='equal'>
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
          <Form.Field
            control={Select}
            label='Attending'
            options={options}
            placeholder='Y/N'
          />
        </Form.Group>
        {/* How many adults */}
        <Form.Group inline>
          <label>How many adults in your party?</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
          {/* How many kids */}
           <label>How many kids in your party?</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={value === '1'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={value === '2'}
            onChange={this.handleChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={value === '3'}
            onChange={this.handleChange}
          />
        </Form.Group>
        {/* Extra info */}
        <Form.Field
          control={TextArea}
          label='Anything else the Bride and Groom need to know to accomodate your party?'
          placeholder='Tell us more...'
        />
        <Form.Group widths='equal'>
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
      </Segment>
      </div>
    )
  }
}

export default RSVP