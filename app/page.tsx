"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Building2, CheckCircle, FileText, Ruler, Phone, MapPin, PhoneIcon as WhatsApp } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LandingPage() {
  const formatWhatsAppLink = (number: string) => {
    const cleaned = number.replace(/\D/g, "")
    return `https://wa.me/55${cleaned}`
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <div className="flex flex-col min-h-screen relative">
      {/* Floating WhatsApp Button */}
      <Link
        href={formatWhatsAppLink("27992286156")}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-secondary to-primary p-4 text-white shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Contato via WhatsApp"
      >
        <WhatsApp className="h-6 w-6" />
      </Link>

      {/* Header */}
      <header className="border-b bg-gradient-to-r from-primary via-primary/95 to-secondary sticky top-0 z-40">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Building2 className="h-6 w-6 text-white" />
            <span className="text-lg font-semibold text-white">ProART Diniz</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link
              href="#servicos"
              className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4"
            >
              Serviços
            </Link>
            <Link
              href="#beneficios"
              className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4"
            >
              Diferenciais
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium text-white/90 hover:text-white hover:underline underline-offset-4"
            >
              Contato
            </Link>
          </nav>
          <Link
            href={formatWhatsAppLink("27992286156")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-white/10 px-4 py-2 text-sm font-medium text-white shadow backdrop-blur-sm transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-1"
          >
            <Phone className="mr-2 h-4 w-4" />
            Solicitar Orçamento
          </Link>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary/[0.15] via-accent to-white"
        >
          <div className="container px-4 md:px-6">
            <motion.div {...fadeInUp} className="flex flex-col items-center gap-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                Especialistas em ART
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Soluções completas em Anotação de Responsabilidade Técnica para seu projeto de construção civil
              </p>
              <Link
                href={formatWhatsAppLink("27992286156")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-secondary to-primary px-8 text-sm font-medium text-white shadow transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-1"
              >
                Fale Conosco
              </Link>
            </motion.div>
          </div>
        </motion.section>

        {/* Serviços Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="servicos"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <motion.h2 {...fadeInUp} className="text-3xl font-bold tracking-tighter text-primary text-center mb-12">
              Nossos Serviços
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <motion.div {...fadeInUp}>
                <Card className="group overflow-hidden">
                  <CardContent className="p-6 bg-gradient-to-br from-white to-accent/20">
                    <FileText className="h-12 w-12 mb-4 text-secondary group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Emissão de ART</h3>
                    <p className="text-muted-foreground">
                      Elaboração e emissão da sua ART de forma rápida, garantindo conformidade com o CREA.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div {...fadeInUp}>
                <Card className="group overflow-hidden">
                  <CardContent className="p-6 bg-gradient-to-br from-white to-accent/20">
                    <Ruler className="h-12 w-12 mb-4 text-secondary group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Consultoria Técnica</h3>
                    <p className="text-muted-foreground">
                      Ajudamos você a identificar a documentação necessária para seu projeto.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div {...fadeInUp}>
                <Card className="group overflow-hidden">
                  <CardContent className="p-6 bg-gradient-to-br from-white to-accent/20">
                    <Building2 className="h-12 w-12 mb-4 text-secondary group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold mb-2 text-primary">Acompanhamento de Processo</h3>
                    <p className="text-muted-foreground">
                      Monitoramos cada etapa para garantir que sua ART seja aceita sem problemas.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefícios Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          id="beneficios"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-t from-primary/[0.15] via-accent to-white"
        >
          <div className="container px-4 md:px-6">
            <motion.h2 {...fadeInUp} className="text-3xl font-bold tracking-tighter text-primary text-center mb-12">
              Nossos Diferenciais
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div {...fadeInUp}>
                <div className="group flex items-start gap-4 rounded-lg bg-gradient-to-br from-white to-accent/30 p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Expertise Técnica</h3>
                    <p className="text-muted-foreground">
                      Nossa equipe possui ampla experiência no mercado de construção civil
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeInUp}>
                <div className="group flex items-start gap-4 rounded-lg bg-gradient-to-br from-white to-accent/30 p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Atendimento Exclusivo</h3>
                    <p className="text-muted-foreground">Acompanhamento personalizado em todas as etapas do processo</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeInUp}>
                <div className="group flex items-start gap-4 rounded-lg bg-gradient-to-br from-white to-accent/30 p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Rapidez e Eficiência</h3>
                    <p className="text-muted-foreground">Processos otimizados para entrega ágil e dentro do prazo</p>
                  </div>
                </div>
              </motion.div>
              <motion.div {...fadeInUp}>
                <div className="group flex items-start gap-4 rounded-lg bg-gradient-to-br from-white to-accent/30 p-6 shadow-sm transition-all hover:shadow-md">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary">Suporte Completo</h3>
                    <p className="text-muted-foreground">Assessoria integral em documentação e processos técnicos</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Contato Section */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          id="contato"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white via-accent to-primary/[0.15]"
        >
          <div className="container px-4 md:px-6">
            <motion.div {...fadeInUp} className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter text-primary">Entre em Contato</h2>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Nossa equipe está pronta para atender sua demanda e fornecer um orçamento personalizado
              </p>
              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <Link
                  href={formatWhatsAppLink("27992286156")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-secondary to-primary px-8 text-sm font-medium text-white shadow transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-1"
                >
                  <WhatsApp className="mr-2 h-4 w-4" />
                  WhatsApp
                </Link>
                <Link
                  href="https://maps.app.goo.gl/qVaCtQcmLDj1PTNz8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-secondary/20 hover:border-secondary text-primary bg-white/80 backdrop-blur-sm hover:scale-105 transition-all inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium"
                >
                  <MapPin className="mr-2 h-4 w-4" />
                  Região da Grande Vitória, Serra - ES
                </Link>
              </div>
              <div className="mt-6 text-center border-t pt-6 border-primary/10">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex items-center justify-center w-[200px] h-20 bg-white rounded-lg border-2 border-primary/20 p-2">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-header-cft-portal-EuywwD4uDu8vgXDz1ctID6RhZGC1z2.png"
                      alt="Logo CFT - Conselho Federal dos Técnicos Industriais"
                      width={180}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Responsável Técnica: Luzana Diniz Cordeiro
                    <br />
                    <span className="font-semibold text-primary">CFT: 47109595715</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-b from-accent to-primary/10">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} ProART Diniz. Todos os direitos reservados.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary hover:underline underline-offset-4"
            >
              Termos de Serviço
            </Link>
            <Link
              href="#"
              className="text-xs text-muted-foreground hover:text-primary hover:underline underline-offset-4"
            >
              Privacidade
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

