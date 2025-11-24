import { motion } from 'framer-motion'
import { FaBrain, FaChartLine, FaEye } from 'react-icons/fa'
import { BsFileEarmarkCode } from 'react-icons/bs'

interface SkillCategory {
  title: string
  icon: React.ReactNode
  skills: string[]
  color: string
}

const Skills = () => {
  const skillCategories: SkillCategory[] = [
    {
      title: 'Linguagens',
      icon: <BsFileEarmarkCode className="w-6 h-6" />,
      skills: ['Python', 'SQL'],
      color: 'bg-blue-100 text-blue-700',
    },
    {
      title: 'Machine Learning',
      icon: <FaBrain className="w-6 h-6" />,
      skills: [
        'Regressão',
        'Classificação',
        'Validação Cruzada',
        'Tuning de Hiperparâmetros',
        'Ensembles',
      ],
      color: 'bg-purple-100 text-purple-700',
    },
    {
      title: 'Deep Learning',
      icon: <FaBrain className="w-6 h-6" />,
      skills: [
        'Redes Neurais',
        'Visão Computacional',
        'Interpretabilidade',
      ],
      color: 'bg-pink-100 text-pink-700',
    },
    {
      title: 'Análise de Dados',
      icon: <FaChartLine className="w-6 h-6" />,
      skills: [
        'ETL',
        'EDA',
        'Visualização',
        'Estatística',
      ],
      color: 'bg-green-100 text-green-700',
    },
    {
      title: 'Ferramentas',
      icon: <FaEye className="w-6 h-6" />,
      skills: [
        'Jupyter',
        'Git/GitHub',
        'VS Code',
        'Cursor',
        'Docker (básico)',
        'MLflow (básico)',
      ],
      color: 'bg-orange-100 text-orange-700',
    },
    {
      title: 'Outros',
      icon: <BsFileEarmarkCode className="w-6 h-6" />,
      skills: [
        'Versionamento',
        'Documentação',
        'Reprodutibilidade',
        'Trabalho em Equipe',
      ],
      color: 'bg-indigo-100 text-indigo-700',
    },
  ]

  const languages = [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado/Fluente' },
    { name: 'Espanhol', level: 'Intermediário' },
    { name: 'Francês', level: 'Intermediário' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Habilidades
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tecnologias, ferramentas e competências que utilizo no meu trabalho
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-white rounded-xl shadow-md p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
            Idiomas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {languages.map((lang, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  {lang.name}
                </p>
                <p className="text-sm text-gray-600">{lang.level}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

