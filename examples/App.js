import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Rect, Vector, Text} from '../src/objects';
import classes from './App.module'

import MondrianExample from './components/Mondrian';
// import MalevichExample from './components/Malevich';
// import SwissStyleExample from './components/SwissStyle';
// import MockupDesignerExample from './components/MockupDesigner';
// import TshirtDesignerExample from './components/TshirtDesigner';


export default class App extends Component {
  render() {
    return (
      <div className={classes.container}>
        <div className={classes.landing}>
          <h1>react-designer</h1>
          <h2>Easy to configure, lightweight, editable vector graphics in your react components.</h2>
          <ul className={classes.nav}>
            <li className={classes.current}><a href="#">usage</a></li>
            <li><a href="#examples">examples</a></li>
            <li><a href="http://github.com/fatiherikli/react-designer">docs</a></li>
            <li><a href="http://github.com/fatiherikli/react-designer">show on github</a></li>
          </ul>
        </div>
        <div className={classes.usage}>
          <h4 className={classes.mainTitle}>Usage</h4>
          <p>You should provide your objects and object types. The objects might be empty array if you want yo create a
          blank canvas.</p>

          You should listen onUpdate callback to update your objects. React-designer will invoke this
          callback in every update.
        </div>
        <h4 id="examples" className={classes.mainTitle}>Examples</h4>
        <div className={classes.example}>
          <div className={classes.info}>
            <h3>Mondrian</h3>
            <p>Default configuration with initial rectangle objects set on the internal state of
            container component.</p>
            <p>Enabled all default drawing tool set and panels.</p>
            <p>
              <a href="https://github.com/fatiherikli/react-designer/blob/master/examples/components/Mondrian.js">Show example on github</a>
            </p>
          </div>
          <div className={classes.preview}>
            <MondrianExample />
          </div>
        </div>
     </div>
    );
  }
}
