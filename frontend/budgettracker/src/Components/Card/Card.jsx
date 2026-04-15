import styles from './Card.module.css';

export default function Card({ title, content }) {
    const imgExists = !!content?.img;

    return (
        <div className={styles.cardBody}>
            <h2>{title}</h2>
            {imgExists && <img src={content.img} alt={content.alt} />}
            
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <p>{content.p3}</p>
        </div>
    );
}