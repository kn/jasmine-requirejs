# jasmine-requirejs

A collection of functions that help testing Requirejs with [Jasmine](http://pivotal.github.com/jasmine/).

## Installation

## describeModule

Defines a suite of requirejs module specifications. This wraps a Jasmine describe block inside a require statement so that all dependencies are fullfilled before each spec. The loaded module is available as this.Module. For example:

```
describe('app/modules/example.js', function() {
  it("loads the module as this.Module", function() {
    expect(this.Module).toBeDefined();
  });
});
```
