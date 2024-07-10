import styles from './ContentCard.module.css'

interface IContentCardProps {
  arText: string;
  enText: string;
  title: string;
}
export const ContentCard = ({ arText, title, enText }: IContentCardProps) => {
  return (
    <div className={styles.contentCardWrapper}>
      <div className={styles.card}>
        <h1>{title}</h1>
        <p className={styles.arText}>{arText}</p>
        <p className={styles.enText}>{enText}</p>
      </div>
    </div>
  );
};
