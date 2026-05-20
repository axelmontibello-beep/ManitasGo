"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = { sm: 16, md: 20, lg: 28 };

export function StarRating({ value, onChange, readonly = false, size = "md", className }: StarRatingProps) {
  const [hovered, setHovered] = useState(0);
  const px = sizes[size];
  const active = readonly ? value : (hovered || value);

  return (
    <div className={cn("flex items-center gap-0.5", className)}>
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          disabled={readonly}
          onClick={() => !readonly && onChange?.(star)}
          onMouseEnter={() => !readonly && setHovered(star)}
          onMouseLeave={() => !readonly && setHovered(0)}
          className={cn("transition-transform", !readonly && "hover:scale-110 cursor-pointer", readonly && "cursor-default")}
          style={{ width: px, height: px }}
        >
          <svg width={px} height={px} viewBox="0 0 20 20" fill="none">
            <path
              d="M10 1.5l2.47 5.01 5.53.8-4 3.9.94 5.49L10 14.27l-4.94 2.43.94-5.49-4-3.9 5.53-.8L10 1.5z"
              fill={star <= active ? "#FBBF24" : "#DEE2E6"}
              stroke={star <= active ? "#FBBF24" : "#DEE2E6"}
              strokeWidth="0.5"
            />
          </svg>
        </button>
      ))}
    </div>
  );
}
