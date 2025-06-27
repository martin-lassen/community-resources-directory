"use server";
import { Resource } from '@/components/resource-results/resource-results';
import IPLocate from 'node-iplocate';
//import { revalidatePath } from 'next/cache';
//import { useRouter, useSearchParams } from 'next/navigation';
import resources from '../../lib/resources.json';
import { calculateDistance } from '@/lib/utils';

const ipLocateClient = new IPLocate('5f26d527a3359d4ac59b389631c5384e');


export async function searchResources(searchInput:string, filters:string): Promise<Resource[]> {
    const locationInfo:any = await ipLocateClient.lookupSelf();
    const returnResources: Resource[] = <Resource[]>resources.resources.filter(i => {
        let match = false;
        if (searchInput || filters) {
            if (searchInput) {
                if(searchInput && (i.name?.toLowerCase().includes(searchInput) || i.description?.toLowerCase().includes(searchInput))) {
                    match = true;
                }
                if (!match && i.services && i.services.length > 0) {
                    i.services.forEach(s => {
                        if (s.toLowerCase().includes(searchInput)) {
                            match = true;
                        }
                    })
                }
                if(filters && i.category?.toLowerCase() !== filters) {
                    match = false
                }
            } else if(filters && i.category?.toLowerCase() === filters) {
                match = true
            }
        } else {
            match = true;
        }
        return match;
    }, []);
    //TODO add pagination an limit results;
    

    return returnResources.map(r => ({
        ...r,
        distance: (r?.coordinates && r?.coordinates.lat && r.coordinates.lng) ? calculateDistance(locationInfo.latitude, locationInfo.longitude, r.coordinates?.lat, r.coordinates?.lng) : ''
    }));
}

export async function getCategories(): Promise<string[]> {
    const categories: string[] = resources.resources.reduce((a, c) => {
        if (c.category != '' && !a.includes(c.category)) {
            a.push(c.category);
        }
        return a;
    }, <string[]>[]);
    categories.sort();
    return categories;
}