import styles from './feedback-detail-navigation.module.scss';
export function FeedbackDetailNavigation({children}) {
  return <div className={styles.navigation}>{children}</div>;
}