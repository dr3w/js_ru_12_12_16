import React, { Component, PropTypes } from 'react'

class Menu extends Component {
    static propTypes = {

    };

    static contextTypes = {
      i18n: PropTypes.object
    }

    render() {
      const {i18n} = this.context

      return (
            <div>
                <h3>{i18n.menuTitle}</h3>
                <ul>
                    {this.props.children}
                </ul>
            </div>
        )
    }
}

export default Menu
