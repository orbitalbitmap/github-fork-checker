const axios = require('axios')
const studentList = require('./studentList')

const getPullRequests = async () => {
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

// calls the function
getPullRequests()
