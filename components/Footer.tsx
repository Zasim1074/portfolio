import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-bg-dark/70 py-8">
      <div className="section-inner flex flex-col items-center justify-between gap-4 px-4 text-sm text-muted-dark sm:flex-row sm:px-8">
        <div>
          <p className="font-medium text-ink-dark">{profile.name}</p>
          <p className="mono-label mt-1">Full Stack Developer</p>
          <p className="mt-2 text-xs">
            React · Next.js · TypeScript · Python · FastAPI
          </p>
        </div>
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}
