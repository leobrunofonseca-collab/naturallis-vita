import { Truck, CreditCard } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* EDIT COPY HERE */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight text-foreground text-balance">
              O liso dos seus sonhos, com a pureza que seu cabelo merece.
            </h1>

            {/* EDIT COPY HERE */}
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Zero formol. Zero ardência. 100% liso vegetal.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <span className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-4 py-2 text-sm font-medium text-foreground">
                <CreditCard className="size-4 text-muted-foreground" />
                Pagamento somente na entrega
              </span>
              <span className="inline-flex flex-col items-start gap-0.5 rounded-md bg-primary/10 px-4 py-2">
                <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  <Truck className="size-4 text-muted-foreground" />
                  Entrega rápida em todas as regiões do Brasil
                </span>
                <span className="text-[10px] text-muted-foreground pl-6">*Conforme disponibilidade</span>
              </span>
            </div>

            <div>
              <a
                href="#kits"
                className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-4 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                {/* EDIT COPY HERE */}
                Quero meu cabelo liso e saudável
              </a>
            </div>
          </div>

          {/* Hero video */}
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src="/videos/hero.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>
      </div>
    </section>
  )
}
