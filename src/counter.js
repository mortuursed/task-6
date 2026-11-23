export function makeGreeting(name) {
  const cleanName = String(name).trim() || 'бобик';
  return `привет, ${cleanName}!`;
}

export default function createCounter(startValue = 0) {
  let count = startValue;

  return {
    getCount: () => count,
    increment: () => {
      count += 1;
      return count;
    },
    decrement: () => {
      count -= 1;
      return count;
    },
  };
}