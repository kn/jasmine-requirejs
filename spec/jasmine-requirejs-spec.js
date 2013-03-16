describeModule('./module.js', function() {
  it("loads the module as this.Module", function() {
    expect(this.Module).toBeDefined();
  });
});
