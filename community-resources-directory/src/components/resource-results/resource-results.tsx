"use server"
import React from 'react';
import ResourceCard from '../resource-card/resource-card';

export interface Coordinates {
    lat: number;
    lng: number;
}

export interface Resource {
    id: number;
    name: string;
    category: string;
    address?: string;
    distance?: string;
    coordinates?: Coordinates;
    description?: string;
    phone?: string;
    email?: string;
    website?: string;
    hours?: string;
    eligibility?: string;
    services?: string[];
    rating?: number;
    capacity?: number;
    languages_supported?: string[];
}

export interface ResourcesList {
    resources?: Resource[];
}

const ResourceResults: React.FC<ResourcesList> = ({ resources }) => {
    return (
        <div>
            {
                resources && resources.length > 0 && resources.map(item => (
                    <ResourceCard {...item} key={item.id}/>
                ))
            }
        </div>
    );
};
export default ResourceResults;
