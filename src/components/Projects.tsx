import { motion } from 'framer-motion'
import { SiGithub } from 'react-icons/si'
import { HiExternalLink } from 'react-icons/hi'

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  details: string[]
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: 'Predição Precoce de Alzheimer com Biomarcadores Plasmáticos',
      description:
        'Modelos de ML para estimar carga cerebral de beta-amiloide (Centiloid) usando biomarcadores plasmáticos e dados clínico-demográficos.',
      technologies: [
        'Python',
        'Machine Learning',
        'Pandas',
        'Scikit-learn',
        'XGBoost',
        'Biomarcadores',
      ],
      details: [
        'Uso de bases ADNI e Bio-Hermes',
        'Biomarcadores: pTau217, Aβ42, Aβ40, GFAP, NfL',
        'Foco em detecção precoce e acessibilidade',
        'Comparação com PET amiloide',
      ],
    },
    {
      title: 'Sistema de Recomendação de Filmes Personalizado',
      description:
        'Pipeline completo de ciência de dados para prever notas pessoais e ranquear watchlist usando dados do Letterboxd e TMDb.',
      technologies: [
        'Python',
        'Regressão',
        'ETL',
        'EDA',
        'APIs',
        'Pandas',
      ],
      details: [
        'Integração de dados do Letterboxd e TMDb',
        'Modelo de regressão para predição de notas',
        'Pipeline completo: ETL, EDA, modelagem, avaliação',
        'Preparação para deploy',
      ],
    },
    {
      title: 'Otimização Logística de Colheita de Cana-de-Açúcar',
      description:
        'Sistema de otimização para colheita e transporte usando algoritmos genéticos e métodos exatos.',
      technologies: [
        'Python',
        'Otimização',
        'OR-Tools',
        'Algoritmos Genéticos',
        'Visualização',
      ],
      details: [
        'Modelagem de fazendas, caminhões e viagens',
        'Otimização de janelas de tempo',
        'Uso de algoritmos genéticos e OR-Tools',
        'Geração de relatórios e visualizações',
      ],
    },
    {
      title: 'Mapeamento e Localização em Ambientes Subaquáticos',
      description:
        'Pesquisa sobre métodos de mapeamento 3D e localização usando sensores acústicos e ópticos em mini-ROVs.',
      technologies: [
        'Robótica',
        'Visão Computacional',
        'Sensores Acústicos',
        'Mapeamento 3D',
        'SLAM',
      ],
      details: [
        'Pesquisa com mini-ROVs/robótica subaquática',
        'Revisão de métodos de mapeamento 3D',
        'Localização usando sensores acústicos e ópticos',
        'Aplicações em inspeção de estruturas offshore',
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projetos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alguns dos principais projetos que desenvolvi e nos quais trabalhei
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {project.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="flex items-start text-sm text-gray-600"
                    >
                      <span className="text-primary-600 mr-2 mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    <SiGithub className="w-5 h-5" />
                    Ver no GitHub
                    <HiExternalLink className="w-4 h-4" />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

