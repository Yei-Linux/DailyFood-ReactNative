export const cls = (...props) => {
  let objectStyle: Record<string, unknown> = {};

  props.forEach((style: any) => {
    if (!style) {
      return;
    }

    objectStyle = {...objectStyle, ...style};
  });

  return objectStyle;
};
