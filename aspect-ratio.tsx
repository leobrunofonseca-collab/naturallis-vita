import Image from "next/image"
import { Badge } from "@/components/ui/badge"

const kits = [
  {
    id: 1,
    name: "Kit Essencial",
    description: "Ideal para experimentar o alisamento vegetal. 1 unidade de Progressiva Vegetal 500ml.",
    price: "R$ 150,00",
    installment: "12x R$ 20,12",
    conversionCopy: "Garanta o seu hoje. Estoque limitado.",
    badge: null,
    href: "https://entrega.logzz.com.br/pay/meme6zkzm/progcreme150-nova",
    image: "/images/produto.png",
    quantity: 1,
  },
  {
    id: 2,
    name: "Kit Duplo",
    description: "Perfeito para manter seu liso por mais tempo. 2 unidades de Progressiva Vegetal 500ml.",
    price: "R$ 197,00",
    installment: "12x R$ 29,72",
    conversionCopy: "Melhor custo-beneficio. Nao perca essa oportunidade.",
    badge: "Mais vendido",
    href: "https://entrega.logzz.com.br/pay/meme6zkzm/prog-2197",
    image: "/images/produto.png",
    quantity: 2,
  },
  {
    id: 3,
    name: "Kit Profissional",
    description: "O tratamento completo para resultados duradouros. 3 unidades de Progressiva Vegetal 500ml.",
    price: "R$ 297,00",
    installment: "12x R$ 29,72",
    conversionCopy: "Escolha inteligente. Pague apenas quando receber.",
    badge: "Melhor custo-beneficio",
    href: "https://entrega.logzz.com.br/pay/meme6zkzm/progcreme3x97",
    image: "/images/produto.png",
    quantity: 3,
  },
]

export function Kits() {
  return (
    <section id="kits" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-muted-foreground mb-3">
            Pagamento somente na entrega
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Escolha o seu kit
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Sem riscos. Voce paga apenas quando receber.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {kits.map((kit) => (
            <div
              key={kit.id}
              className="relative flex flex-col items-center rounded-lg border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              {kit.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground border-0 px-4 py-1 text-xs font-medium whitespace-nowrap">
                  {kit.badge}
                </Badge>
              )}

              {/* Kit image - renders quantity bottles side by side */}
              <div className="w-full aspect-square mb-6 rounded-lg flex items-end justify-center overflow-hidden bg-secondary px-4 pb-4 pt-8">
                {Array.from({ length: kit.quantity }).map((_, i) => (
                  <div
                    key={i}
                    className="relative flex-1"
                    style={{
                      height: "85%",
                      marginLeft: kit.quantity > 1 && i > 0 ? "-8%" : "0",
                    }}
                  >
                    <Image
                      src={kit.image}
                      alt={`${kit.name} - frasco ${i + 1}`}
                      fill
                      className="object-contain drop-shadow-md"
                    />
                  </div>
                ))}
              </div>

              <h3 className="font-serif text-xl text-foreground mb-2">
                {kit.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-4 leading-relaxed">
                {kit.description}
              </p>

              <p className="text-2xl font-semibold text-foreground mb-1">
                {kit.price}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                ou {kit.installment}
              </p>

              <p className="text-xs text-foreground/70 italic text-center mb-6 leading-relaxed">
                {kit.conversionCopy}
              </p>

              <a
                href={kit.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Quero meu liso agora
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
