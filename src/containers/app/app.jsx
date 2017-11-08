import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as paymentActions from '../../shared/actions/payment'
import Container from '../container/container'
import Payments from '../payments/payments'
import Time from '../time/time'
import Total from '../total/total'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './app.scss';

class App extends Component {

    render = () => {
        const {payment, setPayment, setGift} = this.props,
            timeContainer = payment.id ? <Container className='time' title='На какой срок'><Time/></Container> : null;

        return <div className='app'>
            <div className='app__title'>Клуб выгодных подписок</div>

            <Container className='payments' title='Выберите способ оплаты'>
                <Payments payment={payment} setPayment={setPayment} setGift={setGift}/>
            </Container>

            <ReactCSSTransitionGroup
                transitionName='container_anim'
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                {timeContainer}
            </ReactCSSTransitionGroup>

            {/*<Container className='total' title='Итог к оплате (за 1 год)'>*/}
            {/*<Total/>*/}
            {/*</Container>*/}


            {/*<div className='footer'>*/}
            {/*<div className='pay'>Оплатить</div>*/}
            {/*</div>*/}

        </div>

    }

}

const mapStateToProps = state => ({
        payment: state.payment
    }),

    mapDispatchToProps = dispatch => (bindActionCreators(paymentActions, dispatch));

export default connect(mapStateToProps, mapDispatchToProps)(App)
