const axios = require('axios')

const getPullRequests = async (studentList) => {
  // calls the github's api repos route for the SummerOfCode organization's 'week-10-express-api' repo's pull request on information
  // GET /repos/:owner/:repo/pulls
  const { data } = await axios.get('https://api.github.com/repos/SummerOfCode2020/week-10-express-api/pulls')

  // reduces the data down to an array of usernames
  const whoPulled = data.reduce((userArray, object) => {
    if (object.user) userArray.push(object.user.login)
    return userArray
  }, [])

  // filters out the users from the 'studentList' variable that are not in the 'whopulled a request on' variable
  let didNotPR = studentList.filter(student => !whoPulled.includes(student))

  // logs to the console who has and hasn't pulled a request on the repo
  console.log(whoPulled.length ? { whoPulled } : 'No one has pulled a request on the repo.')
  console.log(didNotPR.length ? { didNotPR } : 'Everyone has pulled a request on the repo.')
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
getPullRequests(studentList)
