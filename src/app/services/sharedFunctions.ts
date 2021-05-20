import { LeagueOfLegendsPosition } from "../models/static";

export function getPositonText(number) {
    switch (number) {
      case LeagueOfLegendsPosition.Fill:
        return "Fill";
      case LeagueOfLegendsPosition.Top:
        return "Top Laner";
      case LeagueOfLegendsPosition.Jungler:
        return "Jungler";
      case LeagueOfLegendsPosition.Mid:
        return "Mid Laner";
      case LeagueOfLegendsPosition.ADC:
        return "ADC";
      case LeagueOfLegendsPosition.Support:
        return "Support";
      default:
        return "Full";
    }
}