/**
 * @jest-environment jsdom
 */

const { changeLargeImage } = require('../js/index');

describe('changeLargeImage', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <img id="largeImage" src="old.jpg" />
      <img id="thumb1" class="active-border" src="thumb1.jpg" />
      <img id="thumb2" src="thumb2.jpg" />
    `;
  });

  test('should change the src attribute of the image and update border classes', () => {
    const url = 'https://example.com/test.jpg';
    const thumb2 = document.getElementById('thumb2');

    // Simulate clicking thumb2
    changeLargeImage(url, { target: thumb2 });

    const img = document.getElementById('largeImage');
    expect(img.getAttribute('src')).toBe(url);

    // Now thumb1 should have no active-border, and thumb2 should have it!
    expect(document.getElementById('thumb1').classList.contains('active-border')).toBe(false);
    expect(thumb2.classList.contains('active-border')).toBe(true);
  });
});