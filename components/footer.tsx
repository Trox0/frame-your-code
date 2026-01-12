import Link from "next/link"
import SocialLinks from "./SocialLinks"

export function Footer() {
  return (
    <footer className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <Link href="/" className="text-lg font-semibold text-foreground">
              FrameYourCode
            </Link>
            <p className="text-sm text-muted-foreground mt-2">© 2026 FrameYourCode. All rights reserved.</p>
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

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground text-center max-w-3xl mx-auto">
            FrameYourCode provides software development and AI automation services. Results may vary depending on
            implementation, business context, and client requirements. No specific outcomes are guaranteed.
          </p>
        </div>
      </div>
    </footer>
  )
}
