import React, {Component} from 'react';
import * as classnames from 'classnames';
import PropTypes from 'prop-types';
import './element.scss';
import {uniqueId as uid} from 'lodash';


export default class Element extends Component {
    render = () => {
        const {classNameMod, selected, handler} = this.props,
            cls = classnames('payments-systems__element',
                `payments-systems__element_${classNameMod}`,
                {[`payments-systems__element_${classNameMod}_selected`]: selected});

        const contentent = classNameMod !== 'sms' && classNameMod !== 'giftnumber'
            ? <div className='image'/>
            : classNameMod === 'sms'
                ? [
                    <div key={uid('payment-element-sms')} className='payments-systems__element_sms-title'>SMS</div>,
                    <div key={uid('payment-element-sms')} className='payments-systems__element_sms-comment'>Только для России</div>
                ]
                : <div className='payments-systems__element_giftnumber-title'>Подарочный код</div>;


        return <div className={cls} onClick={handler}>{contentent}</div>
    }
}


Element.PropTypes = {
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
    classNameMod: PropTypes.string.isRequired
};