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
      haveData: false,
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
      return <Menu menuList={this.state.postData} />
  }

  render() {
    return (
      <div>
        <div className="tittle">
        <h5 className='menu-title'>Menu</h5>
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