'use strict'

const assert = require('assert')
const isClassOf = require('.')

describe('isClassOf()', function () {
  it('should return true if A equals B', function () {
    assert.strictEqual(isClassOf(Error, Error), true)
  })

  it('should return true if A equals B (given as a string)', function () {
    assert.strictEqual(isClassOf(Error, 'Error'), true)
  })

  it('should return true if A is a subclass of B', function () {
    assert.strictEqual(isClassOf(TypeError, Error), true)
  })

  it('should return true if A is a subclass of B (given as a string)', function () {
    assert.strictEqual(isClassOf(TypeError, 'Error'), true)
  })

  it('should return false if A is a parent class of B', function () {
    assert.strictEqual(isClassOf(Error, TypeError), false)
  })

  it('should return false if A is not a subclass of B', function () {
    assert.strictEqual(isClassOf(Date, Error), false)
  })

  it('should return false if A is not a subclass of B (given as a string)', function () {
    assert.strictEqual(isClassOf(Date, 'Error'), false)
  })

  it('should return false if A is an instance of B', function () {
    assert.strictEqual(isClassOf(new Error(), Error), false)
    assert.strictEqual(isClassOf(new TypeError(), Error), false)
  })

  it('should support the bind operator', function () {
    assert.strictEqual(isClassOf.call(Error, Error), true)
    assert.strictEqual(isClassOf.call(Error, 'Error'), true)
    assert.strictEqual(isClassOf.call(TypeError, Error), true)
    assert.strictEqual(isClassOf.call(Date, Error), false)
  })
})
