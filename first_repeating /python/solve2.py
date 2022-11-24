def firstRepeatingCharacter(str):
  visited = {}
  for ch in str:
    if visited.get(ch):
      return ch
    else:
      visited[ch] = True
  return '\0'
