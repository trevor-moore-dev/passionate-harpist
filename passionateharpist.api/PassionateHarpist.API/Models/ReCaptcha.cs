using System;
using Newtonsoft.Json;

namespace PassionateHarpist.API.Models
{
    public class ReCaptcha
    {
        public bool Success { get; set; }
        [JsonProperty("challenge_ts")]
        public DateTime ChallengeTimestamp { get; set; }
        public string Hostname { get; set; }
        [JsonProperty("error-codes")]
        public string[] Errorcodes { get; set; }
    }
}