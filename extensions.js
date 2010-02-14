Array.prototype.each = function(f) {
  for (var i=0; i<this.length; i++) {
    f(this[i])
  }
}

Array.prototype.each_with_index = function (f) {
  for (var i=0; i<this.length; i++) {
    f(this[i], i)
  }
}
