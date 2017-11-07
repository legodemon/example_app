import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './element.scss';

export default class Element extends Component {
    render = () => {

        return <div className={`payments-systems__element payments-systems__element_${this.props.classNameMod}`}>
            <div className='image'/>
        </div>
    }
}


Element.PropTypes = {
    classNameMod: PropTypes.string.isRequired
};