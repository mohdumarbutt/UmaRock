// Extremely lightweight in-memory token bucket rate limiter per user
// Usage: if (!allow(userId, 'cmd', 3, 10_000)) { /* block */ }

const buckets = new Map();

function allow(userId, scope, limit, windowMs) {
  const key = `${userId}:${scope}`;
  const now = Date.now();
  let entry = buckets.get(key);
  if (!entry || now - entry.windowStart > windowMs) {
    entry = { windowStart: now, count: 0 };
  }
  entry.count += 1;
  buckets.set(key, entry);
  return entry.count <= limit;
}

module.exports = { allow };
