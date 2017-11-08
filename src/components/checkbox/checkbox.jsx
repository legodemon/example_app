import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as classnames from 'classnames';
import {uniqueId} from 'lodash';

export default class Checkbox extends Component {

    componentWillMount(){
        this.id = uniqueId('checkbox')
    }

    render = () => {
        const {title, comment, className, value, handler} = this.props;

        return <div className={classnames('checkbox-group', className)}>
            <input className='checkbox-group__check' type='checkbox' id={this.id} checked={value} onChange={handler}/>
            <div className='checkbox-group-wrapper'>
                <label className='checkbox-group__label' htmlFor={this.id}>{title}</label>
                {
                    comment
                        ? <span className='checkbox-group__comment'>{comment}</span>
                        : null
                }
            </div>
        </div>
    }
}

Checkbox.propTypes = {
    value: PropTypes.bool.isRequired,
    handler: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    comment: PropTypes.string,
    className: PropTypes.string
};