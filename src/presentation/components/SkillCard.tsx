'use client';

import { motion } from 'framer-motion';

interface SkillCardProps {
  category: string;
  items: Array<{
    name: string;
    icon: string;
  }>;
}

export function SkillCard({ category, items }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow'
    >
      <h3 className='text-xl font-semibold mb-4 text-gray-800 dark:text-white'>
        {category}
      </h3>
      <div className='flex flex-wrap gap-3'>
        {items.map((skill) => (
          <motion.span
            key={skill.name}
            whileHover={{ y: -3 }}
            className='flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300'
          >
            <span className='mr-1.5'>{skill.icon}</span>
            {skill.name}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
