import React from 'react';
import basicNav from './nav/basicNav.js';
import tabNav from './nav/tabNav.js';

import Banner from './NavigationPlayground/Banner.js';
import CustomTabs from './NavigationPlayground/CustomTabs.js';
import SimpleTabs from './NavigationPlayground/SimpleTabs.js';
import StacksOverTabs from './NavigationPlayground/StacksOverTabs.js';
import CustomTransitioner from './NavigationPlayground/CustomTransitioner.js';
import ModalStack from './NavigationPlayground/ModalStack.js';
import Drawer from './NavigationPlayground/Drawer.js';
import TabAnimations from './NavigationPlayground/TabAnimations.js';
import TabsInDrawer from './NavigationPlayground/TabsInDrawer.js';
import MultipleDrawer from './NavigationPlayground/MultipleDrawer.js';
import StacksInTabs from './NavigationPlayground/StacksInTabs.js';

import ListApp from './ListApp/app.js';

import OnBoarding from './OnBoarding/Screens.js';

import MovieTicket from './MovieTicket/src/app.js';

export default class App extends React.Component {
  render() {
    return (

      <MovieTicket />
    );
  }
}
