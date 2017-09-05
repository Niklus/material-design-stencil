import { Component } from '@stencil/core';

@Component({
  tag: 'my-app',
  styleUrl: 'my-app.scss'
})
export class MyApp {
  render() {
    return (
      <div id="my-app">
      
        {/* App Navigation*/}
        <app-nav></app-nav>
        
        {/* App Router*/}
        <stencil-router id="router">
          <stencil-route
            url="/"
            component="home-page"
            router="#router"
            exact={true}
          />
          <stencil-route
            url="/about"
            component="about-page"
            router="#router"
          />
          <stencil-route
            url="/contact"
            component="contact-page"
            router="#router"
          />
        </stencil-router>
      </div>
    );
  }
}