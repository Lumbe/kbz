import React from 'react';
import {Button, Collapse} from 'react-bootstrap'
import './showMore.scss'

export default class ShowMore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  render() {
    return (
      <div>
        <div className="show-more"><Button bsStyle="more" onClick={() => this.setState({open: !this.state.open})}>
          {this.state.open ? '-' : '+'}
        </Button></div>
        <Collapse in={this.state.open}>
          <div>
            {this.props.children}
          </div>
        </Collapse>
      </div>
    );
  }
}