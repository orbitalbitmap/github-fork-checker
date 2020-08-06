const axios = require('axios')

const getForks = async (studentList) => {
  // calls the github's api repos route for the SummerOfCode organization's 'week-09-classwork-express-web' repo's forked information
  const { data } = await axios.get('https://api.github.com/repos/SummerOfCode2020/week-09-classwork-duck-hunt/forks')

  // reduces the data down to an array of usernames
  const whoForked = data.reduce((userArray, object) => {
    if (object.owner) userArray.push(object.owner.login)
    return userArray
  }, [])

  // filters out the users from the 'studentList' variable that are not in the 'whoForked' variable
  let didNotFork = studentList.filter(student => !whoForked.includes(student))

  // logs to the console who has and hasn't forked the repo
  console.log(whoForked.length ? { whoForked } : 'No one has forked the repo.')
  console.log(didNotFork.length ? { didNotFork } : 'Everyone has forked the repo.')


  return data
}

// initializes the studentList
const studentList = [
  'AL743-ni82dy',
  'alphaComara',
  'crkingsley',
  'Deva0770',
  'Emeralds99',
  'erick-pacheco',
  'hollisjamison',
  'jessicareynolds',
  'jkearns885',
  'Mvrcusj',
  'rock43053',
  'SBucharelli',
  'Se-ven',
  'starlit79',
  'wesleyjaboin',
  'xworld2000',
  'zward2',
]

// calls the function
getForks(studentList)
