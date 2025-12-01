'use strict';

/**
 * Observes containers and hides them when empty
 * Shows them again if content is dynamically added
 *
 * Targets:
 * - .form-setting-js-target: Form settings/options area
 * - #authn_select: WebAuthn authenticator selection form
 */
(() => {
  const targetSelectors = [
    '.form-setting-js-target',
    '#authn_select',
    '#kc-error-credential-form'
  ];
  
  // Use a single fast textContent check instead of scanning each child node
  const shouldHide = element => element.textContent.trim() === '';
  
  // Track state for each target
  const targets = new Map();
  
  const updateVisibility = target => {
    if (!target) return;
    const state = targets.get(target);
    if (!state) return;

    state.scheduled = false;
    const hide = shouldHide(target);
    if (hide === state.lastHidden) return; // no change -> avoid DOM write
    state.lastHidden = hide;
    target.style.display = hide ? 'none' : '';
  };
  
  const observeTarget = target => {
    if (targets.has(target)) return; // already observing

    // Initialize state for this target
    const state = {
      scheduled: false,
      lastHidden: null
    };
    targets.set(target, state);

    // Initial check
    updateVisibility(target);

    // MutationObserver: schedule a single rAF update per frame
    const observer = new MutationObserver(() => {
      if (!state.scheduled) {
        state.scheduled = true;
        requestAnimationFrame(() => updateVisibility(target));
      }
    });

    observer.observe(target, {
      childList: true,
      subtree: true,
      characterData: true,
    });
  };
  
  const checkAndObserve = () => {
    targetSelectors.forEach(selector => {
      const target = document.querySelector(selector);
      if (target) observeTarget(target);
    });
  };

  // Watch for late-arriving elements
  const bodyObserver = new MutationObserver(checkAndObserve);
  
  const init = () => {
    checkAndObserve();
    bodyObserver.observe(document.body, { childList: true, subtree: true });
  };
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
