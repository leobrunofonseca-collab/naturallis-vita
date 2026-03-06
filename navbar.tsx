import { Leaf, Sparkles, ShieldCheck } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Tecnologia Vegetal Avançada",
    description:
      "Fórmula 100% vegana e livre de substâncias tóxicas. Cuida do seu cabelo com ingredientes naturais de alta performance.",
  },
  {
    icon: Sparkles,
    title: "Brilho Espelhado Imediato",
    description:
      "Resultados visíveis desde a primeira aplicação. Fios alinhados, macios e com brilho intenso que dura semanas.",
  },
  {
    icon: ShieldCheck,
    title: "Pague Apenas na Entrega",
    description:
      "Compra sem risco. Você só paga quando o produto chegar na sua casa. Total segurança para sua experiência.",
  },
  {
    icon: null,
    title: "Aprovado pela ANVISA",
    description:
      "Produto regularizado conforme normas da ANVISA.",
    anvisa: true,
  },
]

export function Benefits() {
  return (
    <section id="beneficios" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Por que escolher o Liso Vegetal?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Uma nova era de cuidado capilar: performance profissional com consciência limpa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`flex flex-col items-center text-center rounded-lg border p-8 hover:shadow-md transition-shadow ${
                benefit.anvisa
                  ? "border-primary/30 bg-primary/5"
                  : "border-border bg-card"
              }`}
            >
              <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-primary/10">
                {benefit.icon ? (
                  <benefit.icon className="size-6 text-primary" />
                ) : (
                  /* INSERT ANVISA ICON HERE */
                  <ShieldCheck className="size-6 text-primary" />
                )}
              </div>
              <h3 className="font-serif text-xl text-card-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              {benefit.anvisa && (
                <div className="mt-4 rounded-md bg-primary/10 px-4 py-3">
                  <p className="text-xs font-medium text-foreground leading-relaxed">
                    {'Autorização nº 2.04.784-1'}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {'Processo nº 25351.020110/2025-03'}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
