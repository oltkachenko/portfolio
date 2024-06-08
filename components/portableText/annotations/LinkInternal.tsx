import type { PortableTextMarkComponentProps } from "@portabletext/react";
import Link from "next/link";

type Props = PortableTextMarkComponentProps & {
  value?: PortableTextMarkComponentProps["value"] & {
    slug?: string;
  };
};

export default function LinkInternalAnnotation({ children, value }: Props) {
  if (!value?.slug) {
    return null;
  }

  return (
    <Link
      className=''
      href={value?.slug}
    >
      <>{children}</>
    </Link>
  );
}
