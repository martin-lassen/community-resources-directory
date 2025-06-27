"use server";
import { Resource } from '@/components/resource-results/resource-results';
import IPLocate from 'node-iplocate';
import staticResources from '../../lib/resources.json';
import { calculateDistance } from '@/lib/utils';

const ipLocateClient = new IPLocate('5f26d527a3359d4ac59b389631c5384e');

// TODO add UI for selecting number of results per page
// TODO move data to a DB and replace filter logic with SQL calls
const pageSize=10;

export async function searchResources(searchInput:string, category:string, page:number): Promise<Resource[]> {
    const locationInfo:any = await ipLocateClient.lookupSelf();
    const resources: Resource[] = <Resource[]>staticResources.resources.filter(i => {
        let match = false;
        if (searchInput || category) {
            if (searchInput) {
                if(searchInput && (i.name?.toLowerCase().includes(searchInput) || i.description?.toLowerCase().includes(searchInput))) {
                    match = true;
                }
                if (!match && i.services && i.services.length > 0) {
                    i.services.forEach(s => {
                        if (s.toLowerCase().includes(searchInput)) {
                            match = true;
                        }
                    });
                }
                if(category && i.category?.toLowerCase() !== category) {
                    match = false;
                }
            } else if(category && i.category?.toLowerCase() === category) {
                match = true;
            }
        } else {
            match = true;
        }
        return match;
    }, []);

    let returnResources: Resource[];
    if (page - 1 > (resources.length / pageSize)) {
        return [];
    }
    else if (resources.length > pageSize * (page-1)) {
        returnResources = resources.slice((page - 1) * pageSize, page * pageSize);
    } else {
        returnResources = resources;
    }
    return returnResources.map(r => ({
        ...r,
        distance: (r?.coordinates && r?.coordinates.lat && r.coordinates.lng) ? calculateDistance(locationInfo.latitude, locationInfo.longitude, r.coordinates?.lat, r.coordinates?.lng) : ''
    }));
}

export async function getCategories(): Promise<string[]> {
    const categories: string[] = staticResources.resources.reduce((a, c) => {
        if (c.category != '' && !a.includes(c.category)) {
            a.push(c.category);
        }
        return a;
    }, <string[]>[]);
    categories.sort();
    return categories;
}