import { TennisGame } from './TennisGame';

export class TennisGame1 implements TennisGame {
  private player1Score: number = 0;
  private player2Score: number = 0;
  private player1Name: string;
  private player2Name: string;

  constructor(player1Name: string, player2Name: string) {
    this.player1Name = player1Name;
    this.player2Name = player2Name;
  }

  wonPoint(playerName: string): void {
    playerName === this.player1Name ? this.player1Score++ : this.player2Score++;
  }

  private scoresEqual(score: number): string {
    switch (score) {
      case 0:
        return 'Love-All';
      case 1:
        return 'Fifteen-All';
      case 2:
        return 'Thirty-All';
      default:
        return 'Deuce';
    }
  }

  private isAdvantageScore(): boolean {
    const scoreDifference: number = this.player1Score - this.player2Score;

    return (
      (this.player1Score >= 4 || this.player2Score >= 4) &&
      (scoreDifference === 1 || scoreDifference === -1)
    );
  }

  private getAdvantage(scoreDifference: number): string {
    if (scoreDifference === 1) {
      return 'Advantage player1';
    }

    if (scoreDifference === -1) {
      return 'Advantage player2';
    }
  }

  private isWin(scoreDifference): boolean {
    return (
      (this.player1Score >= 4 || this.player2Score >= 4) &&
      (scoreDifference >= 2 || scoreDifference <= -2)
    );
  }

  private win(scoreDifference): string {
    return scoreDifference >= 2 ? 'Win for player1' : 'Win for player2';
  }

  getScore(): string {
    let score: string = '';
    let tempScore: number = 0;
    const scoreDifference: number = this.player1Score - this.player2Score;

    if (scoreDifference === 0) {
      return this.scoresEqual(this.player1Score);
    } else if (this.isAdvantageScore()) {
      return this.getAdvantage(scoreDifference);
    } else if (this.isWin(scoreDifference)) {
      return this.win(scoreDifference);
    } else {
      for (let i = 1; i < 3; i++) {
        if (i === 1) tempScore = this.player1Score;
        else {
          score += '-';
          tempScore = this.player2Score;
        }
        switch (tempScore) {
          case 0:
            score += 'Love';
            break;
          case 1:
            score += 'Fifteen';
            break;
          case 2:
            score += 'Thirty';
            break;
          case 3:
            score += 'Forty';
            break;
        }
      }
    }
    return score;
  }
}
