import React from 'react'
import {ButtonToolbar, Button} from 'react-bootstrap'

//

export default () => (
  <div>
    <ButtonToolbar>
      {/* Standard button */}
      <Button>Default</Button>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <Button bsStyle="primary" className="btn-frame btn-line">Подробнее</Button>

      {/* Indicates a successful or positive action */}
      <Button bsStyle="success">Подробнее</Button>

      {/* Contextual button for informational alert messages */}
      <Button bsStyle="info" className="btn-line">Подробнее</Button>

      {/* Indicates caution should be taken with this action */}
      <Button bsStyle="warning">Подробнее</Button>

      {/* Indicates a dangerous or potentially negative action */}
      <Button bsStyle="danger">Подробнее</Button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <Button bsStyle="link">Подробнее</Button>
    </ButtonToolbar>
    <div>
      Some text here
    </div>
    <div style={{width: "300px"}}>
      <Button block className="btn-frame">Подробнее</Button>

      {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
      <Button block bsStyle="primary" className="btn-frame btn-line">Подробнее</Button>

      {/* Indicates a successful or positive action */}
      <Button block bsStyle="success">Подробнее</Button>

      {/* Contextual button for informational alert messages */}
      <Button block bsStyle="info">Подробнее</Button>

      {/* Indicates caution should be taken with this action */}
      <Button block bsStyle="warning">Подробнее</Button>

      {/* Indicates a dangerous or potentially negative action */}
      <Button block bsStyle="danger">Подробнее</Button>

      {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
      <Button block bsStyle="link">Подробнее</Button>
    </div>
  </div>
)
