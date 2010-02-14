load('extensions.js')

var turns = function() {

  var io = {
    read: function() {
      return readline()
    },

    write: function(value) {
      print(value)
    }
  }

  var engine = {
    run: function (story) {
      engine.announce(story)
      engine.play(story.step)
    },

    announce: function(story) {
      io.write(story.title)
    },

    play: function(step) {
      io.write(step.tell)
      if (step.choices) {
        step.choices.each_with_index(function(choice, n) {
          io.write(n + ": " + choice.action)
        })
        engine.play(step.choices[parseInt(io.read())].step)
      }
    }
  }

  return {
    run: engine.run
  }
}()
