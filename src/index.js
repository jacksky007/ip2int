const toDigit = (chr) => chr >>> 0

export default (ip) => {
  let result = 0

  const segments = []
  let segmentIndex = 0
  let power = 0

  for (let i = ip.length - 1; i >= 0; i--) {
    const chr = ip[i]
    const prevChr = ip[i + 1] || ''
    const nextChr = ip[i - 1] || ''

    if (chr === ' ') {
      // continuous spaces
      if (nextChr === ' ') {
        continue
      }
      // invlaid spaces
      if (nextChr !== '.' && segments[segmentIndex]) {
        throw new Error('space between digits is not allowed')
      }

      continue
    }

    if (chr === '.') {
      power = 0
      segmentIndex++
      continue
    }

    segments[segmentIndex] = true
    let digit = Math.pow(10, power++) * toDigit(chr)
    result += digit << (segmentIndex * 8)
  }

  return result
}


