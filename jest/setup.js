// import Enzyme, { configure, shallow, mount, render } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
//
// configure({ adapter: new Adapter() })
// export { shallow, mount, render }
// export default Enzyme
//
// global.shallow = shallow;
// global.render = render;
// global.mount = mount;
// // Pula as mensagens de aviso do 'createElement'
// // Mas retorna um erro para qualquer outra
// console.error = message => {
//     if (!/(React.createElement: type should not be null)/.test(message) && !/(Async Storage)/.test(message)) {
//         throw new Error(message);
//     }
// };

import Enzyme, { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);

// test setup with JSDOM
const { JSDOM } = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
    Object.defineProperties(target, {
        ...Object.getOwnPropertyDescriptors(src),
        ...Object.getOwnPropertyDescriptors(target),
    });
}

global.window = window;
global.document = window.document;
global.navigator = {
    userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
    return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
    clearTimeout(id);
};
copyProps(window, global);


configure({ adapter: new Adapter() });
export { shallow, mount, render };
export default Enzyme;

console.error = message => {
    if (!/(Async Storage)/.test(message)) {
        // throw new Error(message);
    }
};