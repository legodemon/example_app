import React, {Component} from 'react';
import * as classnames from 'classnames';
import './container.scss';

export default class Container extends Component {

    render = () => {
        const {className, title, children} = this.props;

        return <div className={classnames('container', className)}>
            <div className="container__title">{title}</div>
            {children}
        </div>
    }
}
