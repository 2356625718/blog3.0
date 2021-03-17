const get = async (url: string) => {
  let data = await fetch(url)
  let res: any = await data.json()
  return res
}

export { get }