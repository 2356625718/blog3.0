
class Storage {
  private idArr: any[] = []
  private pageArr: any[] = []
  public store = (item: any) => {
    if (this.idArr.includes(item.p_id)) {
      return
    }
    this.idArr.push(item.p_id)
    this.pageArr.push(item)
    if (this.idArr.length > 20) {
      this.idArr.shift()
      this.pageArr.shift()
    }
  }

  public getPage = () => {
    return this.pageArr
  }
}

const storage = new Storage()

export default storage;