import {test} from 'tape';
import {add} from './index.js';
import {compose, createStore} from 'redux';
import {isValid} from 'date-fns';

test('yo', t => {
    t.plan(3);
    t.equal(add(1, 2), 3);
    t.equal(typeof compose, 'function');
    t.equal(isValid('hello'), false);
});
