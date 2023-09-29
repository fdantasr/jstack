/* 
  ## Helpers
*/

const tech = 'Node.js'
const array = ['Node.js', 'Vue.js', 'React']

const includes = tech.includes('.') // case sensitive, pieces of string
const arrayIncludes = array.includes('Vue.js') // search for exact value at array

const startsWith = tech.startsWith('N')
const endsWith = tech.endsWith('js');

console.log({ includes, arrayIncludes, startsWith, endsWith });