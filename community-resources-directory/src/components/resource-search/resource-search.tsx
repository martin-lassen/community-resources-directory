
"use client";
import React from 'react';
import styles from './resource-search.module.css';
import Form from 'next/form';

export interface SearchUIProps {
    categories: string[];
    category?: string | string[] | undefined;
    searchTerm?: string | string[] | undefined;
    page?: number | undefined;
}

const SearchUI: React.FC<SearchUIProps> = ( { categories, searchTerm, category } ) => {
    return (
        <div>
            <Form className={styles.searchForm} action="">
                <div className={styles.row}>
                    <div className={styles.container}>
                        <input name="searchTerm" defaultValue={searchTerm} aria-label="Search input" placeholder="Search name, descriptions and services" className={styles.input}/>
                        <button className="primary" type="submit">Search</button>
                    </div>
                    <div className="select-container">
                        <select name="category" defaultValue={category ? category.toString().toLowerCase().replace('+',' ') : ''} onChange={(e) => e?.target?.form?.requestSubmit()}>
                            <option value="">Categories</option>
                            {
                                categories.map(c => (
                                    <option value={c.toLowerCase()} key={c}>{c}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </Form>
            
        </div>
    );
};
export default SearchUI;
