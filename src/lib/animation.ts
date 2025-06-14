export function startAnimation(
  image: HTMLImageElement,
  frames: string[],
  loop = false
): [Promise<HTMLImageElement>, () => void] {
  let af: number;
  let index = 0;
  const { promise, reject, resolve } =
    Promise.withResolvers<HTMLImageElement>();

  function end() {
    image.src = frames[0];
    resolve(image);
  }

  function step() {
    image.src = frames[index % frames.length];
    index++;
    if (index < frames.length || loop) {
      af = requestAnimationFrame(step);
    } else {
      af = requestAnimationFrame(end);
    }
  }

  function cancel() {
    cancelAnimationFrame(af);
    image.src = frames[0];
    reject();
  }

  step();
  return [promise, cancel];
}
