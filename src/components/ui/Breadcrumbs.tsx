import Link from "next/link";

export type Crumb = { name: string; href: string };

/** Visible breadcrumb trail. The same items feed the BreadcrumbList JSON-LD,
 *  so on-page and structured data stay in sync. */
export function Breadcrumbs({ items, label }: { items: Crumb[]; label: string }) {
  return (
    <nav className="crumbs" aria-label={label}>
      <ol>
        {items.map((crumb, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={crumb.href}>
              {isLast ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.href}>{crumb.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
