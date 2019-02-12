import React from "react";
import Cards from "./Cards";
import { CARDS_API } from "../util/config";
import PropTypes from "prop-types";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [],
      currentCard: 0,
      position: 0,
      cardStyle: {
        transform: "translateX(0px)",
        width: "0px"
      },
      width: 0
    };
  }

  componentDidMount() {
    //
    fetch(CARDS_API)
      .then(response => response.json())
      .then(data => {
        const width = 924 / this.props.numCardsToShow;
        const cardStyle = {
          transform: "translateX(0px)",
          width: `${width}px`
        };
        console.log(data.results);
        this.setState({
          cardData: data.results.filter(ship => ship.crew > 10),
          cardStyle: cardStyle,
          width: width
        });
      });
  }

  // func: click the slider buttons
  handleClick(type) {
    // get the card's margin-right
    let margin = window.getComputedStyle(document.getElementById("card"))
      .marginLeft;
    margin = JSON.parse(margin.replace(/px/i, ""));

    const cardWidth = this.state.width; // the card's width
    const cardMargin = margin; // the card's margin
    const cardNumber = this.state.cardData.length; // the number of cards
    let currentCard = this.state.currentCard; // the index of the current card
    let position = this.state.position; // the position of the cards

    // slide cards
    if (
      type === "next" &&
      currentCard < cardNumber - this.props.numCardsToShow
    ) {
      currentCard++;
      position -= cardWidth + cardMargin;
    } else if (type === "prev" && currentCard > 0) {
      currentCard--;
      position += cardWidth + cardMargin;
    }
    this.setCard(currentCard, position);
  }

  setCard(currentCard, position) {
    this.setState({
      currentCard: currentCard,
      position: position,
      cardStyle: {
        transform: `translateX(${position}px)`,
        transition: "transform .3s ease-out",
        width: "308px"
      }
    });
  }

  render() {
    const leftArrowStyle = {
      color: ` ${this.state.currentCard === 0 ? "grey" : "green"}`
    };
    const rigthArrowStyle = {
      color: ` ${
        this.state.currentCard ===
        this.state.cardData.length - this.props.numCardsToShow
          ? "grey"
          : "green"
      }`
    };
    return (
      <div>
        <Cards
          cardsToShow={this.state.cardData}
          cardStyle={this.state.cardStyle}
        />
        <div className="icon-btn">
          <button
            style={leftArrowStyle}
            onClick={() => this.handleClick("prev")}
          >
            <i className="medium material-icons">chevron_left</i>
          </button>
          <button
            style={rigthArrowStyle}
            onClick={() => this.handleClick("next")}
          >
            <i className="medium material-icons">chevron_right</i>
          </button>
        </div>
      </div>
    );
  }
}

Slider.defaultProps = {
  numCardsToShow: 3
};

Slider.propTypes = {
  numCardsToShow: PropTypes.number
};

export default Slider;
