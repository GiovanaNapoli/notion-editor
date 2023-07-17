import {ComponentProps} from 'react'

export interface FloatingMenuProps extends ComponentProps<'button'> {
  title: string;
  subtitle: string;
  imageURL: string;
}
// https://www.notion.so/images/blocks/text/en-US.png
export default function FloatingButton ({title, subtitle, imageURL, ...rest}: FloatingMenuProps) {
  return (
    <button className='flex items-center gap-2 p-1 rounded min-w-[280px] hover:bg-zinc-600' {...rest}>
      <img 
        src={imageURL} 
        alt='Text'
        className='w-12 border border-zinc-600 rounded bg-white'
      />
      <div className='flex flex-col text-left'>
        <span className='text-sm'>{title}</span>
        <span className='text-xs text-zinc-400'>{subtitle}</span>
      </div>
    </button>
  )
}