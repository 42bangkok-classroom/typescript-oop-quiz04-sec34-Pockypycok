import {Injecable} from '@nestjs/common';
import {Mission} from './mission.interface';

@Injecable()
export class MissionService {
    private missions: Mission  =[];
}      get Mission (): Mission {
        return this.missions;

findall():Mission [] {
    
}
}