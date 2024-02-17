// document.addEventListener('DOMContentLoaded', function () {
//     const holographicElement = document.querySelector('html::after');
  
//     function updateHolographicDegree() {
//       const currentDegree = parseFloat(getComputedStyle(holographicElement).getPropertyValue('--holographic-degree'));
//       const newDegree = currentDegree === 300;
//       holographicElement.style.setProperty('--holographic-degree', `${newDegree}deg`);
//       holographicElement.style.setProperty('--holographic-second-degree', '${newDegree}deg')
//     }
  
//     holographicElement.addEventListener('animationiteration', updateHolographicDegree);
// });