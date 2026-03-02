import {Controller , Get} from '@nestjs/common';
import (MissionService} from './mission.service';

    @Controller('mission') 

    export class MissionController {
        constructor(private missionService: MissionService) {}

        @Get  'Mission'
    }
