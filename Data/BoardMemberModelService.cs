﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net;

namespace NCCC_Blazor.Data
{
    public class BoardMemberModelService
    {
        public Task<BoardMemberList[]> GetBoardMembers()
        {
            string json = System.IO.File.ReadAllText("C:/Users/sahashra/Desktop/Sahashra/Projects/NCCC/website/NCCC-Blazor/Data/BoardMemberList.json");

            BoardMemberList boardMember = Newtonsoft.Json.JsonConvert.DeserializeObject<BoardMemberList>(json);

            return Task.FromResult(Enumerable.Range(1, boardMember.BoardMemberModel.Count()).Select(index => new BoardMemberList
            {
                BoardMemberModel = boardMember.BoardMemberModel
            }).ToArray());

        }
    }
}
