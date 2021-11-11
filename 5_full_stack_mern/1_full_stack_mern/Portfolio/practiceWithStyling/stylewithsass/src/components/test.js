<div>
<div className="flex">
    <div className="flex_column1">
    <video className="flex_column1_video" muted loop="true" autoPlay="true" >
        <source src="./Videos/video1.mp4" type="video/mp4"/>
    </video>
    <Link className="link_from_front_page" to="/pageTwo">
    <div className="flex_column1_content">
        <div className="flex_column1_content-text">
            <h1>DIET &<br/>FITNESS<br/>PLANS</h1>
        </div>  
    </div>
    </Link>
    </div>
    <div className="flex_column2" style={{backgroundImage: "url(/images/front-page.jpg)", backgroundSize: "cover", backgroundPosition: "center center"}}>
    <Link className="link_from_front_page" to="/">
        <div className="flex_column2_content">
            <div className="flex_column2_content-text">
            <Row>
        <Col>
          
          {
            confirmReg ? 
              <h4 style={{color: "green"}}>{confirmReg}</h4>
              : null
          }
          <Form onSubmit={register}>
          <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={user.firstName}
                  onChange={(e) => handleChange(e)}
                  />
                  <br/>
                  {
                    errs.firstName ? 
                      <span className="error-text" style={{color:"red"}}>{ errs.firstName.message }</span>
                      : null
                  }
              </Form.Group>

            <Form.Group as={Col}>
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={user.lastName}
                  onChange={(e) => handleChange(e)}
                  />
                  <br/>
                  {
                    errs.lastName ? 
                      <span className="error-text" style={{color:"red"}}>{ errs.lastName.message }</span>
                      : null
                  }
              </Form.Group>
            </Row>

            <Form.Group>
              <Form.Label>Email</Form.Label>
              {
                errs.email? 
                  <span className="error-text" style={{color:"red"}}>{ errs.email.message }</span>
                  : null
              }
              <Form.Control
                type="email"
                name="email"
                placeholder="Email"
                value={user.email}
                onChange={ handleChange }
              />
            </Form.Group>
            <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={user.address}
                  onChange={(e) => handleChange(e)}
                  />
                  <br/>
                  {
                    errs.address ? 
                      <span className="error-text" style={{color:"red"}}>{ errs.address.message }</span>
                      : null
                  }
              </Form.Group>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="City"
                    value={user.city}
                    onChange={(e) => handleChange(e)}
                    />
                    <br/>
                    {
                      errs.city ? 
                        <span className="error-text" style={{color:"red"}}>{ errs.city.message }</span>
                        : null
                    }
                </Form.Group>

                <Form.Group as={Col}>
                      <Form.Label htmlFor="state">State</Form.Label>
                          <Form.Select onChange={(e) => handleChange(e)} name="state" value={user.state}>
                              <option value="AL" defaultValue hidden>
                              AL
                              </option>
                              <option value="AL">AL</option>
                              <option value="AK">AK</option>
                              <option value="AR">AR</option>	
                              <option value="AZ">AZ</option>
                              <option value="CA">CA</option>
                              <option value="CO">CO</option>
                              <option value="CT">CT</option>
                              <option value="DC">DC</option>
                              <option value="DE">DE</option>
                              <option value="FL">FL</option>
                              <option value="GA">GA</option>
                              <option value="HI">HI</option>
                              <option value="IA">IA</option>	
                              <option value="ID">ID</option>
                              <option value="IL">IL</option>
                              <option value="IN">IN</option>
                              <option value="KS">KS</option>
                              <option value="KY">KY</option>
                              <option value="LA">LA</option>
                              <option value="MA">MA</option>
                              <option value="MD">MD</option>
                              <option value="ME">ME</option>
                              <option value="MI">MI</option>
                              <option value="MN">MN</option>
                              <option value="MO">MO</option>	
                              <option value="MS">MS</option>
                              <option value="MT">MT</option>
                              <option value="NC">NC</option>	
                              <option value="NE">NE</option>
                              <option value="NH">NH</option>
                              <option value="NJ">NJ</option>
                              <option value="NM">NM</option>			
                              <option value="NV">NV</option>
                              <option value="NY">NY</option>
                              <option value="ND">ND</option>
                              <option value="OH">OH</option>
                              <option value="OK">OK</option>
                              <option value="OR">OR</option>
                              <option value="PA">PA</option>
                              <option value="RI">RI</option>
                              <option value="SC">SC</option>
                              <option value="SD">SD</option>
                              <option value="TN">TN</option>
                              <option value="TX">TX</option>
                              <option value="UT">UT</option>
                              <option value="VT">VT</option>
                              <option value="VA">VA</option>
                              <option value="WA">WA</option>
                              <option value="WI">WI</option>	
                              <option value="WV">WV</option>
                              <option value="WY">WY</option>
                          </Form.Select>
                          {
                              errs.state ?
                              //change to className error-text
                              <span>{errs.state.message}</span>
                              : null
                          }   
                      </Form.Group>
              </Row>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              {
                errs.password ? 
                  <span className="error-text" style={{color:"red"}}>{ errs.password.message }</span>
                  : null
              }
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={user.password}
                onChange={ handleChange }
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              {
                errs.confirmPassword? 
                  <span className="error-text" style={{color:"red"}}>{ errs.confirmPassword.message }</span>
                  : null
              }
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={ handleChange }
              />
            </Form.Group>
            <div className="center d-grid gap-2">
              <Button variant="primary" size="lg" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
            </div>
        </div>
    </Link>
    </div>
</div>
</div>