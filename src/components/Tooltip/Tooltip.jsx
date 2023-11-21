import React from "react";
import { tooltipStyle, indexStyle } from '../../styles'

export default function Tooltip({ children, text, ...rest }) {
  const [show, setShow] = React.useState(false);

  return (
    <span className={ tooltipStyle.tooltipContainer}>
        <span
            {...rest}
            onMouseEnter={() => setShow(true)}
            onMouseLeave={() => setShow(false)}
            >
            {children}
        </span>
        <span className={ tooltipStyle.tooltip} style={show ? { visibility: "visible" } : {}}>
            {text}
        </span>
    </span>
  );
}