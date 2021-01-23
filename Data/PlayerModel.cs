using System;
using System.Collections.Generic;

namespace NCCC_Blazor.Data
{
    public class PlayerModel
    {
        public string ID { get; set; }
        public string PlayerName { get; set; }
        public string Role { get; set; }
        public string Ball { get; set; }
        public string Bat { get; set; }
        public string Image_file { get; set; }
        public string Club { get; set; }
        public string Team { get; set; }
        public BattingRecords Batting { get; set; }
        public BowlingRecords Bowling { get; set; }
        public FieldingRecords Fielding { get; set; }

    }
    public class PlayerList
    {
        public PlayerModel[] PlayerModel { get; set; }
    }

    public class BattingRecords
    {
        public double Matches { get; set; }
        public double Innings { get; set; }
        public double RunScored { get; set; }
        public double Fours { get; set; }
        public double Sixs { get; set; }
        public double StrikeRate { get; set; }
        public double Fifties { get; set; }
        public double Hundred { get; set; }
    }

    public class BowlingRecords
    {
        public double Matches { get; set; }
        public double Innings { get; set; }
        public double Balls { get; set; }
        public double FiveWicket { get; set; }
        public double Runs { get; set; }
        public double Maidens { get; set; }
        public double Wicket { get; set; }
        public double Economy { get; set; }
    }

    public class FieldingRecords
    {
        public double Matches { get; set; }
        public double Innings { get; set; }
        public double Catches { get; set; }
        public double RanOut { get; set; }
        public double Stump { get; set; }
    }
}
