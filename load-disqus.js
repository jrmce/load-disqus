var LoadDisqus = function () {
  var containerSelector; // Passed in, used to grab the containing element
  var disqusName; // Passed in, users disqus name
  var loadOnInit;

  function config() {
    // Get the container element
    var container = document.querySelector(containerSelector);

    // Make sure we're on a page that has the container
    if ( container !== null ) {
      // Create the disqus_thread div
      var disqusDiv = document.createElement("div");
      disqusDiv.id = "disqus_thread";

      // Append disqusDiv to the container
      container.appendChild(disqusDiv);

      // Execute loadDisqus, unless user specifies not to
      if (loadOnInit) {
        loadDisqus();
      }
    }
  }

  function loadDisqus() {
      var disqus = document.createElement('script');
      disqus.type = 'text/javascript';
      disqus.src = 'http://' + disqusName + '.disqus.com/embed.js';
      document.getElementsByTagName('body')[0].appendChild(disqus);
  }

  // Let people setup their stuff
  return {
    init: function(container, disqus, load) {
      containerSelector = container;
      disqusName = disqus;
      loadOnInit = ( typeof load === "undefined" ) ? true : load;
      config();
    },

    load: function() {
      loadDisqus();
    }
  };
}();
