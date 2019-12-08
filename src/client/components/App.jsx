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
      url: 'http://localhost:27017/api/dinner',
      method: 'GET',
      success: data => { console.log(data);
      this.setState({postData: data});
      },
      error: () => {console.log('GET error!');}
    });
  }

  UpdateWineMenu() {
    $.ajax({
      url: 'http://localhost:27017/api/wine',
      method: 'GET',
      success: data => { console.log(data);
      this.setState({postData: data});
      },
      error: () => {console.log('GET error!');}
    });
  }

  componentDidMount() {
    this.UpdateDinnerMenu();
  }

  changeView(option) {
    this.setState({
      view: option
    });
  }

  renderView() {
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
      let wine = this.state.postData;

      return (
        <div className='lists'>
          <div className='list1'>Starters</div>
          <Menu menuList={starters} />

          <div className='list2'>Steaks & Chops</div>
          <Menu menuList={steaks} />

          <div className='list3'>Bone-In Cuts</div>
          <Menu menuList={bone} />

          <div className='list4'>Seafood</div>
          <Menu menuList={seafood} />

          <div>Wine</div>
          <Menu menuList={wine} />
        </div>

      );

  }

  render() {
    return (
      <div>
        <div className="title">
        <h5>Menu</h5>
        </div>

        <div>
        <span><button onClick={() => this.UpdateDinnerMenu()} > Dinner Menu </button></span>
        <span><button onClick={() => this.UpdateWineMenu()} > Wine List </button></span>
        </div>

        <div className="menuList">
          {this.renderView()}
        </div>

      </div>
    )
  }

}
export default App;