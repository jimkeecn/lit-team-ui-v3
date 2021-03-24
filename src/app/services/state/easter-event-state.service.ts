import { Injectable } from '@angular/core';
import { EasterEventApiService } from '@app-services/api/easter-event-api.service';
import { EventDTO, EventStageDTO, EventStageSimple, EventStateObject } from '@app-models/easterEvent';
import { BehaviorSubject, combineLatest, zip } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EasterEventStateService {

  event$ = new BehaviorSubject<EventDTO>(null)
  eventStage$ = new BehaviorSubject<EventStageDTO[]>([])
  state$ = new BehaviorSubject<EventStateObject>(null) 
  constructor(public easterApi: EasterEventApiService) {
    combineLatest([this.event$, this.eventStage$]).subscribe(res => {
      if (res[0] && res[1].length > 0) {
        var event = res[0];
      var eventStages = res[1];
      var currentStage = this.getCurrentStage(eventStages);
      var stagesSimple = this.getEventStageSimple(event, eventStages);

      var stateValue = { ...this.state$.value };
      stateValue.event = event;
      stateValue.stages = eventStages;
      stateValue.currentOpenStage = currentStage;
      stateValue.eventStageSimple = stagesSimple;
      this.state$.next(stateValue);
      }
      
    })
  }
  
  getEvent() {
    this.easterApi.getEasterEvent().subscribe(res => {
      this.event$.next(res);
    })
  }

  getEventStages() {
    this.easterApi.getEasterEventStages().subscribe(res => {
      this.eventStage$.next(res);
    })
  }



  private getCurrentStage(stages: EventStageDTO[]): EventStageDTO {
    var dc_stages:EventStageDTO[] = JSON.parse(JSON.stringify(stages));
    var currentStage = dc_stages.filter(x => x.eventStageStatusId == 2);
    return currentStage[currentStage.length - 1];
  }

  private getEventStageSimple(event: EventDTO, stages: EventStageDTO[]):EventStageSimple[] {
    var dc_stages: EventStageDTO[] = JSON.parse(JSON.stringify(stages));
    var stagesSimple: EventStageSimple[] = [];

    for (let x = 0; x < 4; x++){
 
      if (stages[x] && stages[x].eventStageStatusId == 2) {
        let object: EventStageSimple = {
          eventStageId: stages[x].eventStageId,
          eventStageIndex: stages[x].eventStageIndex,
          eventStageName: stages[x].eventStageName,
          eventStageStatusId: stages[x].eventStageStatusId,
          eventStageImage: stages[x].eventStageStoryboards.length > 0 ? stages[x].eventStageStoryboards[0].imageUrl : event.thumbnailUrl
        }
        stagesSimple.push(object);
      } else {
        let object: EventStageSimple = {
          eventStageId: null,
          eventStageImage: event.thumbnailUrl,
          eventStageIndex: x,
          eventStageName: "",
          eventStageStatusId: 1
        }
        stagesSimple.push(object);
      }
    }
    console.log('simple', stagesSimple);
    return stagesSimple;
  }
  
}
