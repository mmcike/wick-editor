/*
 * Copyright 2018 WICKLETS LLC
 *
 * This file is part of Wick Editor.
 *
 * Wick Editor is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Wick Editor is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Wick Editor.  If not, see <https://www.gnu.org/licenses/>.
 */

import React, { Component } from 'react';
import './_inspectoractionbutton.scss';
import WickInput from 'Editor/Util/WickInput/WickInput';
import ReactTooltip from 'react-tooltip'
import ToolIcon from 'Editor/Util/ToolIcon/ToolIcon';

class InspectorActionButton extends Component {
  render() {
    let btn = this.props.btn;

    if (btn === undefined) return (<div />)

    let colorClass = btn.color === undefined ? "button-blue" : "button-"+btn.color;
    let btnID = btn.id === undefined ? 'inspector-button-tooltip-nyi' : btn.id;
    let iconDefault = btn.name === undefined ? "A" : btn.name[0];


    return(
      <div data-tip data-for={btnID} className="inspector-button">
        <ReactTooltip
          id={btnID}
          type='info'
          place='top'
          effect='solid'
          aria-haspopup='true'>
          <span>{btn.tooltip === undefined ? 'No Tooltip' : btn.tooltip}</span>
        </ReactTooltip>
        <WickInput
          className={colorClass}
          type="button"
          onClick={btn.action}>
          <ToolIcon
            name={this.props.btn.icon}
            default={iconDefault}>
          </ToolIcon>
        </WickInput>
      </div>

    )
  }
}

export default InspectorActionButton
