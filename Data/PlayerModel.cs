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
        public int Matches { get; set; }
        public int Innings { get; set; }
        public int RunScored { get; set; }
        public int Fours { get; set; }
        public int Sixs { get; set; }
        public int StrikeRate { get; set; }
        public int Fifties { get; set; }
        public int Hundred { get; set; }
    }

    public class BowlingRecords
    {
        public int Matches { get; set; }
        public int Innings { get; set; }
        public int Balls { get; set; }
        public int FiveWicket { get; set; }
        public int Runs { get; set; }
        public int Maidens { get; set; }
        public int Wicket { get; set; }
        public int Economy { get; set; }
    }

    public class FieldingRecords
    {
        public int Matches { get; set; }
        public int Innings { get; set; }
        public int Catches { get; set; }
        public int RanOut { get; set; }
        public int Stump { get; set; }
    }
}
