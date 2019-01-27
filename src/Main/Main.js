import React, { Component } from 'react';
import { isTelephoneNumber } from '../isTelephoneNumber/isTelephoneNumber';
import { Col, Input, Row } from 'reactstrap';
import { rowStyle, pStyle } from './mainStyle';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      possiblePhoneNumber: '',
      telephoneCheckerSays: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const possiblePhoneNumber = e.target.value;
    let telephoneCheckerSays;
    if (possiblePhoneNumber.length === 0) {
      telephoneCheckerSays = '';
    } else {
      if (isTelephoneNumber(possiblePhoneNumber)) {
        telephoneCheckerSays = 'This is a valid US phone number.';
      } else {
        telephoneCheckerSays = 'This is NOT a valid US phone number.';
      }
    }
    this.setState({ possiblePhoneNumber, telephoneCheckerSays });
  }
  render() {
    return (
      <Row style={rowStyle}>
        <Col sm={{ size: 6, offset: 3 }} xs="12">
          <Input
            value={this.state.possiblePhoneNumber}
            onChange={this.handleChange}
            placeholder="please enter something"
          />
          <p style={pStyle}>{this.state.telephoneCheckerSays}</p>
        </Col>
      </Row>
    );
  }
}

export default Main;
