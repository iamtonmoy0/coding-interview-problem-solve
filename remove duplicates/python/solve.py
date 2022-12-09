def removeDuplicates(arr):
  visited = {}
  for element in arr:
    visited[element] = True
  return list(visited.keys())