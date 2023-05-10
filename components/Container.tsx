import { PropsWithChildren } from "react";

interface Props {
  maxWidth?: string;
  className?: string;
}

export const Container: React.FC<PropsWithChildren<Props>> = ({
  maxWidth = "max-w-8xl",
  className,
  children,
}) => {
  return (
    <div className={`px-3 md:px-6 mx-auto ${className} ${maxWidth}`}>
      {children}
    </div>
  );
};
