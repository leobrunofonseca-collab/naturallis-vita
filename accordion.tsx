export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-serif text-lg tracking-wide text-foreground">
            Liso Vegetal
          </a>

          {/* Links */}
          <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6 text-sm text-muted-foreground">
            <a href="/privacidade" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </a>
            <a href="/termos" className="hover:text-foreground transition-colors">
              Termos de Uso
            </a>
            <a
              href="mailto:havanadigital@comercio.com"
              className="hover:text-foreground transition-colors break-all"
            >
              havanadigital@comercio.com
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            {`\u00A9 ${new Date().getFullYear()} Liso Vegetal. Todos os direitos reservados.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
