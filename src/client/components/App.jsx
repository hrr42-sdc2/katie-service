import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Menu from './Menu.jsx';
import SingleItem from './SingleItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurantId: Math.floor(Math.random() * 10000000) + 1,
      view: null,
      menuTypes: null,
      postData: []
    }
    this.fetchMenus = this.fetchMenus.bind(this);
    this.fetchItems = this.fetchItems.bind(this);
  }

  fetchMenus() {
    console.log(this.state.restaurantId);
    $.ajax({
      url: '/menu/' + this.state.restaurantId,
      method: 'GET',
      success: data => {
        let menuTypes = [];
        data.forEach(item => {
          if(menuTypes.indexOf(item.menu_type) < 0) {
            menuTypes.push(item.menu_type);
          }
        });
        this.setState({
          menuTypes: menuTypes
        });
        this.fetchItems(data[0].menu_type);
      },
      error: () => {
        console.log('GET error!');
      }
    });
  }

  fetchItems(menuType) {
    $.ajax({
      url: '/menu/' + this.state.restaurantId + '/' + menuType,
      method: 'GET',
      success: data => {
        this.setState({
          view: menuType,
          postData: data
        })
      },
      error: () => {
        console.log('GET error!');
      }
    });
  };

  componentDidMount() {
    this.fetchMenus();
  };

  render() {
    if(this.state.view) {
      return (
        <div>
          <div className="menuTitle">
          <h5>Menu</h5>
          <hr />
          </div>
          <div>
          {this.state.menuTypes.map(menu =>
            <span key={menu}><button className="menuButton" key={menu} value={menu} onClick={() => this.fetchItems(menu)} >{menu}</button></span>
          )}
          <hr />
          </div>
          <div>
          <div className='lists'>
            <Menu menuList={this.state.postData}/>
          </div>
        </div>
        </div>
      )
    } else {
      return <div></div>
    }
  }
};

export default App;
