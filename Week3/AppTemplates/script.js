"use strict";
const { createPlugin } = require("@telus/platform");
const exampleUtil = require("./lib/example-util");

async function myPlugin(platform, opts) {
  platform.decorate("myNamespace", (some, args) => {
    const someTransformed = exampleUtil(some);
    return { something: "interesting", some: someTransformed, args };
  });

  platform.decorateRequest("myNamespace", (some, args) => {
    const someTransformed = exampleUtil(some);
    return { something: "interesting", some: someTransformed, args };
  });

  platform.decorateReply("anotherNamespace", function (some, args) {
    const reply = this;
    const someTransformed = exampleUtil(some);
    reply.send({ something: "interesting", some: someTransformed, args });
  });
}

module.exports = createPlugin(myPlugin, {
  name: "my-plugin",
  expectPlugins: [],
});
module.exports = async function myPlugin(platform, options) {};
