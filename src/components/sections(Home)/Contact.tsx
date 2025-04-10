'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Mail, Phone, User, MessageSquareText } from 'lucide-react'
import { motion } from 'framer-motion'

const contactSchema = z.object({
  name: z.string().min(1, 'Nome é obrigatório'),
  email: z.string().email('Email inválido'),
  phone: z.string().optional(),
  message: z.string().min(1, 'Mensagem obrigatória')
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = (data: ContactFormData) => {
    console.log(data)
  }

  return (
    <section id="contato" className="p-10 bg-gray-900 text-white w-full">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-lg leading-relaxed">
            Estou pronto para transformar suas ideias em soluções digitais. Seja
            um site institucional, um sistema completo ou automações para o seu
            negócio, posso ajudar você a alcançar seus objetivos com tecnologia
            de ponta.
          </p>
          <p className="mt-4 text-sm">
            Entre em contato e vamos conversar sobre como posso te ajudar!
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 bg-white shadow-lg rounded-xl p-6 sm:p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Nome
            </label>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                id="name"
                {...register('name')}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Seu nome"
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="email"
                id="email"
                {...register('email')}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="seu@email.com"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 font-semibold mb-2"
            >
              Telefone
            </label>
            <div className="relative">
              <Phone
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <input
                type="tel"
                id="phone"
                {...register('phone')}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="(xx) xxxxx-xxxx"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              Pedido / Mensagem
            </label>
            <div className="relative">
              <MessageSquareText
                className="absolute left-3 top-3 text-gray-400"
                size={20}
              />
              <textarea
                id="message"
                rows={5}
                {...register('message')}
                className="w-full pl-10 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Descreva sua necessidade"
              ></textarea>
            </div>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Enviar Mensagem
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
