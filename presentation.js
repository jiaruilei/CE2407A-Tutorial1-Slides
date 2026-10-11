'use strict';
import { installAnnotations } from './annotations.js';
import { createFullscreenController } from './fullscreen.js';
const deck = new Reveal({
  width: 1280, height: 720, margin: 0.015, minScale: 0.1, maxScale: 3,
  hash: true, history: true, controls: false, progress: true, center: false,
  transition: 'none', backgroundTransition: 'none', overview: true,
  // Keep our fixed slide layout, navigation and ink surfaces together on phones.
  scrollActivationWidth: null,
  keyboard: true, slideNumber: false
});
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const counter = document.getElementById('counter');
const fullscreen = document.getElementById('fullscreen');

function notice(message) {
  const element = document.getElementById('notice');
  element.textContent = message;
  element.hidden = false;
  clearTimeout(notice.timer);
  notice.timer = setTimeout(() => { element.hidden = true; }, 6000);
}

function loadQuestion(panel) {
  const frame = panel.querySelector('iframe');
  const loading = panel.querySelector('.web-loading');
  loading.textContent = 'Loading question…';
  loading.hidden = false;
  clearTimeout(panel.loadingTimer);
  panel.loadingTimer = setTimeout(() => {
    loading.textContent = 'Still loading. Use Reload or Open question.';
  }, 15000);
  frame.onload = () => { clearTimeout(panel.loadingTimer); loading.hidden = true; };
  // Keep src when leaving a slide so calculations and chat remain intact.
  frame.src = frame.dataset.webSrc;
}

function setExpanded(panel, expanded) {
  panel.classList.toggle('is-expanded', expanded);
  const button = panel.querySelector('.expand-web');
  button.textContent = expanded ? 'Back to slide' : 'Expand webpage';
  button.setAttribute('aria-expanded', String(expanded));
  document.dispatchEvent(new CustomEvent('tutorial:layout'));
}

document.querySelectorAll('.web-panel').forEach(panel => {
  panel.querySelector('.reload-web').addEventListener('click', () => loadQuestion(panel));
  panel.querySelector('.expand-web').addEventListener('click', () => setExpanded(panel, !panel.classList.contains('is-expanded')));
});

function sync() {
  const index = deck.getIndices().h;
  counter.textContent = `${index + 1} / ${deck.getTotalSlides()}`;
  previous.disabled = deck.isFirstSlide();
  next.disabled = deck.isLastSlide();
  const slide = deck.getCurrentSlide();
  document.title = `${slide.dataset.title} · CE2407A Tutorial 1`;
  const panel = slide.querySelector('.web-panel');
  if (panel && !panel.querySelector('iframe').hasAttribute('src')) loadQuestion(panel);
}

let fullscreenState;
const screenController = createFullscreenController({
  document,
  onFallback(expanded) {
    document.body.classList.toggle('is-expanded-view', expanded);
    if (deck.isReady()) deck.layout();
    document.dispatchEvent(new CustomEvent('tutorial:layout'));
  },
  onChange(state) {
    fullscreenState = state;
    const label = state.mode === 'native' ? 'Exit full screen'
      : state.mode === 'fallback' ? 'Exit view'
      : state.nativeSupported ? 'Full screen' : 'Expand view';
    fullscreen.textContent = label;
    fullscreen.title = state.mode === 'fallback' ? 'Exit expanded view' : label;
    fullscreen.setAttribute('aria-label', fullscreen.title);
    fullscreen.setAttribute('aria-pressed', String(state.expanded));
    fullscreen.disabled = state.pending;
    if (deck.isReady()) deck.layout();
    document.dispatchEvent(new CustomEvent('tutorial:layout'));
  }
});
const toggleFullscreen = () => screenController.toggle();
previous.addEventListener('click', () => deck.prev());
next.addEventListener('click', () => deck.next());
document.getElementById('overview').addEventListener('click', () => deck.toggleOverview());
fullscreen.addEventListener('click', toggleFullscreen);
installAnnotations(deck, notice);
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    const panel = deck.getCurrentSlide()?.querySelector('.is-expanded');
    if (panel) {
      setExpanded(panel, false);
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (fullscreenState.mode === 'fallback') {
      screenController.exit();
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}, true);
deck.on('slidechanged', event => {
  event.previousSlide?.querySelectorAll('.is-expanded').forEach(panel => setExpanded(panel, false));
  sync();
});
deck.initialize().then(() => {
  deck.addKeyBinding({ keyCode: 79, key: 'O', description: 'Slide overview' }, () => deck.toggleOverview());
  deck.addKeyBinding({ keyCode: 70, key: 'F', description: 'Full screen' }, toggleFullscreen);
  sync();
});
