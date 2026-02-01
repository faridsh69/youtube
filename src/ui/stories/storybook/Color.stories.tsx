import { ColorsEnum, FontsEnum, Label } from '@/ui'

export default {
  title: 'Uikit/Color and fonts',
  component: () => {
    return (
      <div>
        {Object.values(FontsEnum).map(font => (
          <Label label={`${font} - Label`} font={font} key={font} />
        ))}
        <hr />
        <h2>Colors</h2>
        {Object.values(ColorsEnum).map(color => (
          <Label label={`${color} - Color`} color={color} key={color} />
        ))}
      </div>
    )
  },
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Button',
  },
}
