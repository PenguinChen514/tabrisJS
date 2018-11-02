"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
let navigationview = new tabris_1.NavigationView({
    top: 0, left: 0, right: 0, bottom: 0
}).appendTo(tabris_1.ui.contentView);
let page = new tabris_1.Page({
    title: 'Taco Shaker'
}).appendTo(navigationview);
let scrollView = new tabris_1.ScrollView({
    left: 0, top: 0, right: 0, bottom: 0
}).appendTo(page);
let textView = new tabris_1.TextView({
    top: 0, left: 16, right: 16,
    id: 'title',
    text: 'title goes here',
    font: 'bold 28px'
}).appendTo(scrollView);
