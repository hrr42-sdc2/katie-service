import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Menu from './Menu.jsx';
import SingleItem from './SingleItem.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'dinner',
      postData: []
    }
  }

  UpdateDinnerMenu() {
    $.ajax({
      url: '/api/dinner',
      method: 'GET',
      success: data => { console.log(data);
      this.setState({view: 'dinner', postData: data});
      },
      error: () => {console.log('GET error!');}
    });
  }

  UpdateWineMenu() {
    $.ajax({
      url: '/api/wine',
      method: 'GET',
      success: data => { console.log(data);
      this.setState({view: 'wine', postData: data});
      },
      error: () => {console.log('GET error!');}
    });
  }

  componentDidMount() {
    this.UpdateDinnerMenu();
  }

  renderView() {
    const {view} = this.state;

    if (view === 'dinner') {
      let starters = this.state.postData.filter(function(meal) {
        return meal.category === 'Starters'
      });
      let steaks = this.state.postData.filter(function(meal) {
        return meal.category === 'Steaks & Chops'
      });
      let bone = this.state.postData.filter(function(meal) {
        return meal.category === 'Bone-In Cuts'
      });
      let seafood = this.state.postData.filter(function(meal) {
        return meal.category === 'Seafood'
      });

      return (
        <div className='lists'>
          <div className='list1'>Starters</div>
          <Menu menuList={starters} />
          <hr />
          <div className='list2'>Steaks & Chops</div>
          <Menu menuList={steaks} />
          <hr />
          <div className='list3'>Bone-In Cuts</div>
          <Menu menuList={bone} />
          <hr />
          <div className='list4'>Seafood</div>
          <Menu menuList={seafood} />
          <hr />
        </div>

      );
  } else {
    return (
      <div>
      <div className='list5'>Wine</div>

      <Menu menuList={this.state.postData} />
      </div>
    )
  }

  }

  render() {
    return (
      <div>
        <div className="menuTitle">
        <h5>Menu</h5>
        <hr />
        </div>

        <div>
        <span><button className="menuButton" onClick={() => this.UpdateDinnerMenu()} > Dinner Menu </button></span>
        <span><button className="menuButton" onClick={() => this.UpdateWineMenu()} > Wine List </button></span>
        <hr />
        </div>

        <div>
          {this.renderView()}
        </div>

      </div>
    )
  }

}
export default App;