import React from 'react';
import PropTypes from 'prop-types';
import classes from './Tooltip.css';

const tooltip = (props) => {

  const display = !props.show ? 'none' : 'block';

  return (
    <div className={classes.Tooltip} style={{width: props.width}}>
        {props.children}
      <span style={{display: display}} className={classes.TooltipText}>{props.label}</span>
    </div>
  );
}

tooltip.propTypes = {
  show: PropTypes.bool.isRequired
}

export default tooltip;
