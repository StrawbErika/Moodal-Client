import React, { Component } from 'react';
import "./Basis.css";
import 'semantic-ui-css/semantic.min.css';

class Basis extends Component {
  render() {
    return (
        <div>
            <div className="ui pointing menu" id="nav">
                <button className="ui circular icon button" role="button" id="circle-button">
                    <i aria-hidden="true" className="settings icon"></i>
                </button>
                <h1 id="header-text"> moodal </h1>
            </div>
            {/* <div class="ui segment">
                <img src="/assets/images/wireframe/media-paragraph.png" />
            </div> */}
        </div>
    );
  }
}

export default Basis;
