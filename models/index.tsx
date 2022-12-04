export type DataResponse = {
	success: boolean;
	errors: Error[];
	errorMessage: string;
	data?: any;
};

export enum ObstacleFamily {
	Physique = "Physique",
	Agilité = "Agilité",
	Fun = "Fun",
}

export interface ObstacleType {
	id: number;
	name: string;
	description?: string;
	family: ObstacleFamily[];
	image: string;
}
