/* eslint-disable */

function isObject (value) {
  const type = typeof value
  return value !== null && (type === 'object' || type === 'function')
}

function isArray (value) {
  const _isArray = Array.isArray || (_arg => Object.prototype.toString.call(_arg) === '[object Array]')
  return _isArray(value)
}

function isEmpty (value) {
  if (value === null || value === undefined || value === '') return true
  if (isObject(value)) return Object.keys(value).length === 0
  if (isArray(value)) return value.length === 0

  return false
}

export { isObject, isArray, isEmpty }
