class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.substring(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    /* const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const arr = []
    const sentence = string.split(' ')
    let pushed
    arr[0] = this.capitalize(sentence[0])
    for (let i = 1; i < sentence.length; i++) {
      pushed = false
      for (const element of except) {
        if (sentence[i] === element) {
          arr.push(sentence[i])
          pushed = true
        }
      }
      if (pushed === false) {
        arr.push(this.capitalize(sentence[i]))
      }
    }
    return arr.join(' ') */
    
    const except = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const arr = []
    const sentence = string.split(' ')
    arr[0] = this.capitalize(sentence[0])
    for (let i = 1; i < sentence.length; i++) {
    if(except.includes(sentence[i])){
        arr.push(sentence[i])
      }
      else{
        arr.push(this.capitalize(sentence[i]))
      }
    }
    return arr.join(' ')
  }
}