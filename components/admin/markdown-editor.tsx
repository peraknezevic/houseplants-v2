"use client";

import "easymde/dist/easymde.min.css";

import { useEffect, useMemo, useState } from "react";

import type { SimpleMDEReactProps } from "react-simplemde-editor";
import dynamic from "next/dynamic";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

type CodeMirrorEditor = Parameters<
  NonNullable<SimpleMDEReactProps["getCodemirrorInstance"]>
>[0];

// Wrap this in <FormControl>: it passes id / aria-describedby / aria-invalid,
// which are copied onto CodeMirror's real input so <FormLabel> and error
// messages are announced by screen readers.
const MarkdownEditor = ({
  value,
  onChange,
  id,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
}: {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}) => {
  const [editor, setEditor] = useState<CodeMirrorEditor | null>(null);
  const options = useMemo(() => ({ spellChecker: false, status: false }), []);

  useEffect(() => {
    if (!editor) return;
    const input = editor.getInputField();
    const setAttr = (name: string, val: string | undefined) =>
      val ? input.setAttribute(name, val) : input.removeAttribute(name);

    setAttr("id", id);
    setAttr("aria-describedby", describedBy);
    setAttr("aria-invalid", invalid ? "true" : undefined);
  }, [editor, id, describedBy, invalid]);

  return (
    <SimpleMdeReact
      value={value}
      onChange={onChange}
      options={options}
      getCodemirrorInstance={setEditor}
    />
  );
};

export default MarkdownEditor;
