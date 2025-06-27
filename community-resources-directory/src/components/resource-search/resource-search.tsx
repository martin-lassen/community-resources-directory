
"use client";
import React from 'react';
import styles from './resource-search.module.css';
import Form from 'next/form';

export interface SearchUIProps {
    categories: string[];
    searchTerm?: string | string[] | undefined;
}

const SearchUI: React.FC<SearchUIProps> = ( { categories, searchTerm } ) => {
    return (
        <div>
            <Form className={styles.searchForm} action="">
                <div className={styles.container}>
                    <input name="searchTerm" defaultValue={searchTerm} aria-label="Search input" placeholder="Search name, descriptions and services" className={styles.input}/>
                    <button className="primary" type="submit">Search</button>
                </div>
                <div className="select-container">
                    <select name="category" onChange={(e) => e?.target?.form?.requestSubmit()}>
                        <option value="">Categories</option>
                        {
                            categories.map(c => (
                                <option value={c} key={c}>{c}</option>
                            ))
                        }
                    </select>
                </div>
            </Form>
            
        </div>
    );
};
export default SearchUI;
