import type { InlineSVGProps } from "@interfaces/inlineSvg";

export function ArrowRight({
  className = "",
  width = 24,
  height = 24,
  fill = "#090C18",
}: InlineSVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      width={width.toString()}
      height={height.toString()}
      fill={fill}
    >
      <path d="M8.58984 16.59L13.1698 12L8.58984 7.41L9.99984 6L15.9998 12L9.99984 18L8.58984 16.59Z" />
    </svg>
  );
}
