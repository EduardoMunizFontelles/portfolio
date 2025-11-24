import { motion } from 'framer-motion'

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 text-center"
          >
            Sobre Mim
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6"
          >
            <p>
              Sou estudante de <strong>Ciência da Computação</strong> na{' '}
              <strong>Cesar School</strong>, com previsão de conclusão em 2025,
              e atualmente atuo como <strong>cientista de dados júnior</strong>.
              Minha trajetória é focada em <strong>machine learning aplicado à saúde</strong>,
              visão computacional e análise de dados.
            </p>

            <p>
              Tenho especial interesse em <strong>modelos para detecção precoce de Alzheimer</strong>,
              trabalhando com biomarcadores plasmáticos e técnicas de aprendizado de máquina para
              estimar carga cerebral de beta-amiloide. Esta linha de pesquisa combina meu interesse
              por <strong>IA aplicada a problemas reais</strong> com o impacto social significativo
              que a detecção precoce pode proporcionar.
            </p>

            <p>
              Além da pesquisa acadêmica, busco constantemente aplicar meus conhecimentos em
              contextos reais de pesquisa e indústria, desenvolvendo projetos que vão desde sistemas
              de recomendação personalizados até otimização logística, sempre com foco em
              reprodutibilidade, boas práticas de engenharia de dados e impacto mensurável.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About

