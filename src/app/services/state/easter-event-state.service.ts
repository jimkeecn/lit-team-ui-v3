import { Injectable } from '@angular/core';
import { EasterEventApiService } from '@app-services/api/easter-event-api.service';
import { EventDTO, EventStageDTO, EventStageSimple, EventStateObject, EventStoryboardDTO, EventTaskDTO, UserEventDTO, UserScoreLadderDTO } from '@app-models/easterEvent';
import { BehaviorSubject, combineLatest, zip } from 'rxjs';
import { state } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class EasterEventStateService {

  userState$ = new BehaviorSubject<UserEventDTO>(null);
  event$ = new BehaviorSubject<EventDTO>(null);
  eventStage$ = new BehaviorSubject<EventStageDTO[]>([]);
  state$ = new BehaviorSubject<EventStateObject>(null);
  currentStoryBoard$ = new BehaviorSubject<EventStoryboardDTO[]>([]);
  currentStageTasks$ = new BehaviorSubject<EventTaskDTO[]>([]);
  ladder$ = new BehaviorSubject<UserScoreLadderDTO[]>([]);
  isStory = false;
  isTask = false;
  isLadder = false;
  constructor(public easterApi: EasterEventApiService) {
    combineLatest([this.userState$, this.eventStage$]).subscribe(res => {
      if (res[0] && res[1]) {
      var event = res[0].event;
      var eventStages = res[1];
      var currentStage
        if (res[1].length > 0) {
          currentStage = this.getCurrentStage(eventStages);
        }
     
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
      this.userState$.next(res);
    })

    this.easterApi.getEasterEventStages().subscribe(res => {
      this.eventStage$.next(res);
    })

    this.easterApi.getEasterEventLadder().subscribe(res => {
      this.ladder$.next(res);
    })
  }


  setCurrentStoryBoard(stageId:number) {
    this.isStory = true;
    var stage = this.state$.value.stages.find(x => x.eventStageId == stageId);
    this.currentStoryBoard$.next(stage.eventStageStoryboards);
  }

  getTask(stageId: number) {
    var stages = this.userState$.value.event.eventStages;
    var stage = stages.find(x => x.eventStageId == stageId);
    this.currentStageTasks$.next(stage.eventTasks);
    console.log(this.currentStageTasks$.value);
    this.isTask = true;
  }

  getLadder() {
    this.isLadder = true;
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
 
      if (dc_stages[x] && dc_stages[x].eventStageStatusId == 2) {
        let object: EventStageSimple = {
          eventStageId: dc_stages[x].eventStageId,
          eventStageIndex: dc_stages[x].eventStageIndex,
          eventStageName: dc_stages[x].eventStageName,
          eventStageStatusId: dc_stages[x].eventStageStatusId,
          eventStageImage: dc_stages[x].eventStageStoryboards.length > 0 ? dc_stages[x].eventStageStoryboards[0].imageUrl : event.thumbnailUrl
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
