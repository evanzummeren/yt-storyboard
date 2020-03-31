"use strict";

/**
 * @param {string} spec – A string containing the playerStoryboardSpecRenderer.spec
 * @param {boolean} hq – High quality true
 */
module.exports = function storyboard(spec, hq, seconds) {
  let specParts = spec.split('|');
  let specPartsLength = specParts.length -1;
  let baseUrlHq = specParts[0].split('$')[0] + '2/';
  let baseUrlLq = specParts[0].split('$')[0] + '1/';
  let sgpPart = specParts[0].split('$N')[1];
  let sighPartHq = specParts[3].split('M#')[1];
  let sighPartLq = specParts[2].split('M#')[1];

  let storyboardArray = [];

  if (hq === true) { /* High quality storyboard */
    for (let i = 0; i < specPartsLength; i++) {
      storyboardArray.push(baseUrlHq + 'M' + i + sgpPart + '&sigh=' + sighPartHq)
    }
  } else { /* Low quality storyboard */
    for (let i = 0; i < specPartsLength; i++) {
      storyboardArray.push(baseUrlLq + 'M' + i + sgpPart + '&sigh=' + sighPartLq)
    }
  }

  return storyboardArray;
}