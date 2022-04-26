import React, { Component } from "react";
import '../css/dashboard.css'

export default class extends Component {
  render() {
    return (
      <div>
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">
              NEWS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
           REGISTER EARN
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              STORES
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">DISCOUNTS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">GASTRONOMY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">SOCIAL RESPONSIBILITY</a>
          </li>
          <li class="nav-item">
            <a class="nav-link ">COMMERCIAL CONTACT</a>
          </li>
        </ul>
      </div>
    );
  }
}
