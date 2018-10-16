import React, { Component, Fragment } from 'react';
import '../styles/_home.css';
import piano from '../assets/images/piano.jpg';
import guitar from '../assets/images/guitar.jpg';
import drums from '../assets/images/drums.jpg';
import brass from '../assets/images/brass.jpg';
import strings from '../assets/images/strings.jpg';
import woodwind from '../assets/images/woodwind.jpg';
import voice from '../assets/images/voice.jpg';
import chamber from '../assets/images/chamber.jpg';

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
      }
    }
  }

  render() {
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
                    <a href="https://www.awsom.info/piano/">
                      <img src={piano} alt="piano" />
                    </a>
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
                <div className="col-sm-5 card_container">
                  <div className="cards">
                    <a href="https://www.awsom.info/guitar/">
                      <img src={guitar} alt="guitar" />
                    </a>
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
                    <a href="https://www.awsom.info/drums/">
                      <img src={drums} alt="drums" />
                    </a>
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
                    <a href="https://www.awsom.info/woodwind/">
                      <img src={woodwind} alt="woodwind" />
                    </a>
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
                    <a href="https://www.awsom.info/voice/">
                      <img src={voice} alt="voice" />
                    </a>
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
                    <a href="https://www.awsom.info/brass/">
                      <img src={brass} alt="brass" />
                    </a>
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
                    <a href="https://www.awsom.info/strings/">
                      <img src={strings} alt="strings" />
                    </a>
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
                    <a href="https://www.awsom.info/chamber/">
                      <img src={chamber} alt="chamber" />
                    </a>
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
