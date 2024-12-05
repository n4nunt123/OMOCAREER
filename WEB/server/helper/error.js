const listErrrors = (error) => {
  return error.errors.map(el => el.message);
}

module.exports = { listErrrors }