import { Component } from '@stencil/core';

@Component({
  tag: 'about-page',
  styleUrl: 'about-page.scss'
})
export class AboutPage {
  render() {
    return (
      <div id="about-page">
        <h1>ABOUT</h1>
      </div>
    );
  }
}