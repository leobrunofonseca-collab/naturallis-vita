import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Termos de Uso | Liso Vegetal",
  description: "Termos de Uso do Liso Vegetal.",
}

export default function TermosPage() {
  return (
    <main className="bg-secondary min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-12"
        >
          <ArrowLeft className="size-4" />
          Voltar ao início
        </Link>

        <h1 className="font-serif text-3xl md:text-4xl text-foreground mb-12 text-balance">
          Termos de Uso
        </h1>

        <div className="flex flex-col gap-10 text-foreground">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">1. Responsabilidade de Uso do Produto</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Liso Vegetal é um produto cosmético de uso externo destinado ao alisamento capilar. O cliente é responsável por seguir corretamente as instruções de uso descritas na embalagem do produto. Recomendamos realizar um teste de sensibilidade antes da primeira aplicação. O Liso Vegetal não se responsabiliza por uso inadequado ou em desacordo com as orientações fornecidas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">2. Entrega e Pagamento</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todos os pedidos são enviados para todo o Brasil com prazo estimado de entrega de 3 a 7 dias úteis, dependendo da região. O pagamento é realizado exclusivamente na entrega do produto, mediante Pix, cartão de débito ou dinheiro. Não exigimos nenhum pagamento antecipado. Caso o cliente não esteja presente no endereço indicado no momento da entrega, serão realizadas até duas tentativas adicionais de entrega.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">3. Devoluções e Garantia</h2>
            <p className="text-muted-foreground leading-relaxed">
              O cliente tem o direito de devolver o produto em até 7 (sete) dias corridos após o recebimento, conforme previsto no Código de Defesa do Consumidor, desde que o produto não tenha sido aberto ou utilizado. Para solicitar a devolução, o cliente deve entrar em contato pelo e-mail havanadigital@comercio.com informando o número do pedido e o motivo da devolução. O reembolso será processado após o recebimento e verificação do produto devolvido.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">4. Propriedade Intelectual</h2>
            <p className="text-muted-foreground leading-relaxed">
              Todo o conteúdo disponível neste site, incluindo textos, imagens, logotipos, design, vídeos e marcas, são de propriedade exclusiva do Liso Vegetal e estão protegidos pela legislação brasileira de propriedade intelectual. É proibida a reprodução, distribuição ou uso comercial de qualquer material sem autorização prévia e expressa por escrito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">5. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Liso Vegetal não se responsabiliza por: danos decorrentes do uso inadequado do produto, variações nos resultados individuais (que dependem do tipo, condição e histórico químico do cabelo), atrasos na entrega causados por fatores externos (greves, condições climáticas, etc.), ou indisponibilidade temporária do site por manutenção ou falhas técnicas. Os resultados apresentados em nossos materiais são baseados em experiências reais, porém podem variar.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">6. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas, reclamações ou solicitações referentes a estes Termos de Uso, entre em contato pelo e-mail:{" "}
              <a
                href="mailto:havanadigital@comercio.com"
                className="text-foreground underline underline-offset-4 hover:text-primary transition-colors"
              >
                havanadigital@comercio.com
              </a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            Última atualização: Março de 2026
          </p>
        </div>
      </div>
    </main>
  )
}
