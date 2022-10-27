 {/* How many adults */}
        <Form.Group inline>
          <label>Including yourself, how many adults in your party?</label>
          <Form.Field
            control={Radio}
            label='One'
            value='1'
            checked={this.state.adultValue === '1'}
            onChange={(e, data) => this.handleAdultChange(e, data)}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={this.state.adultValue === '2'}
            onChange={this.handleAdultChange}
          />
          <Form.Field
            control={Radio}
            label='Three'
            value='3'
            checked={this.state.adultValue === '3'}
            onChange={this.handleAdultChange}
          />
          </Form.Group>
          {/* name of extra adults */}
          {this.state.adultValue === '2' ? 
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
            : 
            <>
            </>
          } 
          {this.state.adultValue === '3' ?
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
             :
             <>
             </>
          }

          {/* How many kids */}
          <Form.Group inline>
           <label>How many kids in your party?</label>
          <Form.Field
            control={Radio}
            label='Zero'
            value='0'
            checked={this.state.kidValue === '0'}
            onChange={this.handleKidChange}
          />
          <Form.Field
            control={Radio}
            label='One'
            value= '1'
            checked={this.state.kidValue === '1'}
            onChange={this.handleKidChange}
          />
          <Form.Field
            control={Radio}
            label='Two'
            value='2'
            checked={this.state.kidValue === '2'}
            onChange={this.handleKidChange}
          />
          <Form.Field
            control={Radio}
            label='More'
            value='3'
            checked={this.state.kidValue === '3'}
            onChange={this.handleKidChange}
          />
        </Form.Group>
        {this.state.kidValue === '3' ?
              <Form>
                <Form.Field inline
                control={Input}>
                  <label>Total kids in your party</label>
                  <Input placeholder='Number' />
                </Form.Field>
              </Form>
             :
             <>
             </>
          }