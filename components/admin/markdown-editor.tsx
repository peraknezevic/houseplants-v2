"use client";

import "easymde/dist/easymde.min.css";

import dynamic from "next/dynamic";
import { useMemo } from "react";

const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

const MarkdownEditor = ({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) => {
  const options = useMemo(() => ({ spellChecker: false, status: false }), []);

  return (
    <SimpleMdeReact value={value} onChange={onChange} options={options} />
  );
};

export default MarkdownEditor;
