import React, { Component } from 'react';
import Logo from './Logo';
import FreeTrialButton from './FreeTrialButton';
import { Link } from 'react-router-dom';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class AppNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar expand="md" className="mb-5" dark>
          <NavbarBrand href="/">
            <Logo />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  LEARN
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://www.awsom.info/piano/">
                    Piano
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/guitar/">
                    Guitar
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/voice/">
                    Voice
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/woodwind/">
                    Woodwinds
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/brass/">
                    Brass
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/drums/">
                    Drums
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/strings/">
                    Strings
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/chamber/">
                    Chamber
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  TEACHERS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://www.awsom.info/los-angeles/">
                    LOS ANGELES, CA
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/madison-wi-1/">
                    MADISON, WI
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/seattle-was/">
                    SEATTLE, WA
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://www.awsom.info/blog/">BLOG</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  QUESTIONS
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem href="https://www.awsom.info/faqs/">
                    FAQ'S
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/teacherrates/">
                    TEACHER RATES
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/tuition-policy/">
                    TUITION POLICY
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/summerpolicy/">
                    SUMMER LESSONS
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/terms/">
                    TERMS
                  </DropdownItem>
                  <DropdownItem href="https://www.awsom.info/class/">
                    EDUCATOR REQUEST FORM
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://www.awsom.info/recitals-1/">
                  RECITALS
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://www.awsom.info/careers/">
                  CAREERS
                </NavLink>
              </NavItem>
              <span className="navbar_tab" />
              <NavItem>
                <Link to="/free-trial">
                  <FreeTrialButton />
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;
