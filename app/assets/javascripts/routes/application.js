Qian.ApplicationRoute = Ember.Route.extend(SimpleAuth.ApplicationRouteMixin, {
  actions: {
    updateTitle: function(tokens) {
      if (tokens.length) {
        document.title = tokens.join(' - ') + " - Qian";
      } else {
        document.title = "Qian - Community driven place for all things Ember.js";
      }
    }
  }
});
