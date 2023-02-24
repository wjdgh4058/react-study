import { useId } from "react";
import { A11yHidden } from "@/components";

export function FormInput({ label, invisibleLabel = false }) {
  const id = useId();

  return (
    <div>
      {renderLabel(id, label, invisibleLabel)}
      <input id={id} type="text" placeholder="" />
    </div>
  );
}

function renderLabel(id, label, invisibleLabel) {
  return invisibleLabel ? (
    <A11yHidden as="label" htmlFor={id}>
      {label}
    </A11yHidden>
  ) : (
    <label htmlFor={id}>{label}</label>
  );
}
