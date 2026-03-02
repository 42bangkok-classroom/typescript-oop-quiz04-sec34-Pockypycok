export interface Mission {
    id: number ;
    codename: string;
    status : 'ACTIVE' | 'COMPLETED';
    targetName: string;
    riskLevel: 'LOW'| 'MEDIUM'| 'HIGH'| 'CRITICAL';
    startDate: Date 'YYYY-MM-DD' | 'null';
    endDate: Date; 'YYYY-MM-DD' |'null';
}