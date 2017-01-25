import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import i18n from "../i18n/en-us.json";

class App extends Component {
    static propTypes = {

    };

    state = {
        username: ''
    }

    static childContextTypes = {
        user: PropTypes.string,
        i18n: PropTypes.object,
    }

    getChildContext() {
        return {
            user: this.state.username,
            i18n: i18n
        }
    }

    render() {
        console.log('---', 'App')
        return (
            <Provider store = {store}>
                <div>
                    <h1>{i18n.appTitle}</h1>
                    <div>
                        Input username:
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <Menu>
                        <MenuItem path="/counter"/>
                        <MenuItem path="/articles"/>
                        <MenuItem path="/filters"/>
                    </Menu>
                    {this.props.children}
                </div>
            </Provider>
        )
    }

    handleChange = ev => {
        this.setState({
            username: ev.target.value
        })
    }
}

export default App
