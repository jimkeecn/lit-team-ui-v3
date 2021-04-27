export class NotificationDTO{
    notificationId : number;
    notificationToken : string;
    notificationTypeId : number;
    notificationTypeShortCode : string;
    targetUserId : number;
    message : any;
}

export class CheckInNotificationDTO{
    bracketName :string;
    bracketID : number;
    bracketKnockoutName : string;
    tournamentName : string;
    tournamentID : number;
    tournamentImageUrl : string;
    matchIndex : number;
    bracketTime: Date;
}