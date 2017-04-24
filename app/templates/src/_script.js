'use strict';

angular.module('DevopsDashboard.widget.<%= widgetName %>', ['adf.provider'])
  .config(function(dashboardProvider){
    dashboardProvider
      .widget('<%= widgetName %>', {
        title: '<%= widgetTitle %>',
        description: '<%= widgetDescription %>',
        authorizedGroups: '<%= widgetGroups %>',
        templateUrl: '{widgetsPath}/<%= widgetName %>/src/view.html',
        edit: {
          templateUrl: '{widgetsPath}/<%= widgetName %>/src/edit.html'
        }
      });
  });
