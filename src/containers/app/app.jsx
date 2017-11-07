import React, {Component} from 'react'
import Container from '../container/container'
import Payments from '../payments/payments'
import Time from '../time/time'
import Total from '../total/total'
import './app.scss';

export default class App extends Component {

    render = () => {
        return <div className='app'>
            <div className='app__title'>Клуб выгодных подписок</div>

            <Container className='payments' title='Выберите способ оплаты'>
                <Payments/>
            </Container>

            <Container className='time' title='На какой срок'>
                <Time/>
            </Container>

            <Container className='total' title='Итог к оплате (за 1 год)'>
                <Total/>
            </Container>


            <div className='footer'>
                <div className='pay'>Оплатить</div>
            </div>

        </div>

    }

}
