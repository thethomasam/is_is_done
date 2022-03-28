import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div class="row">
          <div class="col">
            <div class="p-1 h1 text-primary text-center mx-auto display-inline-block">
              <i class="fa fa-check bg-primary text-white rounded p-2"></i>
              <u>Is It Done ????</u>
            </div>
          </div>

          <div />
        </div>
      </div>
    );
  }
}
