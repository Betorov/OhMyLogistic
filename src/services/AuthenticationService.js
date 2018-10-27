// import Api from '@/services/Api'

export default {
  login (credentials) {
    if (credentials.email === 'admin' && credentials.password === 'password') {
      return 'tokenString'
    } else {
      return 'tokenString'
    }
  }
}
