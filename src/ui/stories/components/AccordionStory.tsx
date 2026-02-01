import { Accordion } from '@/ui'

import styles from '../UiKit.module.scss'

export const AccordionStory = () => {
  return (
    <div className={styles.story}>
      <h4>16) Accordion</h4>

      <small>We can collapse and expand content</small>
      <code>{'<Accordion />'}</code>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Accordion title='Accordion' content={<p>Accordion content</p>} />
      </div>
    </div>
  )
}
