import md5 from 'blueimp-md5'

export default (key = 'email') => ({
  computed: {
    hash () {
      return md5(this[key])
    }
  }
})
