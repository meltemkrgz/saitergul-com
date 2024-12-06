import styles from './styles.module.scss';

export default function Marquee({ words }) {
  return (
    <div className={styles.marquee}>
      <div className={styles.marqueeContent}>
        {[...words, ...words].map((word, index) => (
          <span key={index} className={styles.marqueeWord}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
