using Newtonsoft.Json;

namespace PassionateHarpist.API.Models
{
    public class SocialMedia
    {
        [JsonProperty("id")]
        public string Id { get; set; }
        [JsonProperty("caption")]
        public string Caption { get; set; }
        [JsonProperty("media_type")]
        public string MediaType { get; set; }
        [JsonProperty("media_url")]
        public string MediaUrl { get; set; }
        [JsonProperty("permalink")]
        public string PermaLink { get; set; }
        [JsonProperty("timestamp")]
        public string Timestamp { get; set; }
    }

    public class UserMedia
    {
        [JsonProperty("data")]
        public SocialMedia[] Data { get; set; }
    }
}