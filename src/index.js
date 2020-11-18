const mod = {};

/**
 * Throws an error.
 * @param {Error} fn
 */
mod.yeet = (err) => {
  throw err;
};

module.exports = mod.yeet;
