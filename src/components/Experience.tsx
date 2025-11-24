import { motion } from 'framer-motion'
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi'

interface ExperienceItem {
  type: 'education' | 'work'
  title: string
  organization: string
  period: string
  description: string[]
}

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      type: 'education',
      title: 'Bacharelado em Ciência da Computação',
      organization: 'Cesar School',
      period: '2021 - 2025 (previsão)',
      description: [
        'Foco em ciência de dados, machine learning e inteligência artificial',
        'Desenvolvimento de projetos práticos em análise de dados e ML',
        'Participação em pesquisas acadêmicas na área de saúde',
      ],
    },
    {
      type: 'work',
      title: 'Cientista de Dados Júnior',
      organization: 'Atual',
      period: 'Atualmente',
      description: [
        'Desenvolvimento de modelos de machine learning para aplicações em saúde',
        'Análise de dados e extração de insights',
        'Trabalho com biomarcadores e modelos preditivos',
        'Colaboração em equipes multidisciplinares',
      ],
    },
  ]

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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="experience" className="section-padding bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiência & Formação
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Minha trajetória acadêmica e profissional
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-primary-200 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-16 md:pl-24"
            >
              {/* Icon */}
              <div className="absolute left-0 md:left-8 top-0 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center z-10">
                {exp.type === 'education' ? (
                  <HiAcademicCap className="w-8 h-8 text-primary-600" />
                ) : (
                  <HiBriefcase className="w-8 h-8 text-primary-600" />
                )}
              </div>

              {/* Content card */}
              <div className="bg-white rounded-xl shadow-md p-6 md:p-8 hover:shadow-lg transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0">
                    {exp.title}
                  </h3>
                  <span className="text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full inline-block w-fit">
                    {exp.period}
                  </span>
                </div>

                <p className="text-lg text-primary-600 font-semibold mb-4">
                  {exp.organization}
                </p>

                <ul className="space-y-2">
                  {exp.description.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start text-gray-700"
                    >
                      <span className="text-primary-600 mr-2 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience

