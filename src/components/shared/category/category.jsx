import styles from './category.module.scss'

export default function Category({
  category,
  name,
  onHandleCategoryChange,
  active = false,
  readonly = false,
}) {
  return (
    <button
      className={`${styles.category} ${active ? styles.active : ''} ${!readonly ? styles.interactive : ''}`}
      onClick={() => (readonly ? '' : onHandleCategoryChange(category))}
    >
      {name}
    </button>
  )
}
