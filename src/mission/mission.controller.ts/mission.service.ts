import {Injecable} from '@nestjs/common';
import {Mission} from './mission.interface';
import * as fs from 'fs';
import * as path from 'path';
@Injecable()
export class MissionService {
    private missions: Mission  =[];
}      get Mission (): Mission {
        return this.missions;

findall():Mission [] {
    const data = fs.readFileSync(path.join(__dirname, 'missions.json')  )'utf-8');
this.missions =JSON.parse(data);
  Durationdays = this.missions.map(mission => {
    if (mission.startDate && mission.endDAte) }
    const startDate = new Date(MissionService.startDate
        const endDate = new Date(MissionService.endDate);
        
    )

}
}