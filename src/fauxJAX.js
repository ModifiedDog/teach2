export function fauxJAX(value, fn) {
  setTimeout(fn.bind(null, value), Math.random() * 500);
}
