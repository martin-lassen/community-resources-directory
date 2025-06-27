import React from 'react';
import { Resource } from '../resource-results/resource-results';
import { IconStar, IconEmail, IconLocation, IconURL, IconPhone,IconTime } from '../icons';
import styles from "./resource-card.module.css";
const ResourceCard: React.FC<Resource> = ({ 
    name,
    address,
    distance,
    description,
    phone,
    email,
    website,
    hours,
    eligibility,
    services,
    rating,
    capacity,
    languages_supported }) => {
    return (
        <div className={styles.card}>
            <div className={styles.main}>
                {website ? 
                    <a href={website} target="_blank" className={styles.name}>{name}</a> :
                    <div className={styles.name}>{name}</div>
                }
                {(rating || capacity || distance) && (
                    <div className={styles.details}>
                        {rating && (
                            <div className={styles.rating}>
                                <IconStar />
                                {rating}
                            </div>
                        )}
                        {distance && (<div className={styles.distance}><IconLocation /> {distance}</div>)}
                        {capacity && (
                            <div>
                                Capacity: {capacity}
                            </div>
                        )}
                    </div>
                )}
                {description && (<div>{description}</div>)}
                
                {eligibility && (
                    <div className={styles.list}>
                        Eligibility: <span>{eligibility}</span>
                    </div>
                )}
                {languages_supported && (
                    <div className={styles.list}>
                        Supported Languages:&nbsp;
                        {
                            languages_supported && languages_supported.map((l,i)=>
                                (<span key={l}>{l}{i !== languages_supported.length - 1 && ','} </span>)
                        )}
                    </div>
                )}
                {services && services.length > 0 && (
                    <div className={styles.tags}><span>Services:</span>
                        {
                            services && services.map(i => (
                                <span className={styles.tag} key={i}>{i}</span>
                            ))
                        }
                    </div>
                )}
            </div>
            <div className={styles.side}>
                {hours && (<div className={styles.iconLink}>
                    <span><IconTime /> {hours}</span>
                </div>)}
                
                {website && (<div className={styles.iconLink}>
                    <a href={website}><IconURL /> {website}</a>
                </div>)}
                {phone && (<div className={styles.iconLink}>
                    <a href={`tel:${phone}`}><IconPhone /> {phone}</a>
                </div>)}
                {email && (<div className={styles.iconLink}>
                    <a href={`mailto:${email}`}><IconEmail /> {email}</a>
                </div>)}
                {address && (<div className={styles.iconLink}>
                    <a href={`https://www.google.com/maps/place/${address?.replace(" ", "+")}`} target="_blank"><IconLocation /> {address}</a>
                </div>)}
                
            </div>
        </div>
    );
};
export default ResourceCard;