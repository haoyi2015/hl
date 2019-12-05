export default function (n, m, polyfill = false, unit = '') {
  let arr = []
  for (let i = n; i <= m; i++) {
    let name = (polyfill && i < 10 ? '0' + i : i) + ''
    arr.push(name)
  }
  return arr
}
