"use strict";
import {cats, state, PAGES} from './catInfo';
import renderProduct from './render';

const rootEl = document.querySelector('#root');

renderProduct(state, cats, rootEl);