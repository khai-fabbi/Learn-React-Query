const m = new Map<string, string | number>([
  ['name', 'khai'],
  ['id', 'B17DCCN337'],
])

const m2 = new Map()

m.set('title', 'Heading')
m.set('point', 10)

if (m.has('name')) {
  console.log(m.get('name'))
}

// for of :
// for (const pair of m) {
//   console.log(pair)
// }

// forEach :
m.forEach((v, k) => {
  console.log(k, ' : ', v)
})

export {}
