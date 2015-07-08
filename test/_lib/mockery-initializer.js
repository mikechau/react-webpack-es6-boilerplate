module.exports = function() {
  global.before(function(next) {
    mockery.enable({
      warnOnUnregistered: false
    });

    next(null);
  });

  global.after(function() {
    mockery.disable();
  });

  global.afterEach(function() {
    mockery.deregisterAll();
  });
};
