import { ShieldCheck, Truck, Leaf } from "lucide-react"

const guarantees = [
  {
    icon: ShieldCheck,
    text: "Pagamento somente na entrega",
  },
  {
    icon: Truck,
    text: "Entrega rápida em todas as regiões do Brasil",
    disclaimer: "*Conforme disponibilidade",
  },
  {
    icon: Leaf,
    text: "Produto 100% vegetal",
  },
]

export function Guarantee() {
  return (
    <section id="garantia" className="bg-secondary py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="mb-8 mx-auto flex size-16 items-center justify-center rounded-full bg-primary/10">
          <ShieldCheck className="size-8 text-primary" />
        </div>

        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
          Compra segura, sem riscos para você.
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
          Sua satisfação é nossa prioridade. Oferecemos todas as garantias para que você compre com tranquilidade.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {guarantees.map((item) => (
            <div
              key={item.text}
              className="flex flex-col items-center gap-3 rounded-lg border border-border bg-card p-6"
            >
              <item.icon className="size-6 text-primary" />
              <p className="text-sm font-medium text-card-foreground text-center">
                {item.text}
              </p>
              {item.disclaimer && (
                <p className="text-[10px] text-muted-foreground text-center -mt-1">
                  {item.disclaimer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
