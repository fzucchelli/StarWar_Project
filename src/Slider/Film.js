import React from "react";
import "./styles.css";

export default class Film extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmTitle: "",
      release_date: ""
    };
  }

  componentDidMount() {
    //
    fetch(this.props.filmTitle)
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({
          filmTitle: data.title,
          release_date: data.release_date
        });
      });
  }

  render() {
    return (
      <div className="row valign-wrapper header">
        <div className="col s3">
          <img
            src="star-wars.png"
            alt=""
            className="circle-film responsive-img"
          />
        </div>
        <div className="col s10">
          <span className="subTitle">
            {this.state.filmTitle}
            {"  "}
            {`(${this.state.release_date})`}
          </span>
        </div>
      </div>
    );
  }
}
