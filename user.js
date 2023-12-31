function ExecuteScript(strId)
{
  switch (strId)
  {
      case "600viFnD0ma":
        Script1();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var score = player.GetVar("score")

var lmsAPI = parent;

lmsAPI.SetScore(score, 100, 0);
}

