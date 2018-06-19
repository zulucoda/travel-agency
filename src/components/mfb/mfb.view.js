/**
 * Created by Muzikayise Flynn Buthelezi (zuluCoda) on 2018/06/19.
 * Copyright mfbproject.co.za - muzi@mfbproject.co.za
 * Copyright zulucoda - mfbproject
 */
import React, { Component } from 'react';

export default class MfbView extends Component {
  render() {
    return (
      <footer className="footer" id="footer">
        <ul className="nav">
          <li className="mfb-project-01">
            <a href="https://mfbproject.co.za" target="_blank">
              <img src="/assets/images/mfbprojectlogog_new_project_2014_144.png" />{' '}
              created by mfb project
            </a>
          </li>
        </ul>
        <ul className="nav">
          <li>Copyright &copy; 2018 Muzikayise Flynn Buthelezi (zuluCoda)</li>
        </ul>
      </footer>
    );
  }
}
