export class EventDTO{
    eventId: number;
    eventName: string;
    description: string;
    startTime: Date;
    endtime: Date;
    eventStatusId: number;
    thumbnailUrl: string;
    eventStages: EventStageDTO[];
    eventStoryboards: EventStoryboardDTO[];
}

export class EventStageDTO{
    eventStageId: number;
    eventStageName: string;
    description: string;
    eventStageStatusId: number;
    eventStageIndex: number;
    eventTasks: EventTaskDTO[];
    eventStageStoryboards: EventStoryboardDTO[];
}


export class EventTaskDTO{
    eventTaskId: number;
    eventTaskName: string;
    description: string;
    isTaskDone: boolean;
    count: number;
    eventTaskRewards: EventTaskRewardDTO[];
}


export class EventTaskRewardDTO{
    eventRewardTypeId: number;
    eentRewardTypeName: string;
    quantity: number;
    description: string;
}

export class EventStoryboardDTO{
    storyboardId: number;
    imageUrl: string;
    text: string;
    videoUrl: string;
    storyboardTitle: string;
    name: string;
    storyIndex: number;
}

export class EventStageSimple{
    eventStageName: string;
    eventStageIndex: number;
    eventStageImage: string;
    eventStageId: number;
    eventStageStatusId: number;
}

export class EventStateObject{
    event: EventDTO;
    currentOpenStage: EventStageDTO;
    stages: EventStageDTO[];
    eventStageSimple: EventStageSimple[];
}

export class UserEventDTO{
    userId?: number;
    totalScore?: number;
    event:EventDTO
}