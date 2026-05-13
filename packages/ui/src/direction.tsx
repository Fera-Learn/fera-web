"use client";

import * as React from "react";
import { Direction } from "radix-ui";

type RadixDirectionProviderProps = React.ComponentProps<
  typeof Direction.DirectionProvider
>;

type DirectionProviderProps = Omit<RadixDirectionProviderProps, "dir"> &
  (
    | {
        dir?: RadixDirectionProviderProps["dir"];
        direction: RadixDirectionProviderProps["dir"];
      }
    | {
        dir: RadixDirectionProviderProps["dir"];
        direction?: RadixDirectionProviderProps["dir"];
      }
  );

function DirectionProvider({
  dir,
  direction,
  children,
}: DirectionProviderProps) {
  return (
    <Direction.DirectionProvider dir={direction ?? dir}>
      {children}
    </Direction.DirectionProvider>
  );
}

const useDirection = Direction.useDirection;

export { DirectionProvider, useDirection };
