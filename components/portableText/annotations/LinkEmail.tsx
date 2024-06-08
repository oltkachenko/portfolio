import type { PortableTextMarkComponentProps } from "@portabletext/react";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    email: string;
  };
};

const LinkEmailAnnotation = ({ children, value }: Props) => {
  if (!value?.email) {
    return null;
  }

  return (
    <a
      className=''
      href={`mailto:${value?.email}`}
    >
      <>{children}</>
    </a>
  );
};

export default LinkEmailAnnotation;
