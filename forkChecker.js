const axios = require('axios')
const studentList = require('./studentList')

const getForks = async (repoName) => {
  // calls the github's api repos route for the SummerOfCode organization's 'week-10-express-api' repo's forked information
  // GET /repos/:owner/:repo/forks
  const { data } = await axios.get(`https://api.github.com/repos/SummerOfCode2020/${repoName}/forks`)

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
}

// defines the repoName based on what is passed in after the script command
// npm run fork -- REPO_NAME_HERE   or   npm run fork REPO_NAME_HERE
const repoName = process.argv[2]

// calls the function
getForks(repoName)
