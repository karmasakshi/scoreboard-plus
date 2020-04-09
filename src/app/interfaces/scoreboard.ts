import { Participant } from './participant';
import { RoundScore } from './round-score';

export interface Scoreboard {
  id: string;
  ownerUid: string;
  participants: Participant[];
  roundScores: RoundScore[];
  title: string;
}
