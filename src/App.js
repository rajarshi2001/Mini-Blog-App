import './App.css';
import Header from './Component/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BlogList from './Component/BlogList';
import BlogPost from './Component/BlogPost';
import BlogDetails from './Component/BlogDetail';
import Error from './Component/Error';
import BlogUpdate from './Component/BlogUpdate';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={BlogList} />
          <Route exact path="/post" component={BlogPost} />
          <Route exact path="/details/:id" component={BlogDetails} />
          <Route exact path="/update/:id/" component={BlogUpdate} />
          <Route component={Error}></Route>
        </Switch>
      </BrowserRouter>

    </>
  )
};

export default App;
