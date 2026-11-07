import Link from "next/link";
import { BRAND } from "@/lib/config";
import { Button } from "@/components/ui/Button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center bg-cream px-4">
      <div className="text-center max-w-md mx-auto py-16">
        <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-emerald-50 flex items-center justify-center">
          <Search className="h-12 w-12 text-emerald-600" aria-hidden="true" />
        </div>

        <h1 className="text-6xl font-display font-bold text-ink-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-ink-700 mb-6">Page Not Found</h2>

        <p className="text-stone-600 leading-relaxed mb-10 max-w-sm mx-auto">
          Sorry, we couldn't find the page you're looking for. It might have been
          moved or doesn't exist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" asChild>
            <Link href="/">
              <Home className="h-5 w-5 mr-2" aria-hidden="true" />
              Back to Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="#contact">
              <ArrowLeft className="h-5 w-5 mr-2" aria-hidden="true" />
              Contact Us
            </Link>
          </Button>
        </div>

        <div className="mt-12 pt-8 border-t border-line">
          <p className="text-sm text-stone-500">
            <strong>{BRAND.name}</strong> — Professional cleaning services
          </p>
        </div>
      </div>
    </main>
  );
}