import styles from "./page.module.css";
import { searchResources, getCategories } from './actions/search';
import SearchUI from '../components/resource-search/resource-search';
import ResourceResults from '../components/resource-results/resource-results';
import { Resource } from '../components/resource-results/resource-results';
import { Suspense } from 'react';
interface HomePageProps {
  searchParams?: Promise<any> | undefined;
}
async function ResultsList(searchParams:any) {
  'use client'
    let { searchTerm, category, page } = searchParams.searchParams;
    searchTerm  = searchTerm && searchTerm.toLowerCase();
    category = category && category.toLowerCase();
    page = page ? parseInt(page, 10) : 1;
    const searchResults = await searchResources(searchTerm, category, page);
    const results:Resource[] = searchResults;

    return results.length > 0 ? (
            <ResourceResults resources={results} />
    ) : (<div>no results</div>);
}

export default async function Home({ searchParams }: HomePageProps) {
  const queryParams = await searchParams;
  const categories = await getCategories();
  const currentPage = queryParams?.page ? parseInt(queryParams?.page.toString()) : 1;
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Community Resrouces Directory</h1>
        <SearchUI searchTerm={queryParams?.searchTerm} category={queryParams?.category} categories={categories} page={currentPage}/>
        <Suspense fallback={<div>Loading...</div>}>
            <ResultsList searchParams={ {...queryParams} } />
        </Suspense>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
