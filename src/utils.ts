function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function delayAnimation(ms: number, fn: Function) {
  await sleep(ms);

  fn();
}

export const clamp = (
  value: number,
  min: number = 0,
  max: number = 1
): number => {
  if (min > max) {
    [min, max] = [max, min];
  }

  return Math.max(min, Math.min(max, value));
};

export const normalize = (
  value: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin: number = 0,
  newScaleMax: number = 1
): number => {
  const standardNormalization =
    (value - currentScaleMin) / (currentScaleMax - currentScaleMin);

  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};

export const clampedNormalize = (
  value: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin: number = 0,
  newScaleMax: number = 1
): number => {
  return clamp(
    normalize(
      value,
      currentScaleMin,
      currentScaleMax,
      newScaleMin,
      newScaleMax
    ),
    newScaleMin,
    newScaleMax
  );
};

export { sleep, delayAnimation };