function promisedDivision(x: number, y: number) {
  if (y === 0) return Promise.reject(new Error('cannot divide by 0'))
  return Promise.resolve(x / y)
}

async function divideWithAwait() {
  try {
    return await promisedDivision(4, 0)
  } catch (error) {
    if (error instanceof Error) console.log(error.message)
  }
}

async function run() {
  const rs = await divideWithAwait()
  console.log(rs)
}
run()

export {}
