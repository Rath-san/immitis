/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// Load images
import logoImage from 'images/app-promo/immitis_logo.svg';
import splashImage from 'images/agency-landing/welcome-cover.jpg';

import googleStoreImage from 'images/app-promo/badge-google-play-store.png';
import appleStoreImage from 'images/app-promo/badge-apple-store.png';

import iphoneMockupImage from 'images/app-promo/immitis_splash.svg';
import screenshotImg from 'images/app-promo/long-tech-hall.jpg'

// .pug apply template
if (process.env.NODE_ENV !== 'production') {
    require('./_pug/index.pug');
}

// ================================
// START YOUR APP HERE
// ================================
console.log('hello world');

// splash
const logo = document.getElementById('logo');
logo.src = logoImage;

// navbar
// const splash = document.getElementById('splash');
// splash.src = splashImage

// stores
// const apple = document.getElementById('IconApple')
// const google = document.getElementById('IconGoogle')

// apple.src = appleStoreImage
// google.src = googleStoreImage

const iphoneMockup = document.getElementById('iphoneMockup');
iphoneMockup.src = iphoneMockupImage

const screenshot = document.getElementById('screenshot');
screenshot.src = screenshotImg