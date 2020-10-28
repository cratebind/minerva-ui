import { css, createGlobalStyle } from 'styled-components';

const animationStyles = css`
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideup {
    from {
      transform: translateY(20px);
    }

    to {
      transform: translateY(0);
    }
  }

  @keyframes grow {
    from {
      opacity: 0;
      transform: scale(0.95);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  @keyframes slideright {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideleft {
    from {
      transform: translateX(100%);
    }

    to {
      transform: translateX(0%);
    }
  }

  [data-reach-dialog-overlay] {
    animation: fadein 0.18s;
  }

  [data-reach-dialog-content] {
    animation: slideup 0.18s;
  }

  [data-minerva-drawer='left'] {
    animation: slideright 0.18s;
  }

  [data-minerva-drawer='right'] {
    animation: slideleft 0.18s;
  }

  .menu-list[data-reach-menu-list],
  .menu-list[data-reach-menu-items] {
    transform-origin: top;
    animation: grow 0.2s ease;
  }
`;

export const ReachStyles = css`
  :root {
    --reach-checkbox: 1;
    --reach-tabs: 1;
    --reach-menu-button: 1;
    --reach-dialog: 1;
    --reach-tooltip: 1;
    --reach-combobox: 1;
    --reach-accordion: 1;
  }
  /*
 * Reach Menu
 */

  [data-reach-menu],
  [data-reach-menu-popover] {
    display: block;
    position: absolute;
  }

  [data-reach-menu][hidden],
  [data-reach-menu-popover][hidden] {
    display: none;
  }

  [data-reach-menu-list],
  [data-reach-menu-items] {
    display: block;
    white-space: nowrap;
    background: hsla(0, 100%, 100%, 0.99);
    outline: none;
  }

  [data-reach-menu-item] {
    display: block;
    user-select: none;
  }

  [data-reach-menu-item] {
    cursor: pointer;

    display: block;
    text-decoration: initial;
  }

  [data-reach-menu-item][data-selected] {
    outline: none;
  }

  [data-reach-menu-item][aria-disabled] {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* Reach Dialog */
  [data-reach-dialog-overlay] {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
  }

  [data-reach-dialog-content] {
    outline: none;
  }

  [data-reach-tabs][data-orientation='vertical'] {
    display: flex;
  }

  [data-reach-tab-list] {
    display: flex;
  }

  [data-reach-tab-list][aria-orientation='vertical'] {
    flex-direction: column;
  }

  [data-reach-tab] {
    cursor: pointer;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  [data-reach-tab]:disabled {
    cursor: default;
  }

  /* Reach Tooltip */
  [data-reach-tooltip] {
    z-index: 1;
    pointer-events: none;
    position: absolute;
    white-space: nowrap;
    animation: grow 0.1s ease;
  }

  /* Reach Combobox */
  [data-reach-combobox-popover] {
    background: hsla(0, 100%, 100%, 0.99);
    font-size: 85%;
  }

  [data-reach-combobox-list] {
    list-style: none;
    margin: 0;
    padding: 0;
    user-select: none;
  }

  [data-reach-combobox-option] {
    cursor: pointer;
    /* margin: 0; */
    /* padding: 0.25rem 0.5rem; */
  }

  [data-reach-combobox-option][aria-selected='true'] {
    /* background: hsl(211, 10%, 95%); */
  }

  [data-reach-combobox-option]:hover {
    /* background: hsl(211, 10%, 92%); */
  }

  [data-reach-combobox-option][aria-selected='true']:hover {
    /* background: hsl(211, 10%, 90%); */
  }

  [data-suggested-value] {
    font-weight: bold;
  }

  /* Reach Accordion */
  [data-reach-accordion-button][disabled] {
    cursor: not-allowed;
  }
`;

export const CSSReset = css`
  html {
    line-height: 1.15; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }

  body {
    margin: 0;
  }
  main {
    display: block;
  }

  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }
  hr {
    box-sizing: content-box; /* 1 */
    height: 0; /* 1 */
    overflow: visible; /* 2 */
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    border-bottom: none; /* 1 */
    text-decoration: underline; /* 2 */
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted; /* 2 */
  }
  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  img {
    border-style: none;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  button,
  input {
    /* 1 */
    overflow: visible;
  }
  button,
  select {
    /* 1 */
    text-transform: none;
  }

  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type='button']::-moz-focus-inner,
  [type='reset']::-moz-focus-inner,
  [type='submit']::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type='button']:-moz-focusring,
  [type='reset']:-moz-focusring,
  [type='submit']:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    padding: 0; /* 3 */
    white-space: normal; /* 1 */
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type='checkbox'],
  [type='radio'] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type='number']::-webkit-inner-spin-button,
  [type='number']::-webkit-outer-spin-button {
    height: auto;
  }

  [type='search'] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  [type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }

  blockquote,
  dl,
  dd,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  hr,
  figure,
  p,
  pre {
    margin: 0;
  }

  button {
    background-color: transparent;
    background-image: none;
    padding: 0;
  }

  button:focus {
    outline: 1px dotted;
    outline: 5px auto -webkit-focus-ring-color;
  }

  fieldset {
    margin: 0;
    padding: 0;
  }

  ol,
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'; /* 1 */
    line-height: 1.5; /* 2 */
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box; /* 1 */
    border-width: 0; /* 2 */
    border-style: solid; /* 2 */
    border-color: #d2d6dc; /* 2 */
  }

  hr {
    border-top-width: 1px;
  }

  img {
    border-style: solid;
  }

  textarea {
    resize: vertical;
  }

  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: #a0aec0;
  }

  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: #a0aec0;
  }

  input::placeholder,
  textarea::placeholder {
    color: #a0aec0;
  }

  button,
  [role='button'] {
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    padding: 0;
    line-height: inherit;
    color: inherit;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
      monospace;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
  }

  img,
  video {
    max-width: 100%;
    height: auto;
  }
`;

/**
 * Base styles from Tailwind CSS
 * https://tailwindcss.com/docs/adding-base-styles/#app
 *
 * Skip including Reach UI styles since we're inlining them
 * https://reacttraining.com/reach-ui/styling/#skip-including-styles
 */
const GlobalStyles = createGlobalStyle`
${CSSReset}
${ReachStyles}
${animationStyles}
`;

export const AnimationStyles = createGlobalStyle`
  ${animationStyles}
`;

export const ReachGlobalStyles = createGlobalStyle`
  ${ReachStyles}
`;

export default GlobalStyles;
