import classnames from "classnames";

import { BasePropsPropsWithChildren } from "../types";

export type SectionType = "dark" | "light";
export interface SectionProps extends BasePropsPropsWithChildren {
  type: SectionType;
}

export function Section({ children, type, className = "" }: SectionProps) {
  return (
    <div
      className={classnames(
        "py-6",
        {
          "bg-[#1f2937] text-white": type === "dark",
          "bg-white text-[#1f2937]": type === "light",
        },
        className
      )}
    >
      <div className="container">{children}</div>
    </div>
  );
}

export default Section;
