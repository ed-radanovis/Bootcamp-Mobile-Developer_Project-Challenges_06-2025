const devArea = {
  version: "01xy",
  production: true,
};

const client = {
  device: "web",
};

module.exports = {
  devArea,
  client,
};
// An example of how not only functions, but also constants, among other things, can be exported.
// If you export only one thing, you don't need the curly braces, but if you export more than one, you do need them.
