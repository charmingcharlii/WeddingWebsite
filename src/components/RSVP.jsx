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
  constructor(props) {
    super(props);
  this.state = {
    kidValue: 0,
    adultValue: 1
  }
}

  handleAdultChange = (e, data) => {this.setState({ adultValue: data.value })}
  handleKidChange = (e, data) => {this.setState({ kidValue: data.value})}

  render() {
    // const { value } = this.state
    return (
    <div>
        <h1 className='rsvpHeading'>RSVP</h1>
    <Segment inverted className='rsvpForm'>
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
            checked={this.state.adultValue === 1}
            onChange={(e, data) => this.handleAdultChange(e, data)}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={this.state.adultValue === 2}
            onChange={this.handleAdultChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={this.state.adultValue === 3}
            onChange={this.handleAdultChange}
          />
          </Form.Group>
          {/* How many kids */}
          <Form.Group inline>
           <label>How many kids in your party?</label>
          <Form.Field
            control={Radio}
            label='Zero'
            value='0'
            checked={this.state.kidValue === 0}
            onChange={this.handleKidChange}
          />
          <Form.Field
            control={Radio}
            label='One'
            value= '1'
            checked={this.state.kidValue === 1}
            onChange={this.handleKidChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={this.state.kidValue === 2}
            onChange={this.handleKidChange}
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