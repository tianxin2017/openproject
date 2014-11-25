//-- copyright
// OpenProject is a project management system.
// Copyright (C) 2012-2014 the OpenProject Foundation (OPF)
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License version 3.
//
// OpenProject is a fork of ChiliProject, which is a fork of Redmine. The copyright follows:
// Copyright (C) 2006-2013 Jean-Philippe Lang
// Copyright (C) 2010-2013 the ChiliProject Team
//
// This program is free software; you can redistribute it and/or
// modify it under the terms of the GNU General Public License
// as published by the Free Software Foundation; either version 2
// of the License, or (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program; if not, write to the Free Software
// Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
//
// See doc/COPYRIGHT.rdoc for more details.
//++

angular.module('openproject.timelines.controllers')

.controller('TimelinesController', ['$scope', function($scope) {
  var getInitialOutlineExpansion = function(timelineOptions) {
    var initialOutlineExpansion = timelineOptions.initial_outline_expansion;
    if (initialOutlineExpansion && initialOutlineExpansion >= 0) {
      return initialOutlineExpansion;
    } else {
      return 0;
    }
  };

  // Setup

  // Get server-side stuff into scope
  $scope.timelineOptions = gon.timeline_options;
  $scope.timelines = [];

  angular.forEach($scope.timelineOptions, function(value, id) {
    var timelineOptions = $scope.timelineOptions[id];
    var timeline = Timeline.create(id, value);

    // Set initial expansion index
    timeline.expansionIndex = getInitialOutlineExpansion(timelineOptions);

    this.push(timeline);
  }, $scope.timelines);
}]);
