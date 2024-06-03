import Carousel from '@/components/Carousel'
import React from 'react'

type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
        <Carousel />
    </div>
  )
}

export default HomePage