import { Game, Config } from '@/types';

class GameConfig implements Config {
  private settings: Game;

  constructor(settings: Game) {
    this.settings = settings;
  }

  getModeParam() {
    return '-mode 0';
  }

  getGameParam() {
    const { game } = this.settings;
    return `-n ${game}`;
  }

  getPlayerParam() {
    const { player } = this.settings;
    return `-p ${player}`;
  }

  getRoundParam() {
    const { round } = this.settings;
    return `-r ${round}`;
  }

  getIncomeParam() {
    const { income, incomeStep, incomeStepNumber } = this.settings;
    if (incomeStep && incomeStepNumber) {
      return `-i ${income} ${incomeStep} ${incomeStepNumber}`;
    }
    return `-i ${income}`;
  }

  getTaxParam() {
    const { tax, taxStep, taxStepNumber } = this.settings;
    if (taxStep && taxStepNumber) {
      return `-tax ${tax / 100} ${taxStep / 100} ${taxStepNumber}`;
    }
    return `-tax ${tax / 100}`;
  }

  getInitialFundingParam() {
    const { initialFunding, initialFundingStep, initialFundingStepNumber } = this.settings;
    if (initialFundingStep && initialFundingStepNumber) {
      return `-sc ${initialFunding} ${initialFundingStep} ${initialFundingStepNumber}`;
    }
    return `-sc ${initialFunding}`;
  }

  getBuyingRangeParam() {
    return '-br 0.5';
  }

  getUpgradingRangeParam() {
    return '-ur 0.5';
  }

  getTradingRangeParam() {
    return '-tr 0.5';
  }

  getCommand() {
    const parameters: string[] = [
      this.getModeParam(),
      this.getGameParam(),
      this.getPlayerParam(),
      this.getRoundParam(),
      this.getIncomeParam(),
      this.getTaxParam(),
      this.getInitialFundingParam(),
      this.getBuyingRangeParam(),
      this.getUpgradingRangeParam(),
      this.getTradingRangeParam(),
    ];
    return `python monopoly.py ${parameters.join(' ')}`;
  }
}

export default function getGameCommand(game: Game) {
  return new GameConfig(game).getCommand();
}
