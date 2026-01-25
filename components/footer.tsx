import Link from "next/link"
import SocialLinks from "./SocialLinks"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-semibold text-foreground">
              The Code Lawyers
            </Link>
            <p className="text-sm text-muted-foreground mt-2">© 2026 The Code Lawyers. All rights reserved.</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </Link>
            <Link href="/disclaimer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Disclaimer
            </Link>
            {/* Social Icons */}
            <SocialLinks />
          </div>
        </div>

      </div>
    </footer>
  )
}
