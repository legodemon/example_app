import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './timecase.scss';

export default class TimeCase extends Component {

    render = () => {
        const {period, priceTotal, priceMonth, classNameMod} = this.props;

        return <div className={`time-case time-case_${classNameMod}`}>
            <div className='time-case-header'>
                <div className='time-case-header-caption'>
                    <div className='time-case-header-caption__title'>{period}</div>
                    <div className='time-case-header-caption__price'>{`${priceTotal} руб.`}</div>
                </div>
                <div className='time-case-header-image'>
                    <div className='time-case-header-image__card'>
                        <img src='https://placeholdit.co//i/80x50?&bg=ffc768&fc=000000'/>
                    </div>
                </div>
            </div>
            <div className='time-case-price'>
                <div className='time-case-price__value'>{priceMonth}</div>
                <div className='time-case-price__unit'>руб./месяц</div>
            </div>
        </div>
    }
}

TimeCase.PropTypes = {
    period: PropTypes.string.isRequired,
    priceTotal: PropTypes.number.isRequired,
    priceMonth: PropTypes.number.isRequired,
    classNameMod: PropTypes.string.isRequired
};