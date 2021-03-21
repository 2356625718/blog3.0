const get = async (url: string) => {
  let data = await fetch(url)
  console.log(data)
  let res: any = await data.json()
  return res
}

export { get }