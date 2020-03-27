import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div>
        <header className="topbar">
          <nav className="navbar top-navbar navbar-expand-md navbar-dark">
            {/* ============================================================== */}
            {/* Logo */}
            {/* ============================================================== */}
            <div className="navbar-header">
              <a className="navbar-brand" href="index.html">
                {/* Logo icon */}
                <b>
                  <img
                    src="../assets/images/logo-light-icon.png"
                    alt="homepage"
                    className="light-logo"
                  />
                </b>
                {/*End Logo icon */}
                {/* Logo text */}
                <span>
                  {/* Light Logo text */}
                  Logo
                </span>
              </a>
            </div>
            {/* ============================================================== */}
            {/* End Logo */}
            {/* ============================================================== */}
            <div className="navbar-collapse">
              {/* ============================================================== */}
              {/* toggle and nav items */}
              {/* ============================================================== */}
              <ul className="navbar-nav mr-auto">
                {/* This is  */}
                <li className="nav-item">
                  <a
                    className="nav-link nav-toggler d-block d-md-none waves-effect waves-dark"
                    href="#"
                  >
                    <i className="ti-menu" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link sidebartoggler d-none d-lg-block d-md-block waves-effect waves-dark"
                    href="#"
                  >
                    <i className="icon-menu" />
                  </a>
                </li>
                {/* ============================================================== */}
                {/* Search */}
                {/* ============================================================== */}
                {/* <li class="nav-item">
                      <form class="app-search d-none d-md-block d-lg-block">
                          <input type="text" class="form-control" placeholder="Search & enter">
                      </form>
                  </li> */}
              </ul>
              {/* ============================================================== */}
              {/* User profile */}
              {/* ============================================================== */}
              <ul className="navbar-nav my-lg-0">
                {/* ============================================================== */}
                {/* Comment */}
                {/* ============================================================== */}
                <li className="nav-item dropdown sidebar-item">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="ti-announcement" />
                    <div className="notify">
                      <span className="heartbit" /> <span className="point" />
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right mailbox animated fadeInDown fast">
                    <ul>
                      <li>
                        <div className="drop-title">Notifications</div>
                      </li>
                      <li>
                        <div className="message-center">
                          {/* Message */}
                          <a href="#">
                            <div className="btn btn-danger btn-circle">
                              <i className="fa fa-link" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Launch Admin</h5>
                              <span className="mail-desc">
                                Just see the my new admin!
                              </span>
                              <span className="time">9:30 AM</span>
                            </div>
                          </a>
                          {/* Message */}
                          <a href="#">
                            <div className="btn btn-success btn-circle">
                              <i className="ti-calendar" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Event today</h5>
                              <span className="mail-desc">
                                Just a reminder that you have event
                              </span>
                              <span className="time">9:10 AM</span>
                            </div>
                          </a>
                          {/* Message */}
                          <a href="#">
                            <div className="btn btn-info btn-circle">
                              <i className="ti-settings" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Settings</h5>
                              <span className="mail-desc">
                                You can customize this template as you want
                              </span>
                              <span className="time">9:08 AM</span>
                            </div>
                          </a>
                          {/* Message */}
                          <a href="#">
                            <div className="btn btn-primary btn-circle">
                              <i className="ti-user" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5>
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>
                              <span className="time">9:02 AM</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a className="nav-link text-center link" href="#;">
                          <strong>Check all notifications</strong>
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End Comment */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Messages */}
                {/* ============================================================== */}
                <li className="nav-item dropdown sidebar-item">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark"
                    href=""
                    id="2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon-note" />
                    <div className="notify">
                      <span className="heartbit" /> <span className="point" />
                    </div>
                  </a>
                  <div
                    className="dropdown-menu mailbox dropdown-menu-right animated fadeInDown fast"
                    aria-labelledby="2"
                  >
                    <ul>
                      <li>
                        <div className="drop-title">
                          You have 4 new messages
                        </div>
                      </li>
                      <li>
                        <div className="message-center">
                          {/* Message */}
                          <a href="#">
                            <div className="user-img">
                              <img
                                src="../assets/images/users/1.jpg"
                                alt="user"
                                className="img-circle"
                              />
                              <span className="profile-status online pull-right" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5>
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>
                              <span className="time">9:30 AM</span>
                            </div>
                          </a>
                          {/* Message */}
                          <a href="#">
                            <div className="user-img">
                              <img
                                src="../assets/images/users/2.jpg"
                                alt="user"
                                className="img-circle"
                              />
                              <span className="profile-status busy pull-right" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Sonu Nigam</h5>
                              <span className="mail-desc">
                                I've sung a song! See you at
                              </span>
                              <span className="time">9:10 AM</span>
                            </div>
                          </a>
                          {/* Message */}
                          <a href="#">
                            <div className="user-img">
                              <img
                                src="../assets/images/users/3.jpg"
                                alt="user"
                                className="img-circle"
                              />
                              <span className="profile-status away pull-right" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Arijit Sinh</h5>
                              <span className="mail-desc">I am a singer!</span>
                              <span className="time">9:08 AM</span>
                            </div>
                          </a>
                          {/* Message */}
                          <a href="#">
                            <div className="user-img">
                              <img
                                src="../assets/images/users/4.jpg"
                                alt="user"
                                className="img-circle"
                              />
                              <span className="profile-status offline pull-right" />
                            </div>
                            <div className="mail-contnet">
                              <h5>Pavan kumar</h5>
                              <span className="mail-desc">
                                Just see the my admin!
                              </span>
                              <span className="time">9:02 AM</span>
                            </div>
                          </a>
                        </div>
                      </li>
                      <li>
                        <a className="nav-link text-center link" href="#;">
                          <strong>See all e-Mails</strong>
                          <i className="fa fa-angle-right" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End Messages */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* User Profile */}
                {/* ============================================================== */}
                <li className="nav-item dropdown u-pro sidebar-item">
                  <a
                    className="nav-link dropdown-toggle waves-effect waves-dark profile-pic"
                    href=""
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/users/1.jpg"
                      alt="user"
                      className=""
                    />
                    <span className="hidden-md-down ml-1">
                      Mark &nbsp;
                      <i className="fa fa-angle-down" />
                    </span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-right animated flipInY">
                    {/* text*/}
                    <a href="#" className="dropdown-item">
                      <i className="ti-user" /> My Profile
                    </a>
                    {/* text*/}
                    <a href="#" className="dropdown-item">
                      <i className="ti-wallet" /> My Balance
                    </a>
                    {/* text*/}
                    <a href="#" className="dropdown-item">
                      <i className="ti-email" /> Inbox
                    </a>
                    {/* text*/}
                    <div className="dropdown-divider" />
                    {/* text*/}
                    <a href="#" className="dropdown-item">
                      <i className="ti-settings" /> Account Setting
                    </a>
                    {/* text*/}
                    <div className="dropdown-divider" />
                    {/* text*/}
                    <a href="login.html" className="dropdown-item">
                      <i className="fa fa-power-off" /> Logout
                    </a>
                    {/* text*/}
                  </div>
                </li>
                {/* ============================================================== */}
                {/* End User Profile */}
                {/* ============================================================== */}
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
