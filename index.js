function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}
/* pulls a .target out of #nested (# is used for IDs in selectors).
(Note that in index.html #nested and .target just happen to be divs.
This method should work with arbitrary elements.) */

function increaseRankBy(n){
  const rankedLists = document.querySelectorAll('.ranked-list')

  for (let i = 0, l = rankedLists.length; i < l; i++) {
    let children = rankedLists[i].children

    for (let j = 0, k = children.length; j < k; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}
/* increases the ranks in all of the .ranked-lists by n.
(You might need to make use of parseInt() */

function deepestChild() {
  let node = document.getElementById('grand-node')
  let nextNode = node.children[0]

  while (nextNode) {
    node = nextNode
    nextNode = node.children[0]
  }

  return node
}
 /* that pulls out the most deeply nested child from div#grand-node.
 (Remember, you can iterate over elements and call querySelector() and
 querySelectorAll() on them. This is challenging to implement correctly,
 but not beyond your ability!) */
