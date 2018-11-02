import {ActivityIndicator, NavigationView, Page, ScrollView, TextView, ui} from 'tabris';

let navigationview = new NavigationView({
  top:0, left:0, right:0, bottom:0
}).appendTo(ui.contentView);

let page = new Page({
  title: 'Taco Shaker'
}).appendTo(navigationview);

let scrollView = new ScrollView({
  left:0, top:0, right:0, bottom:0
}).appendTo(page);

let textView = new TextView({
  top:0, left:16, right:16,
  id:'title',
  text:'title goes here',
  font: 'bold 28px'
}).appendTo(scrollView);