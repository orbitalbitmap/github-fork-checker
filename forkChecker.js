const axios = require('axios')

const getForks = async (studentList) => {
  const { data } = await axios.get('https://api.github.com/repos/SummerOfCode2020/week-09-classwork-express-web/forks')

  const whoForked = data.reduce((userArray, object) => {
    if (object.owner) userArray.push(object.owner.login)
    return userArray
  }, [])

  let didNotFork = studentList.filter(student => !whoForked.includes(student))

  console.log({ whoForked })
  console.log({ didNotFork })


  return data
}

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

getForks(studentList)
