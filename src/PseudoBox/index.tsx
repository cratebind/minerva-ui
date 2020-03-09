// import React from 'react';
import styled, { css, CSSObject } from 'styled-components';
import { MinervaProps, Box, systemProps } from '../layout';

export interface PseudoBoxProps {
  /**
   * Styles for CSS selector `&:after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <PseudoBox _after={{content:`""` }}/>
   * ```
   */
  _after?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS selector `&:before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <PseudoBox _before={{content:`""` }}/>
   * ```
   */
  _before?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:active`
   */
  _active?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   * - CSS selector `&[aria-selected=true]`
   */
  _selected?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin?: string | number | CSSObject | undefined;

  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&:disabled:focus`
   * - `&:disabled:hover`
   * - `&:focus[aria-disabled=true]`
   * - `&:hover[aria-disabled=true]`
   */
  _disabled?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _mixed?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last?: string | number | CSSObject | undefined;
  /**
   * Styles to apply when you hover on a parent that has `role=group`.
   */
  _groupHover?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast?: string | number | CSSObject | undefined;
  /**
   * Styles for CSS Selector `&::placeholder`.
   * Useful for inputs
   */
  _placeholder?: string | number | CSSObject | undefined;
}

// export interface PseudoBoxProps = IPseudoBoxProps & MinervaProps;

/**
 * The selectors are based on [WAI-ARIA state properties](https://www.w3.org/WAI/PF/aria-1.1/states_and_properties) and common CSS Selectors
 */
const hover = '&:hover';
const active = '&:active, &[data-active=true]';
const focus = '&:focus';
const visited = '&:visited';
const even = '&:nth-of-type(even)';
const odd = '&:nth-of-type(odd)';
const disabled =
  '&:disabled, &:disabled:focus, &:disabled:hover, &[aria-disabled=true], &[aria-disabled=true]:focus, &[aria-disabled=true]:hover';
const checked = '&[aria-checked=true]';
const mixed = '&[aria-checked=mixed]';
const selected = '&[aria-selected=true]';
const invalid = '&[aria-invalid=true]';
const pressed = '&[aria-pressed=true]';
const readOnly = '&[aria-readonly=true], &[readonly]';
const first = '&:first-of-type';
const last = '&:last-of-type';
const expanded = '&[aria-expanded=true]';
const grabbed = '&[aria-grabbed=true]';
const notFirst = '&:not(:first-of-type)';
const notLast = '&:not(:last-of-type)';
const groupHover = '[role=group]:hover &';

export type PseudoProps = MinervaProps & PseudoBoxProps;

const PseudoBox = styled(Box)<PseudoProps>(
  ({
    _after,
    _focus,
    _selected,
    _focusWithin,
    _hover,
    _invalid,
    _active,
    _disabled,
    _grabbed,
    _pressed,
    _expanded,
    _visited,
    _before,
    _readOnly,
    _first,
    _notFirst,
    _notLast,
    _last,
    _placeholder,
    _checked,
    _groupHover,
    _mixed,
    _odd,
    _even,
  }: PseudoBoxProps) => {
    return css({
      [hover]: _hover,
      [focus]: _focus,
      [active]: _active,
      [visited]: _visited,
      [disabled]: _disabled,
      [selected]: _selected,
      [invalid]: _invalid,
      [expanded]: _expanded,
      [grabbed]: _grabbed,
      [readOnly]: _readOnly,
      [first]: _first,
      [notFirst]: _notFirst,
      [notLast]: _notLast,
      [last]: _last,
      [odd]: _odd,
      [even]: _even,
      [mixed]: _mixed,
      [checked]: _checked,
      [pressed]: _pressed,
      [groupHover]: _groupHover,
      '&:before': _before,
      '&:after': _after,
      '&:focus-within': _focusWithin,
      '&::placeholder': _placeholder,
    });
  },
  systemProps
);

export default PseudoBox;
