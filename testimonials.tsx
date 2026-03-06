import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "O produto é realmente sem formol?",
    answer:
      "Sim, 100%. Nossa fórmula é totalmente livre de formaldeído e qualquer derivado. Utilizamos uma tecnologia vegetal exclusiva que alinha os fios sem precisar de nenhuma substância tóxica. Você pode conferir a composição completa no rótulo do produto.",
  },
  {
    question: "Pode causar ardência?",
    answer:
      "Não. Justamente por ser livre de formol e componentes químicos agressivos, o Liso Vegetal não causa ardência, irritação no couro cabeludo ou lacrimejamento. É seguro e confortável durante toda a aplicação.",
  },
  {
    question: "A qualidade do produto é confiável?",
    answer:
      "Absolutamente. O Liso Vegetal é autorizado pela ANVISA (nº 2.04.784-1), passa por rigorosos controles de qualidade e possui formulação segura, livre de substâncias agressivas. Milhares de clientes já comprovaram os resultados profissionais em casa, com total satisfação e confiança na qualidade do produto.",
  },
  {
    question: "O produto vai danificar meus cabelos?",
    answer:
      "Não. Nossa fórmula foi desenvolvida para respeitar a estrutura natural dos fios, sem componentes agressivos ou prejudiciais. Quando utilizado conforme as instruções, o Liso Vegetal é seguro para uso regular e foi projetado para promover liso, brilho e maciez sem comprometer a saúde do seu cabelo.",
  },
  {
    question: "Em quanto tempo vejo resultado?",
    answer:
      "Os resultados são visíveis logo na primeira aplicação. Seus fios ficam alinhados, com brilho espelhado e maciez imediata. O efeito dura de 4 a 8 semanas, dependendo do tipo de cabelo e dos cuidados de manutenção.",
  },
  {
    question: "Como funciona o pagamento na entrega?",
    answer:
      "Você faz o pedido pelo nosso site e paga somente quando o produto chegar na sua casa. Aceitamos dinheiro, PIX, cartão de débito e cartão de crédito na entrega. Sem surpresas, sem risco. Você só paga quando tiver o produto em mãos.",
  },
  {
    question: "O frete é rápido?",
    answer:
      "Sim! Entregamos na maioria das regiões do Brasil com frete expresso. A maioria dos pedidos é entregue em 3 a 7 dias úteis, dependendo da sua região. Através de nossa malha logística exclusiva, reduzimos o tempo de espera ao mínimo para que você inicie sua transformação em poucos dias.",
  },
  {
    question: "O produto é aprovado pela ANVISA?",
    answer:
      "Sim. O Liso Vegetal está regularizado junto à ANVISA sob autorização nº 2.04.784-1, processo nº 25351.020110/2025-03, atendendo às normas vigentes de segurança e qualidade para comercialização no Brasil.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 text-balance">
            Perguntas frequentes
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Tire suas dúvidas antes de garantir o seu kit.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium text-foreground text-base hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
