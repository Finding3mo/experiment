import React, { Component } from "react";
import ReactDOM from "react-dom";
import CustomTitle from "../../ts/components/CustomTitle";

export default class Example extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <CustomTitle title="カスタムタイトル" />
              <div className="panel-heading">Example Component</div>
              <div className="panel-body">I'm an example component!</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

if (document.getElementById("example")) {
  ReactDOM.render(<Example />, document.getElementById("example"));
}
