export interface Participant {
    id: number;
    userId: number;
    eventId: number;
    confirmed: boolean;
    patroFriendId: number;
    createdAt: Date;
}