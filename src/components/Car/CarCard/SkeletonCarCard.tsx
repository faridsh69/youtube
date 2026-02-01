import { Skelet, SkeletVariants } from '@/ui'

export const SkeletonCarCard = (props: { count?: number }) => {
  const { count = 3 } = props

  return (
    <div>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Skelet key={index} variant={SkeletVariants.Card} width='100%' height={100} />
        ))}
    </div>
  )
}
