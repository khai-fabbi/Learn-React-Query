function slowSalary(n1: number, n2: number) {
  return new Promise((resolve, reject) => {
    return setTimeout(() => {
      if (n2 === 0) {
        reject(new Error('Error tang luon'))
      }
      resolve(n1 + n2)
    }, 2000)
  })
}

async function increaseSalary(base: number, increase: number) {
  let newSalary
  try {
    newSalary = await slowSalary(base, increase)
    console.log(newSalary)
  } catch (error) {
    if (error instanceof Error) {
      console.log(`${error.message}`)
    } else if (typeof error === 'string') {
      console.log(error)
    }
    newSalary = base * 2
  }

  return newSalary
}
// function async luon tra ve Promise
const newSalary = increaseSalary(1000, 0)
newSalary.then((v) => console.log(v))

export {}
