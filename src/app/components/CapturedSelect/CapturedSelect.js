import PropTypes from "prop-types";
import React from "react";
import TransitionGroupPlus from "react-transition-group-plus";

import "./CapturedSelect.styl";

import { Icon } from "components/Icon";
import { TooltipContainer } from "components/Tooltip";

const CapturedSelect = ({
    addClass,
    onClick,
    onMouseEnter,
    onMouseLeave,
    selected,
    showTooltip,
    toolTipText
}) => (
    <div
        className={`CapturedSelect ${selected ? "CapturedSelect--selected" : ""} ${addClass || ""}`}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
    >
        <Icon
            type="ball"
        />
        <TransitionGroupPlus>
            {
                showTooltip
                    ? (
                        <TooltipContainer
                            text={toolTipText}
                        />
                    )
                    : null
            }
        </TransitionGroupPlus>
    </div>
);
CapturedSelect.displayName = "CapturedSelect";
CapturedSelect.propTypes = {
    addClass: PropTypes.string,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    selected: PropTypes.bool,
    showTooltip: PropTypes.bool,
    toolTipText: PropTypes.string
};
CapturedSelect.defaultProps = {
    showTooltip: false
}

export default CapturedSelect;
