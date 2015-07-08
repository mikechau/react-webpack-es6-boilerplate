process.env.NODE_ENV = 'test';

global.babel = require('babel/register')({ stage: 0 });
global.expect = require('chai').expect;
global.React = require('react/addons');
global.sinon = require('sinon');
global.nock = require('nock');
global.TestUtils = React.addons.TestUtils;
global.mockery = require('mockery');

global.ReactStub = React.createClass({
  displayName: 'StubClass',
  render: function() {
    return null;
  }
});

global.jsdom = require('mocha-jsdom');

global.initMockery = require('./mockery-initializer');

global.BROWSER = false;
