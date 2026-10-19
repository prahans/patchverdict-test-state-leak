'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { isEligible } = require('../src/eligibility');
const { createTestUser } = require('../setupTests');

test('inactive adults are not eligible', () => {
  const user = createTestUser();
  user.active = false;
  assert.equal(isEligible(user), false);
});

test('active adults are eligible', () => {
  const user = createTestUser();
  assert.equal(isEligible(user), true);
});

test('underage active users are not eligible', () => {
  const user = createTestUser();
  user.age = 17;
  assert.equal(isEligible(user), false);
});
