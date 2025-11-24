import { motion } from 'framer-motion'
import { HiMail, HiExternalLink } from 'react-icons/hi'
import { SiLinkedin, SiGithub } from 'react-icons/si'

const Contact = () => {
  const contactLinks = [
    {
      name: 'Email',
      icon: <HiMail className="w-6 h-6" />,
      url: 'mailto:SEU_EMAIL_AQUI',
      label: 'SEU_EMAIL_AQUI',
      color: 'bg-blue-500 hover:bg-blue-600',
    },
    {
      name: 'LinkedIn',
      icon: <SiLinkedin className="w-6 h-6" />,
      url: 'LINKEDIN_AQUI',
      label: 'Conectar no LinkedIn',
      color: 'bg-blue-700 hover:bg-blue-800',
    },
    {
      name: 'GitHub',
      icon: <SiGithub className="w-6 h-6" />,
      url: 'GITHUB_AQUI',
      label: 'Ver repositórios',
      color: 'bg-gray-800 hover:bg-gray-900',
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
    <section id="contact" className="section-padding bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Vamos conversar sobre ciência de dados, machine learning ou oportunidades de colaboração
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {contactLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target={link.url.startsWith('mailto:') ? undefined : '_blank'}
              rel={link.url.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              variants={itemVariants}
              className={`${link.color} text-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center text-center group`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="mb-3 group-hover:scale-110 transition-transform">
                {link.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{link.name}</h3>
              <p className="text-sm opacity-90">{link.label}</p>
            </motion.a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-8 text-center"
        >
          <p className="text-gray-700 mb-4">
            Estou sempre aberto a discussões sobre projetos interessantes, 
            oportunidades de pesquisa ou colaboração em ciência de dados.
          </p>
          <p className="text-sm text-gray-500">
            Sinta-se à vontade para me contatar através de qualquer um dos canais acima.
          </p>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 border-t border-gray-200 py-8 text-center"
      >
        <p className="text-gray-600">
          © {new Date().getFullYear()} Eduardo Muniz Fontelles. Todos os direitos reservados.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Desenvolvido com React, TypeScript e Tailwind CSS
        </p>
      </motion.footer>
    </section>
  )
}

export default Contact

