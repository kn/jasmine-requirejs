/**
 * Defines a suite of requirejs module specifications
 *
 * Wraps a Jasmine describe block inside a require statement
 * so that all dependencis are fulfilled before each spec.
 * The loaded module is available as this.Module.
 *
 * @example
 * describeModule('app/modules/example_module.js', function() {
 *   it('loads the module as this.Module', function() {
 *     expect(this.Module).toBeDefined();
 *   });
 * });
 *
 * @param {string} path - The path to a file defining the module.
 * @param {specs} specs - The specifications of the module.
 */
var describeModule = function(path, specs) {
  jasmine.getEnv().describeModule(path, specs);
};

(function() {
  jasmine.Env.prototype.describeModule = function(path, specs) {
    describe(path, function() {
      beforeEach(function() {
        var self = this
          , done = false;
        runs(function() {
          require([path], function(Module) {
            self.Module = Module;
            done = true;
          });
        });
        waitsFor(function() { return done; });
      });

      specs.apply(this);
    });
  };
})();
