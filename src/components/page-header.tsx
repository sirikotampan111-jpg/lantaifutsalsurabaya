import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface PageHeaderProps {
  title: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export function PageHeader({ title, description, breadcrumbs }: PageHeaderProps) {
  return (
    <section className="bg-gradient-to-br from-futsal-black to-futsal-gray pt-28 pb-16 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-4 flex items-center justify-center gap-1 text-sm text-white/60">
          {breadcrumbs.map((crumb, index) => (
            <span key={crumb.url} className="flex items-center gap-1">
              {index > 0 && <ChevronRight className="h-3.5 w-3.5 text-white/40" />}
              {index === breadcrumbs.length - 1 ? (
                <span className="text-primary font-medium">{crumb.name}</span>
              ) : (
                <Link href={crumb.url} className="hover:text-white transition-colors">
                  {crumb.name}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-3 text-base sm:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
}