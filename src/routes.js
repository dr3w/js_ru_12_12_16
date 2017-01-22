import React from 'react'
import {Router, Route, hashHistory, browserHistory, Redirect} from 'react-router'
import App from './RouteHandlers/App'
import CommentListRoute from './RouteHandlers/CommentListRoute'
import ArticleList from './RouteHandlers/ArticleListRoute'
import Article from './RouteHandlers/ArticleRoute'
import Filters from './RouteHandlers/Filters'
import NotFound from './RouteHandlers/NotFound'

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="articles" component={ArticleList}>
        <Route path=":id" component={Article}/>
      </Route>
      <Route path="filters" component={Filters}/>
      <Route path="comments/:page" component={CommentListRoute}/>
      <Redirect from="comments" to="comments/1" />
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
)
