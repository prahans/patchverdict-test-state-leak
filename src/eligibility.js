'use strict';

/**
 * Business rule: an eligible user must be active and at least 18 years old.
 * This production implementation is correct.
 */
function isEligible(user) {
  return user.active === true &&
    Number.isInteger(user.age) &&
    user.age >= 18;
}

module.exports = { isEligible };
