'use strict';

angular.module('DevopsDashboard.widget.<%= widgetName %>', ['adf.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('<%= widgetName %>', {
        title: '<%= widgetTitle %>',
        description: '<%= widgetDescription %>',
        authorizedGroups: <%= widgetGroups %>,
        templateUrl: 'app/widgets/<%= widgetName %>/src/view.html',
        edit: {
          templateUrl: 'app/widgets/<%= widgetName %>/src/edit.html'
        }
      });
  });
