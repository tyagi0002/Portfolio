'use client'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-ivory/10 px-5 py-8 md:px-8">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <p className="font-mono text-[11px] tracking-[0.22em] uppercase text-muted">
          © {new Date().getFullYear()} Vaibhav Tyagi
        </p>
        <div className="flex gap-8 font-mono text-[11px] tracking-[0.22em] uppercase">
          <a href="https://github.com/tyagi0002" target="_blank" rel="noopener noreferrer" data-cursor="GIT">
            GitHub
          </a>
          <a href="https://linkedin.com/in/tyagi09" target="_blank" rel="noopener noreferrer" data-cursor="IN">
            LinkedIn
          </a>
          <a href="#top" data-cursor="TOP">
            Top
          </a>
        </div>
      </div>
    </footer>
  )
}
