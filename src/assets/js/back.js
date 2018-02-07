export function  setgoindex(){
  activated: function () {
    this.$setgoindex()
  }

  if (window.history.length <= 1) {
    if (location.href.indexOf('?') === -1) {
      window.location.href = location.href + '?goindex=true'
    } else if (location.href.indexOf('?') !== -1 && location.href.indexOf('goindex') === -1) {
      window.location.href = location.href + '&goindex=true'
    }
  }
  if (this.$route.query.goindex === 'true') {
    this.$router.push('/')
  } else {
    this.$router.back(-1)
  }
}
