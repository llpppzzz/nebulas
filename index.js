class MyContract {
  constructor () {
  }

  init () {
  }

  _sort (arr, field, dir) {
    if (!dir || !field) return arr
    return arr.sort((a, b) => dir === 'descending' ? b[field] - a[field] : a[field] - b[field])
  }

  getAllItems ({sort = 'published_at', dir, page, pageSize}) {
    const data = LocalContractStorage.get('item') || []
    const sorted = this._sort(data, sort, dir)
    const startPage = --page * pageSize
    const list = sorted.slice(startPage, startPage + pageSize)
    return {
      list,
      page: ++page,
      pageSize,
      total: data.length
    }
  }

  setItem (content) {
    const newItem = {
      content,
      published_at: +new Date()
    }
    const items = LocalContractStorage.get('item') || []
    items.push(newItem)
    LocalContractStorage.set('item', items)
    return newItem
  }
}

module.exports = MyContract
