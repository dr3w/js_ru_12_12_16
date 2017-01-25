import React, { Component, PropTypes } from 'react'
import store from '../store'
import { Provider } from 'react-redux'
import Menu from '../components/menu/Menu'
import MenuItem from '../components/menu/MenuItem'
import {en, ru} from "../i18n";

const i18n = {
    en,
    ru
}

class App extends Component {
    static propTypes = {

    };

    state = {
        username: '',
        selectedLanguage: 'en'
    }

    static childContextTypes = {
        user: PropTypes.string,
        i18n: PropTypes.object,
    }

    getChildContext() {
        return {
            user: this.state.username,
            i18n: i18n[this.state.selectedLanguage]
        }
    }

    render() {
        console.log('---', this.state)
        return (
            <Provider store = {store}>
                <div>
                    <h1>{i18n.appTitle}</h1>
                    <div>
                        Input username:
                        <input type="text" value={this.state.username} onChange={this.handleChange}/>
                    </div>
                    <div>
                        Select lang:
                        <select name="lang" id="lang" onChange={this.changeLang}>
                            <option value="en">English</option>
                            <option value="ru">Russian</option>
                        </select>
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

    changeLang = ev => {
        this.setState({
            selectedLanguage: ev.target.value
        })
    }
}

export default App
