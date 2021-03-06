module.exports = {
  "prompts": {
      "name"       : {
          "type"    : "string",
          "required": true,
          "message" : "Project name"
      },
      "version"     : {
          "type"    : "string",
          "message" : "Project version",
          "default" : "1.0.0"
      },
      "description": {
          "type"    : "string",
          "required": false,
          "message" : "Project description",
          "default" : "A new Vue.js project"
      },
      "author"     : {
          "type"   : "string",
          "message": "Author"
      },
      "router": {
          "type": "confirm",
          "message": "Need vue-router(2.1.3)?"
      },
      "test": {
          "type": "confirm",
          "message": "Setup unit tests with Karma + Mocha?"
      }
  },
  "filters":{
    "test/**/*": "test",
    "config/test.env.js": "test"
  },
  "completeMessage": "To get started:\n\n  cd {{destDirName}}\n  npm install\n  npm run dev\n\nDocumentation can be found at https://github.com/waka-templates/vue-webpack2"
}
