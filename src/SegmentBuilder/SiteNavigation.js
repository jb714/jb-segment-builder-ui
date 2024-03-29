import React, { Component, Fragment } from 'react';

// <div className="site-nav horizontal-nav sm-up-hidden">
// </div>

class SiteNavigation extends Component {
  render (){
    return (
      <Fragment>
        <div className="sidebar-container d-none d-lg-block">
          <div className="site-nav sidebar-nav">
            <a className="sidebar-item">Overviews</a>
            <a className="sidebar-item">Experiences</a>
            <a className="sidebar-item active">Segments</a>
            <a className="sidebar-item">Insights</a>
            <a className="sidebar-item">Visitor Cloud</a>
          </div>
        </div>

        <div className="site-nav mobile-nav d-xs-block d-lg-none">
          <a className="mobile-nav-item">Overviews</a>
          <a className="mobile-nav-item">Experiences</a>
          <a className="mobile-nav-item active">Segments</a>
          <a className="mobile-nav-item">Insights</a>
          <a className="mobile-nav-item">Visitor Cloud</a>
        </div>
      </Fragment>
    );
  }
}

export default SiteNavigation;
