'use client'

import { Navbar } from '../Navbar/Navbar'

export const HeaderNavbar = () => {
  const categoryOptions = [
    {
      label: 'categoy option label',
      path: 'categoy option path',
    },
  ]
  const categories = [
    {
      label: 'category label',
      path: 'category path',
      options: categoryOptions,
    },
  ]
  const options = [
    {
      label: 'Frontend',
      categories: categories,
    },
    {
      label: 'Backend',
      categories: categories,
    },
    {
      label: 'How to',
      categories: categories,
    },
    {
      label: 'Documents',
      categories: categories,
    },
    {
      label: 'Blog',
      categories: categories,
    },
  ]

  return <Navbar options={options} />
}
