function firstRepeatingCharacter(str){
  let visited = {};
  for(ch of str){
    if(visited[ch]) return ch;
    else visited[ch] = true;
  }
  return '\0';
}
