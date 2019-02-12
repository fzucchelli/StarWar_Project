import React from "react";
import Film from "./Film";
import "./styles.css";

class Cards extends React.Component {
  ColorChange = e => {
    var heart = e.currentTarget;
    if (heart.style.color !== "green") {
      heart.style.color = "green";
    } else {
      heart.style.color = "grey";
    }
  };
  render() {
    return (
      <div className="content">
        {this.props.cardsToShow.map((data, i) => {
          return (
            <div
              className="card"
              id="card"
              key={data.id}
              style={this.props.cardStyle}
            >
              <div className="card-image waves-effect waves-block waves-light">
                <a href={data.href}>
                  <div className="row valign-wrapper header">
                    <div className="col s3">
                      <img
                        src="images.png"
                        alt=""
                        className="circle responsive-img"
                      />
                    </div>
                    <div className="col s10">
                      <span className="title">{data.name}</span>
                      <br />
                      <span className="subTitle">{data.model}</span>
                      <br />
                      <span className="subTitle">Crew: {data.crew}</span>
                    </div>
                  </div>
                </a>
              </div>
              <hr />
              <p className="para">
                <b>Films</b>
              </p>
              <div className="card-content" />
              {data.films.map(film => (
                <p>
                  <Film filmTitle={film} />
                </p>
              ))}
            </div>
          );
        })}
      </div>
    );
  }
}
export default Cards;
