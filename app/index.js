'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the phenomenal ' + chalk.red('devops-dashboard widget') + ' generator!'
    ));

    var prompts = [{
      name: 'widgetName',
      message: 'What is the name of the widget?',
      validate: function(input){
        return input.length > 2;
      }
    },{
      name: 'widgetTitle',
      message: 'What is the title of the widget?',
      validate: function(input){
        return input.length > 0;
      }
    },{
      name: 'widgetDescription',
      message: 'Please enter a description for your widget?',
      validate: function(input){
        var value = input.length > 0 && input.length <= 140;
        if (!value){
          value = "description must be > 0 and < 140";
        }
        return value;
      }
   }, {
      name: 'widgetGroups',
      type: 'checkbox',
      message: 'Which root9B domain groups should have access?',
      choices: [{
        name: 'Everyone',
        value: 'root9b_all',
        checked: true
      }, {
        name: 'root9B Business Operations',
        value: 'root9B Business Operations',
        checked: false
      }, {
        name: 'root9B Contracts',
        value: 'root9B Contracts',
        checked: false
      }, {
        name: 'root9B Cyber Operations',
        value: 'root9B Cyber Operations',
        checked: false
      }, {
        name: 'root9B DevOps',
        value: 'root9B DevOps',
        checked: false
      }, {
        name: 'root9B Emerging Technologies',
        value: 'root9B Emerging Technologies',
        checked: false
      }, {
        name: 'root9B Information Technology',
        value: 'root9B Information Technology',
        checked: false
      }, {
        name: 'root9B Leadership',
        value: 'root9B Leadership',
        checked: false
      }, {
        name: 'root9B Marketing',
        value: 'root9B Marketing',
        checked: false
      }, {
        name: 'root9B Network Defense Operations',
        value: 'root9B Network Defense Operations',
        checked: false
      }, {
        name: 'root9B Product Support',
        value: 'root9B Product Support',
        checked: false
      }, {
        name: 'root9B Sales',
        value: 'root9B Sales',
        checked: false
      }, {
        name: 'root9B Security',
        value: 'root9B Security',
        checked: false
      }, {
        name: 'root9B Threat Intelligence',
        value: 'root9B Threat Intelligence',
        checked: false
      }, {
        name: 'root9B Training',
        value: 'root9B Training',
        checked: false
      }]
    }];

    this.prompt(prompts, function (props) {
      this.widgetName = props.widgetName;
      this.widgetTitle = props.widgetTitle;
      this.widgetDescription = props.widgetDescription;
      this.widgetGroups = props.widgetGroups;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var ctx = {
        widgetName: this.widgetName,
        widgetTitle: this.widgetTitle,
        widgetDescription: this.widgetDescription,
        widgetGroups: this.widgetGroups
      };
      this.template('_README.md', 'README.md', ctx);
      this.template('_package.json', 'package.json', ctx);
      this.template('_bower.json', 'bower.json', ctx);
      this.template('_gulpfile.js', 'gulpfile.js', ctx);
      this.template('src/_script.js', 'src/' + this.widgetName + '.js', ctx);
      this.template('sample/_index.html', 'sample/index.html', ctx);
      this.fs.copy(
        this.templatePath('src/view.html'),
        this.destinationPath('src/view.html')
      );
      this.fs.copy(
        this.templatePath('src/edit.html'),
        this.destinationPath('src/edit.html')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('bowerrc'),
        this.destinationPath('.bowerrc')
      );
    }
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
