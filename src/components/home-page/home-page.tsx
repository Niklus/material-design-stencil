import { Component } from '@stencil/core';

@Component({
  tag: 'home-page',
  styleUrl: 'home-page.scss'
})
export class HomePage {
  render() {
    return (
      <div id="home-page">
        <h1>HOME</h1>
      </div>
    );
  }
}