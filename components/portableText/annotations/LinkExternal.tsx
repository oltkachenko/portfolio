import type { PortableTextMarkComponentProps } from "@portabletext/react";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    newWindow?: boolean;
    url: string;
  };
};

const LinkExternalAnnotation = ({ children, value }: Props) => {
  if (!value?.url) {
    return <>{children}</>;
  }

  return (
    <a
      className=''
      href={value?.url}
      rel="noopener noreferrer"
      target={value?.newWindow ? "_blank" : "_self"}
    >
      <>{children}</>
    </a>
  );
};

export default LinkExternalAnnotation;
