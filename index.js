class MyContract {
  constructor () {

  }

  init () {

  }

  getAllItems () {
    return LocalContractStorage.get('item')
  }

  setItem (content) {
    const newItem = {
      content,
      published_at: +new Date()
    }
    const items = LocalContractStorage.get('item')
    items.push(newItem)
    LocalContractStorage.set('item', items)
    return newItem
  }
}

module.exports = MyContract
