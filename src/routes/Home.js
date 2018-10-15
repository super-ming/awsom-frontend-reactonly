import React, { Component, Fragment } from 'react';
import '../styles/_home.css';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ticker: false,
      opacity: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (!this.state.ticker) {
      if (window.scrollY > 50) {
        this.setState({ ticker: true, opacity: true });
        // console.log(this.state.ticker);
      }
    }
  }

  render() {
    // console.log(this.state.display);
    return (
      <Fragment>
        <main className="container">
          <div className="main-wrapper">
            <div className="intro">
              <h1>Making music. Your home. Your time.</h1>
              <p>
                We are excited that you are looking into the journey of learning
                music with us. We hire only the highest quality of teachers to
                assist our students as they embark on the exciting opportunity
                of starting or continuing with an instrument. Follow the links
                below to find out more about the instruments we offer.
              </p>
            </div>
            <div id="choose-adv" className="nav-down">
              <h1
                style={{
                  opacity: `${this.state.opacity ? '1' : '0'}`,
                  transition: 'opacity .5s ease-in'
                }}
              >
                Choose Your Instrument
              </h1>
            </div>
            <div className="wrapper container-fluid">
              <div className="row">
                <div className="col-sm-5 offset-sm-1">
                  <div className="cards">
                    <img
                      alt="piano"
                      src="https://images.pexels.com/photos/1246437/pexels-photo-1246437.jpeg?cs=srgb&dl=4k-wallpaper-close-up-fingers-1246437.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/piano/"
                      >
                        Piano
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="cards">
                    <img
                      alt="guitar"
                      src="https://images.pexels.com/photos/15919/pexels-photo.jpg?cs=srgb&dl=e-guitar-electric-guitar-15919.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/guitar/"
                      >
                        Guitar
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 offset-sm-1">
                  <div className="cards">
                    <img
                      alt="drums"
                      src="https://images.pexels.com/photos/995301/pexels-photo-995301.jpeg?cs=srgb&dl=adult-band-concert-995301.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/drums/"
                      >
                        Drums
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="cards">
                    <img
                      alt="woodwind"
                      src="https://images.pexels.com/photos/417456/pexels-photo-417456.jpeg?cs=srgb&dl=adult-band-bokeh-417456.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/woodwind/"
                      >
                        Woodwind
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 offset-sm-1">
                  <div className="cards">
                    <img
                      alt="voice"
                      src="https://images.pexels.com/photos/462442/pexels-photo-462442.jpeg?cs=srgb&dl=adult-band-cap-462442.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/voice/"
                      >
                        Voice
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="cards">
                    <img
                      alt="brass"
                      src="https://images.pexels.com/photos/1049690/pexels-photo-1049690.jpeg?cs=srgb&dl=brass-hand-instrument-1049690.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/brass/"
                      >
                        Brass
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5 offset-sm-1">
                  <div className="cards">
                    <img
                      alt="strings "
                      src="https://images.pexels.com/photos/111287/pexels-photo-111287.jpeg?cs=srgb&dl=concert-music-musical-instrument-111287.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/strings/"
                      >
                        Strings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-5">
                  <div className="cards">
                    <img
                      alt="chamber"
                      src="https://images.pexels.com/photos/306081/pexels-photo-306081.jpeg?cs=srgb&dl=acoustic-band-bass-306081.jpg&fm=jpg"
                    />
                    <div className="image-caption-wrapper">
                      <a
                        className="image-caption"
                        href="https://www.awsom.info/chamber/"
                      >
                        Chamber
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment>
    );
  }
}
