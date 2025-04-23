export function resolveVisibility(){  
  const cssContentBinding = window.getComputedStyle(document.body).getPropertyValue('--container-content');
  let contentWidth = Number(cssContentBinding.split('px')[0]) || 0;
  // console.log(contentWidth);
  
  // console.log(window.innerWidth)
  // console.log(window.innerWidth > contentWidth)

  return window.innerWidth > contentWidth
}