import { clsx } from "clsx";
import Link from "next/link";
import Text from "../text";

interface Breadcrumb {
  label: string;
  href: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
  className,
}: {
  breadcrumbs: Breadcrumb[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={clsx("block", className)}>
      <ol className={"flex text-xl md:text-2xl"}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? "text-gray-900 font-bold" : "text-lightGray",
              "text-xs md:text-base"
            )}
          >
            <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <Text type="span" className="mx-3 inline-block">
                /
              </Text>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
