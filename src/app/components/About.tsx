import { cn } from '@/lib/utils'
import React from 'react'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react'
import Image from 'next/image'

export default function BentoGridDemo() {
  return (
    <BentoGrid className='max-w-4xl mx-auto '>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
        />
      ))}
    </BentoGrid>
  )
}
const Skeleton = () => (
  <div className='flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100'></div>
)
const items = [
  {
    title: 'Aim',
    description:
      'We aim to see new opportunities in the global and domestic market in order to sustain a reasonable rate of growth in business.',
    header: (
      <Image
        src='/images/guy.jpg'
        width={500}
        height={500}
        alt='loading'
        className='w-full h-32 object-contain rounded-xl'
        priority
      />
    ),
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Vision',
    description:
      'Our vision is to be a leading and relatable company which adds sustainable value to stakeholders.',
    header: (
      <Image
        src='/images/ele.jpg'
        alt='warehouse'
        className='w-full h-32 object-contain rounded-xl'
        width={500}
        height={500}
        priority
      />
    ),
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Mission',
    description:
      'Our mission is being the leader in all sectors of the services we provide with our main focus in the clearing industry .',
    header: (
      <Image
        src='/images/girl.jpg'
        alt='sales ladies'
        className='w-full h-full object-contain rounded-xl'
        width={500}
        height={500}
        priority
      />
    ),
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  {
    title: 'Speed Fast Your Competition',
    description:
      'Outpace Your Competition: Speed Ahead with Our Shipping Solutions.',
    header: (
      <Image
        src='/images/view.jpg'
        alt='harbor'
        className='w-full h-full object-cover rounded-xl'
        width={500}
        height={500}
        priority
      />
    ),
    icon: <IconClipboardCopy className='h-4 w-4 text-neutral-500' />,
  },
  //   {
  //     title: 'The Pursuit of Knowledge',
  //     description: 'Join the quest for understanding and enlightenment.',
  //     header: <Skeleton />,
  //     icon: <IconArrowWaveRightUp className='h-4 w-4 text-neutral-500' />,
  //   },
  //   {
  //     title: 'The Joy of Creation',
  //     description: 'Experience the thrill of bringing ideas to life.',
  //     header: <Skeleton />,
  //     icon: <IconBoxAlignTopLeft className='h-4 w-4 text-neutral-500' />,
  //   },
  //   {
  //     title: 'The Spirit of Adventure',
  //     description: 'Embark on exciting journeys and thrilling discoveries.',
  //     header: <Skeleton />,
  //     icon: <IconBoxAlignRightFilled className='h-4 w-4 text-neutral-500' />,
  //   },
]
