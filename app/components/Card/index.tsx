import styles from './Card.module.css'

interface IAppCardProps {
  title: string;
  Icon: any;
  onClick?: () => void
}

export const AppCard = ({ title, Icon }: IAppCardProps) => {
  return (
    <div className={styles.appCard}>
      <h1 className={styles.cardTitle}>{title}</h1>
      <Icon className={styles.svgIcon} />
    </div>
  );
};
