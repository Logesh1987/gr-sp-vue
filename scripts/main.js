
var app = new Vue({
    el: '#sp-controller',
    data: {
      loggedIn: false,
      pageView: 'winner',
      prizeView: 'daily',
      winnerView: 'daily',
      campaignData: {
        prizes: window.prizes,
        winners: window.winners
      }
    },
    methods: {
      handleHomeClick: function() {
        this.pageView = this.loggedIn ? 'home' : 'beforeLogin';
        // loggedIn ? pageView = 'home' : pageView = 'beforeLogin'
      }
    }
  })