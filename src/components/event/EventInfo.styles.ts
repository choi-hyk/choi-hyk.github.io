import styles from "styled-components";

export const DivEventsContainer = styles.div`
    display: flex;
    padding: 1rem;
    background-color: var(--secondary-color);
    height: 65vh;
    width: 30%;
    border-radius: 6px;
    border: 3px solid var(--primary-color);
    color: var(--text-color);
    margin-top: 1rem;
    flex-direction: column;
    overflow-y: auto;
`;

export const DivEventInfo = styles.div`
    background-color: var( --secondary-border-color);
    
    width: 100%;
    flex: 0 0 100%;
    
    border-radius: 6px;

    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 1rem;
`;

export const DivEventTitle = styles.div`
    display: flex;
    background-color: var(--terminal_background_color);

    padding: 0.5rem;

    border: none;
    border-radius: 6px 6px 0 0;


    font-size: 1.2rem;
    font-weight: bold;
`;

export const DivEventDate = styles.div`
    display: flex;
    background-color: var(--background-color);

    align-items: center;       
    justify-content: center;  

    padding: 0.5rem;

    border: none;

    font-size: 1rem;
    font-weight: bold;

`;

export const DivEventDescription = styles.div`
    display: flex;
    padding: 1rem;
    border: none;
    font-size: 0.9rem;
    font-weight: normal;

    color: var(--text-color);
`;
