'use strict';

// Test-data factory: callers expect independent users. The current
// implementation accidentally shares the same mutable object.
const templateUser = { active: true, age: 22 };

function createTestUser() {
  return templateUser;
}

module.exports = { createTestUser };
