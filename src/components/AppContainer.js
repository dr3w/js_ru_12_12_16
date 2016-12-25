import React, {PropTypes} from 'react'
import ArticleList from './ArticleList'
import UserForm from './UserForm'
import Filter from './Filter'
import DayPicker from './DayPicker'

function AppContainer(props) {
    return (
        <div>
            <UserForm />
            <Filter articles={props.articles}/>
            <DayPicker />
            <ArticleList articles={props.articles}/>
        </div>
    )
}

AppContainer.propTypes = {}

export default AppContainer
