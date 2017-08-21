;(function (window, $) {
  var getQuerystring = function () {
    var str = document.location.search
    var tmp = str.split('?')
    if (tmp.length > 1) {
      str = tmp[1]
    } else {
      return {}
    }

    var queries = str.split('&')
    var query = {}
    for (var i = 0; i < queries.length; i++) {
      var tokens = queries[i].split('=')
      query[tokens.shift()] = tokens.shift()
    }

    return query
  }


})(window, $)
