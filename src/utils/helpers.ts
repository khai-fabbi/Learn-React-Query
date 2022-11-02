import axios from 'axios'

// check type :
const typeOf = (value: any) =>
  Object.prototype.toString.call(value).slice(8, -1)

// console.log(typeOf('abc'))
// console.log(typeOf(9999))
// console.log(typeOf(new Date()))
// console.log(typeOf({}))
// console.log(typeOf(() => {}))

const listIdPost = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const getPost = async (id: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  )
  console.log(res.data)
}

const forLoop = async () => {
  console.log('Start Loop')

  for (const id of listIdPost) {
    await getPost(id)
  }

  console.log('End Loop')
}

forLoop()

export {}
