import React, { Component } from 'react'
import PropTypes from 'prop-types'
import OutsideClickHandler from 'react-outside-click-handler'

import minicart from '../minicart.css'

/**
 * Pop-up component.
 */
export default class Popup extends Component {
  render() {
    const { children, onOutsideClick, buttonOffsetWidth } = this.props

    const boxPositionStyle = {
      right: buttonOffsetWidth && buttonOffsetWidth - 49,
    }

    return (
      <OutsideClickHandler onOutsideClick={onOutsideClick}>
        <div
          className={`${minicart.box} dn db-ns absolute z-max flex flex-colunm`}
          style={boxPositionStyle}
        >
          <div className="shadow-3">
            <div
              className={`${
                minicart.arrowUp
              } absolute top-0 shadow-3 bg-base h1 w1 pa4 rotate-45`}
            />
            <div className="mt3 bg-base relative flex flex-column">
              {children}
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    )
  }
}

Popup.propTypes = {
  /* The pop-up's content */
  children: PropTypes.object,
  /* Offset width to set the arrow position */
  buttonOffsetWidth: PropTypes.number,
  /* Function to be called when click occurs outside the popup */
  onOutsideClick: PropTypes.func,
}
