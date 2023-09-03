function isEmpty(input) {
  return (
    // eslint-disable-next-line no-undefined
    input === undefined ||
    input === null ||
    (typeof input === 'object' && Object.keys(input).length === 0) ||
    (typeof input === 'string' && input.trim().length === 0)
  );
}

export default isEmpty;
