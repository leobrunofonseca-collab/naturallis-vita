import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Política de Privacidade | Liso Vegetal",
  description: "Política de Privacidade do Liso Vegetal.",
}

export default function PrivacidadePage() {
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
          Política de Privacidade
        </h1>

        <div className="flex flex-col gap-10 text-foreground">
          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">1. Coleta de Dados</h2>
            <p className="text-muted-foreground leading-relaxed">
              Coletamos apenas as informações necessárias para processar seu pedido e garantir a melhor experiência de compra. Isso inclui nome completo, endereço de entrega, telefone para contato e e-mail. Esses dados são fornecidos voluntariamente pelo cliente no momento da compra.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">2. Uso das Informações</h2>
            <p className="text-muted-foreground leading-relaxed">
              As informações coletadas são utilizadas exclusivamente para: processamento e envio de pedidos, comunicação sobre o status da entrega, atendimento ao cliente e, quando autorizado, envio de novidades e promoções. Não compartilhamos seus dados pessoais com terceiros, exceto quando necessário para a entrega do produto (transportadoras parceiras).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">3. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nosso site pode utilizar cookies para melhorar a experiência de navegação, personalizar conteúdo e analisar o tráfego do site. Você pode configurar seu navegador para recusar cookies, porém algumas funcionalidades do site podem ser afetadas.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">4. Pagamento na Entrega</h2>
            <p className="text-muted-foreground leading-relaxed">
              O Liso Vegetal opera exclusivamente com pagamento na entrega (Pix, cartão de débito ou dinheiro). Não coletamos, armazenamos ou processamos dados de cartão de crédito ou informações bancárias em nosso site. O pagamento é realizado diretamente ao entregador no momento do recebimento do produto.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">5. Direitos do Cliente</h2>
            <p className="text-muted-foreground leading-relaxed">
              De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a: acessar seus dados pessoais armazenados, solicitar a correção de dados incompletos ou desatualizados, solicitar a exclusão de seus dados pessoais, revogar o consentimento para o uso de seus dados e solicitar a portabilidade de seus dados. Para exercer qualquer um desses direitos, entre em contato conosco.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl text-foreground mb-4">6. Contato</h2>
            <p className="text-muted-foreground leading-relaxed">
              Para dúvidas, solicitações ou esclarecimentos sobre nossa Política de Privacidade, entre em contato pelo e-mail:{" "}
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
