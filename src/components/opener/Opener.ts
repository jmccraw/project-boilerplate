const opener: string = 'Opener';
const _opener: Element = document.querySelector( '.opener' );

/**
 * Activates the button
 */
function activateButton() {
  document.body.style.backgroundColor = 'orange';
}

/**
 * Opener functions
 */
export default function init() {
  window.console.log( `Init for: ${opener}` );

  const _button: Element = _opener.querySelector( '.my-button' );

  _button.addEventListener( 'click', activateButton, { passive: true } );
}
