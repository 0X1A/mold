import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class DashSideNav extends Component {
  render() {
    let sideBarStyle = {
      position: 'fixed',
      top: '51px',
      bottom: 0,
      left: 0,
      zIndex: 1000,
      padding: '20px',
      overflowX: 'hidden',
      overflowY: 'auto',
      borderRight: '1px solid #eee',
      paddingLeft: 0,
      paddingRight: 0
    };

    let sideBarNavItemStyle = {
      width: '100%',
      marginLeft: 0
    };

    return(
      <div>
        <nav className="col-sm-3 col-md-2 hidden-xs-down bg-fadded" style={sideBarStyle}>
          <ul className="nav nav-pills flex-column">
            <li style={sideBarNavItemStyle} className="nav-item">
              <Link to="/dash/posts" className="nav-link">Posts</Link>
            </li>
            <li style={sideBarNavItemStyle} className="nav-item">
              <Link to="/dash/profile" className="nav-link">Profile</Link>
            </li>
            <li style={sideBarNavItemStyle} className="nav-item">
              <Link to="/dash/pages" className="nav-link">Pages</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
