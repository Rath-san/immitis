/**
 * Application entry point
 */

// Load application styles
import 'styles/index.scss';

// Load images

// .pug apply template
if (process.env.NODE_ENV !== 'production') {
    require('./_pug/index.pug');
}

// ================================
// START YOUR APP HERE
// ================================
console.log('hello world');
