

superbowlWin(record) {
  return record.find()
}

superbowlWin = (record) => {
  let result = record.find( record => record.result === "W" )
  return !!result ? result.year : undefined
}