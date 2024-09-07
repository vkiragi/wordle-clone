import React from "react";

interface KeyProps {
  keyVal: string;
}

function Key({ keyVal }: KeyProps) {
  return <div className="key">{keyVal}</div>;
}

export default Key;
