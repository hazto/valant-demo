

export type Stuff = Record<string, unknown>;

export interface Maze {
    name?: string | undefined;
    width?: number;
    height?: number;
    paths?: Coordinate[] | undefined;
}

export interface Coordinate {
    x?: number;
    y?: number;
    isStart?: boolean;
    isFinish?: boolean;
}

export interface Directions {
    [key: string]: Direction;
}

export type Direction = 'North' | 'South' | 'East' | 'West';

export const North: Direction = 'North';
export const South: Direction = 'South';
export const East: Direction = 'East';
export const West: Direction = 'West';

export const AllDirections: {[key: string]: Direction} = {
    north: North,
    south: South,
    east: East,
    west: West
}