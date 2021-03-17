const get = async (url: string) => {
  console.log(url)
  console.log('a')
  let data = await fetch(url)
  console.log(data)
  let res: any = await data.json()
  return res
}

export { get }