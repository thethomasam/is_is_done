import React, { Component } from "react";

export default class TaskAdder extends Component {
  render() {
    return (
      <div className="TaskAdder">
        <div class="row m-1 p-3">
          <div class="col col-11 mx-auto">
            <div class="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
              <div class="col">
                <input
                  class="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                  type="text"
                  placeholder="Add new .."
                />
              </div>
              <div class="col-auto m-0 px-2 d-flex align-items-center">
                <label class="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                  Due date not set
                </label>
                <i
                  class="fa fa-calendar my-2 px-1 text-primary btn due-date-button"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Set a Due date"
                ></i>
                <i
                  class="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
                  data-toggle="tooltip"
                  data-placement="bottom"
                  title="Clear Due date"
                ></i>
              </div>
              <div class="col-auto px-0 mx-0 mr-2">
                <button type="button" class="btn btn-primary">
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
