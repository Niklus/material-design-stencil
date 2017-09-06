import { Component, Element } from '@stencil/core';
import {MDCSnackbar} from '@material/snackbar';

@Component({
  tag: 'app-main',
  styleUrl: 'app-main.scss'
})
export class AppMain {

  @Element() element: HTMLElement;

  componentDidLoad(){
    
    const snackbar = new MDCSnackbar(this.element.querySelector('.mdc-snackbar'));
    
    const dataObj = {
      message: 'App Loaded',
      actionText: 'Undo',
      actionHandler: () => {
        alert("Sorry Can't do that");
      }
    };

    snackbar.show(dataObj);
  }

  render() {
    return (
      <div id="app-main">
      
        { /* App Navigation*/ }
        <app-nav></app-nav>
        
        { /* App Router*/ }
        <stencil-router id="router">
          <stencil-route
            url="/"
            component="app-view1"
            router="#router"
            exact={true}
          />
          <stencil-route
            url="/view2"
            component="app-view2"
            router="#router"
          />
          <stencil-route
            url="/view3"
            component="app-view3"
            router="#router"
          />
        </stencil-router>
        
        { /* App Snackbar:*/ }
        <div class="mdc-snackbar"
            aria-live="assertive"
            aria-atomic="true"
            aria-hidden="true">
          <div class="mdc-snackbar__text"></div>
          <div class="mdc-snackbar__action-wrapper">
            <button type="button" class="mdc-button mdc-snackbar__action-button"></button>
          </div>
        </div>
      </div>
    );
  }
}