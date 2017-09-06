import { Component } from '@stencil/core';

@Component({
  tag: 'app-view1',
  styleUrl: 'app-view1.scss'
})
export class AppView1 {
  render() {
    return (
      <div id="app-view1">
        
        <h1>VIEW 1</h1>
        
        <h2>Grid defaults</h2>
        <div class="grid mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
            <div class="cell mdc-layout-grid__cell">4</div>
            <div class="cell mdc-layout-grid__cell">4</div>
            <div class="cell mdc-layout-grid__cell">4</div>
          </div>
        </div>

        <h2>Different screen sizes</h2>
        <div class="grid mdc-layout-grid">
          <div class="mdc-layout-grid__inner">
            <div class="cell mdc-layout-grid__cell mdc-layout-grid__cell--span-6 mdc-layout-grid__cell--span-8-tablet">6 (8 tablet)</div>
            <div class="cell mdc-layout-grid__cell mdc-layout-grid__cell--span-4 mdc-layout-grid__cell--span-6-tablet">4 (6 tablet)</div>
            <div class="cell mdc-layout-grid__cell mdc-layout-grid__cell--span-2 mdc-layout-grid__cell--span-4-phone">2 (4 phone)</div>
          </div>
        </div>

        <a href="https://material-components-web.appspot.com/layout-grid.html">Check out this link for more</a>
      </div>
    );
  }
}