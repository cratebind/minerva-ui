import React, { useState } from 'react';
import { Button } from 'minerva-ui';

const copyToClipboard = (str: string) => {
  const { clipboard } = window.navigator;
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API is not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`);
    textarea.value = str;
    textarea.setAttribute(`readonly`, `true`);
    textarea.setAttribute(`contenteditable`, `true`);
    textarea.style.position = `absolute`;
    textarea.style.left = `-9999px`;
    document.body.append(textarea);
    textarea.select();
    const range = document.createRange();
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
    textarea.setSelectionRange(0, textarea.value.length);
    document.execCommand(`copy`);
    document.body.removeChild(textarea);

    return Promise.resolve(true);
  }

  return clipboard.writeText(str);
};

const delay = (duration: number) =>
  new Promise(resolve => setTimeout(resolve, duration));

type CopyProps = {
  content: string;
  duration?: number;
  fileName?: string;
  trim?: boolean;
};

const Copy = ({
  content,
  duration = 3000,
  fileName = ``,
  trim = false,
}: CopyProps) => {
  const [copied, setCopied] = useState(false);

  const label = copied
    ? `${fileName ? `${fileName} ` : ``}copied to clipboard`
    : `${fileName ? `${fileName}: ` : ``}copy code to clipboard`;

  return (
    <Button
      type="button"
      position="absolute"
      px="9px"
      py="4px"
      borderRadius={0}
      borderBottomLeftRadius="md"
      top={0}
      right={0}
      fontWeight={300}
      padding="0.25rem 0.6rem"
      bg="rgb(0, 118, 255)"
      color="#fff"
      border={0}
      _hover={{
        backgroundColor: '#015ac2',
      }}
      name={label}
      disabled={copied}
      className="code-copy-button"
      zIndex={500}
      onClick={async () => {
        await copyToClipboard(trim ? content.trim() : content);
        setCopied(true);
        await delay(duration);
        setCopied(false);
      }}
    >
      {copied ? `Copied` : `Copy`}
      {/* <span aria-roledescription="status">{label}</span> */}
    </Button>
  );
};

export default Copy;
