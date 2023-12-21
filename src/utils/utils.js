
import { renderToString } from 'react-dom/server';

export const convertReactComponentToSVG = (component) => {
  const svgString = renderToString(component);
  return `data:image/svg+xml;base64,${Buffer.from(svgString).toString('base64')}`;
};
