const getValueX = (x: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(x), 3000)
  })
}

const getValueY = (y: number) => {
  return new Promise<number>((resolve) => {
    setTimeout(() => resolve(y), 1500)
  })
}

async function total(x: number, y: number) {
  // cach thong thuong sd await
  console.time('Time process')
  //   const _x = await getValueX(x)
  //   console.log('x::', _x)
  //   const _y = await getValueY(y)
  //   console.log('y::', _y)

  const [_x, _y] = await Promise.all([getValueX(3), getValueY(4)])
  console.log(_x, '---', _y)
  console.timeEnd('Time process')
  return _x + _y
}

total(3, 4).then((v) => console.log(v))

export {}
