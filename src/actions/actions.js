var Constants = require('../constants/constants')
var Dispatcher = require('../dispatchers/dispatcher')

var Actions = {
  addMovie: function(movie) {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_MOVIE,
      movie: movie
    })
  },
  removeMovie: function(index) {
    Dispatcher.handleViewAction({
      actionType: Constants.REMOVE_MOVIE,
      index: index
    })
  },
  setCurrentMovie: function(movie) {
    console.log('in action setCurrentMovie')
    Dispatcher.handleViewAction({
      actionType: Constants.SHOW_MOVIE,
      movie: movie
    })
  },
  addToAnalytics: function(movie) {
    Dispatcher.handleViewAction({
      actionType: Constants.ADD_TO_ANALYTICS,
      movie: movie
    })
  }
}

module.exports = Actions